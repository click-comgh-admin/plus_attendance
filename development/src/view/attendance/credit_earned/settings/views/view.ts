import '@@assets/styles/views/widget/simple-table/main.scss';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-icon-button';
import '@material/mwc-circular-progress';
import '@@widgets/datatables';
import '@@interfaces/datatables';
import { urlQueryParams, urlQueryParamsGet } from '@@addons/functions/url_query_params';
import '@@addons/widgets/form/new/select';
import { CONSTANTS } from '@@addons/constants';
import { getUserLoginInfoCookie } from '@@addons/functions/login';
import { MeetingEventTimeModel, Convert as metConvert } from '@@addons/interfaces/attendance/meeting_event/schedules/times';
import { DELETE_AttendanceDeleteScheduleCreditEarned } from '@@addons/network/attendance/setup/credit_earned/delete';
import { MemberCreditEarnedModel, Convert as mcemConvert } from '@@addons/interfaces/attendance/credit_earned/member';
import { CreditEarnedModel, Convert as cemConvert } from '@@addons/interfaces/attendance/credit_earned';
import { getTime } from '@@addons/functions/date_time/time';
import './form/edit';
import './edit';
import './form/delete';
import {base64Decode, base64Encode} from '@@addons/functions/base64';
import { getDateTime } from '@@addons/functions/date_time';


@customElement("view-times")
export class ViewCreditEarned extends LitElement {
  constructor() { super(); 
    
  }

  @property({ type: Number })
  public CLIENT_ID: number = 0;

  @property({ type: Array })
  public _data?: Array<string> = [];

  @property({ type: Object })
  private urlQueryParams?: { [k: string]: string; } = undefined;

  @property({ type: Number })
  private meetingEventId?: number = 0;

  @property({ type: Object })
  private editCreditData?: CreditEarnedModel = null;

  @query('[show-adminField="all"]')
  private showAdminFieldAllSelector: Element;

  async connectedCallback() {
    super.connectedCallback();
    // @ts-ignore
    window['editCreditData'] = null;
    this.urlQueryParams = urlQueryParams();

    this.getMeetingEventId();
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    if (this.editCreditData === null) {
      return html`${this.schedule}`;
    } else {
      return html`<edit-times creditEarnedData="${this.editCreditData}"></edit-times>`;
    }
  }

  private get schedule() {
    return html`${this.table}`;
  }

  firstUpdated() {

    setInterval(()=>{
      // @ts-ignore
      if (this.editCreditData === null && window['editCreditData'] !== null) {
        // @ts-ignore
        const editCreditData = base64Decode(window['editCreditData']);
        // console.log({"window['editCreditData']--window['editCreditData']": editCreditData});
        // @ts-ignore
        const creditEarnedData: CreditEarnedModel = cemConvert.toCreditEarnedModel((editCreditData));
        this.editCreditData = creditEarnedData;
        // console.log({"this.editCreditData--this.editCreditData": this.editCreditData});

    setTimeout(()=>{
      this.editCreditData = null;
      // @ts-ignore
      window['editCreditData'] = null;
    }, 1000);
      }
    }, 1000);
  }

  private get __tableHeaders(): DataTables_ColumnSettings_I[] {
    return [
      { title: 'Schedule', },
      { title: 'Branch', },
      { title: 'Credit Type', },
      { title: 'Duration', },
      { title: 'Credit Unit', },
      { title: 'Last Updated By', },
    ];
  }

  private get __tableBody(): DataTables_ColumnSettings_I[][] {
    return [];
  }

  private get __tableFoot(): DataTables_ColumnSettings_I[] {
    return [
      { title: 'Schedule', },
      { title: 'Branch', },
      { title: 'Credit Type', },
      { title: 'Duration', },
      { title: 'Credit Unit', },
      { title: 'Last Updated By', },
    ];
  }

  private get table(): TemplateResult {
    const __dataTable = this.__dataTable();
    let ajaxHeader: { Authorization?: string } = {};
    const _get_cookie = getUserLoginInfoCookie();
    ajaxHeader.Authorization = "Token " + _get_cookie.token;
    return html`
      <datatables-new .datatable="${__dataTable}" .ajaxHeader="${ajaxHeader}"  .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `;
  }

  private __dataTable(): DataTables_Settings_I {
    const __this = this,
      url = CONSTANTS.URLS.AKWAABA_API_BASE_URL + 'attendance/credit-earned?datatable_plugin';

    // console.log({ "projects": this._questionnaireResponses });
    let dataTable: DataTables_Settings_I = {
      'order': [[0, 'desc']],
      'processing': true,
      'serverSide': true,
      'ajax': {
        // @ts-ignore
        url: url,
        dataSrc: 'data',
        apiType: "akwaabaApp",
      },
      "columns": [
        {
          data: 'id',
          render: (data: any, type: any, row: any) => __this.renderRow1Info(data, type, row),
          orderable: true,
        },
        {
          data: 'clientId',
          render: (data: any, type: any, row: any) => __this.renderRow2Info(data, type, row),
          orderable: true
        },
        {
          data: 'branchIds',
          render: (data: any, type: any, row: any) => __this.renderRow3Info(data, type, row),
          orderable: true,
        },
        {
          data: 'scheduleIds',
          render: (data: any, type: any, row: any) => __this.renderRow4Info(data, type, row),
          orderable: true
        },
        {
          data: 'memberIds',
          render: (data: any, type: any, row: any) => __this.renderRow5Info(data, type, row),
          orderable: true,
        },
        {
          data: 'updatedBy',
          render: (data: any, type: any, row: any) => __this.renderRow6Info(data, type, row),
          orderable: true
        },

      ],
      'columnDefs': [
        {
          targets: ['_all'],
          className: 'mdc-data-table__cell',
          // @ts-ignore
          checkboxes: {
            selectRow: true
          },
        }
      ],
      'lengthMenu': [10, 25, 50, 100, 500, 1000],
      "drawCallback": async function (e) {
        const aoData = e.aoData;
      },
      "responsive": true,
      "dom": 'Blfrtip',
      buttons: [
        'selected',
        'selectedSingle',
        'selectAll',
        'selectNone',
        'selectRows',
        'selectColumns',
        'selectCells',
        'pdf',
        'excel',
        'copy',
        'csv',
      ],
      select: true,
      // "select": {
      //   "style": "multi"
      // },
    };
    return dataTable;
  }

  renderRow1Info(data: any, type: any, row: any): any {
    // console.log({ "row-row": row });
    // console.log({ "JSON.stringify(row)-JSON.stringify(row)": JSON.stringify(row) });

    const creditEarned: CreditEarnedModel = cemConvert.toCreditEarnedModel(JSON.stringify(row));
    // console.log({ "creditEarned-creditEarned": creditEarned });

    if (creditEarned.scheduleIDS.length > 0) return `
      <div>
        <ul class="list-disc">
          ${creditEarned.scheduleIDS.map(schedule => {
            return `<li>${schedule.name}</li>`;
          })}
        </ul>
      </div>
    `;

    return `
      ???
    `;
  }

  renderRow2Info(data: any, type: any, row: any): any {

    const creditEarned: CreditEarnedModel = cemConvert.toCreditEarnedModel(JSON.stringify(row));
    // console.log({ "creditEarned-creditEarned": creditEarned });

    if (creditEarned.branchIDS.length > 0) return `
      <div>
        <ul class="list-disc">
          ${creditEarned.branchIDS.map(branch => {
            return `<li>${branch.name}</li>`;
          })}
        </ul>
      </div>
    `;

    return `
      ???
    `;
  }

  renderRow3Info(data: any, type: any, row: any): any {

    const creditEarned: CreditEarnedModel = cemConvert.toCreditEarnedModel(JSON.stringify(row));
    // console.log({ "creditEarned-creditEarned": creditEarned });

    return `
      <div>
        ${creditEarned.type.name}
      </div>
    `;
  }

  renderRow4Info(data: any, type: any, row: any): any {

    const creditEarned: CreditEarnedModel = cemConvert.toCreditEarnedModel(JSON.stringify(row));
    // console.log({ "creditEarned-creditEarned": creditEarned });

    if (![0,1,2].includes(creditEarned.type.id)){
    return `
      <div>
        ${creditEarned.durationValue} ${creditEarned.duration.name}(s)
      </div>
    `;}return ``;
  }

  renderRow5Info(data: any, type: any, row: any): any {

    const creditEarned: CreditEarnedModel = cemConvert.toCreditEarnedModel(JSON.stringify(row));
    // console.log({ "creditEarned-creditEarned": creditEarned });

    return `
      <div>
        <b>${creditEarned.sign.name}</b> ${creditEarned.currency} ${creditEarned.unit}
      </div>
    `;
  }

  renderRow6Info(data: any, type: any, row: any): any {

    const creditEarned: CreditEarnedModel = cemConvert.toCreditEarnedModel(JSON.stringify(row));
    // console.log({"creditEarned--creditEarned": creditEarned})

    return `
      <div>
        ${creditEarned.updatedByInfo.accountID === null? "-": `${creditEarned.updatedByInfo.firstname} ${creditEarned.updatedByInfo.surname}` }
      </div>
      <div>
        ${getDateTime(creditEarned.updateDate)}
      </div>
      <div class="flex align-middle items-center">
        <credit-earned-edit-btn-component creditEarnedData=${base64Encode(JSON.stringify(row))}></credit-earned-edit-btn-component>
        <credit-earned-delete-btn-component creditEarnedId="${creditEarned.id}"></credit-earned-delete-btn-component>
      </div>
    `;
  }

  private getMeetingEventId() {
    let meetingEventId = urlQueryParamsGet('meeting-event-id');
    let _meetingEventId = meetingEventId !== null ? Number(meetingEventId) : null;
    this.meetingEventId = Number.isNaN(_meetingEventId) ? null : _meetingEventId;
    // console.log({ "this.urlQueryParams": this.urlQueryParams, "this.meetingEventId": this.meetingEventId });
  }

  createRenderRoot() {
    return this;
  }
}
