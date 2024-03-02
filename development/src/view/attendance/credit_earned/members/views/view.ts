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
import { DELETE_AttendanceDeleteScheduleTime } from '@@addons/network/attendance/setup/time/delete';
import { getTime } from '@@addons/functions/date_time/time';
import './form/edit';
import {base64Encode} from '@@addons/functions/base64';


@customElement("view-times")
export class ViewTimes extends LitElement {
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

  @query('[show-adminField="all"]')
  private showAdminFieldAllSelector: Element;

  async connectedCallback() {
    super.connectedCallback();
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
    return html`${this.schedule}`;
  }

  private get schedule() {
    return html`${this.table}`;
  }

  firstUpdated() {

  }

  private get __tableHeaders(): DataTables_ColumnSettings_I[] {
    return [
      { title: 'Time', },
      { title: 'Action', },
    ];
  }

  private get __tableBody(): DataTables_ColumnSettings_I[][] {
    return [];
  }

  private get __tableFoot(): DataTables_ColumnSettings_I[] {
    return [
      { title: 'Time', },
      { title: 'Action', },
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
      url = CONSTANTS.URLS.AKWAABA_API_BASE_URL + 'attendance/meeting-event/time?datatable_plugin&meetingEventId=' + this.meetingEventId;

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
          data: 'meetingEventId',
          render: (data: any, type: any, row: any) => __this.renderRow2Info(data, type, row),
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
        __this.removeTimeBtns();
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
    console.log({ "row-row": row });
    // console.log({ "JSON.stringify(row)-JSON.stringify(row)": JSON.stringify(row) });

    // const time: MeetingEventTimeModel = metConvert.toMeetingEventTimeModel(JSON.stringify(row));
    // console.log({ "time-time": time });

    return `
      <div>
        <span class="text-1xl font-bold">${getTime(row.startTime).toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})}</span> 
        <small class="-bold">TO</small>
        <span class="text-1xl font-bold">${getTime(row.endTime).toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})}</span>
      </div>
    `;
  }

  renderRow2Info(data: any, type: any, row: any): any {

    const time: MeetingEventTimeModel = metConvert.toMeetingEventTimeModel(JSON.stringify(row));
    console.log({ "time-time": time });

    return `
      <div class="flex align-middle items-center">
        <time-edit-btn-component timeData=${base64Encode(JSON.stringify(time))}></time-edit-btn-component>
        <div><mwc-button class="ml-1 danger" raised delete-this-item="${time.id}" >
        <mwc-icon class="mr-1">delete_forever</mwc-icon>
      </mwc-button></div>
      </div>
    `;
  }

  private removeTimeBtns() {
    const selectorString = 'delete-this-item';
    document.querySelectorAll('[' + selectorString + ']').forEach(verify_member => {
      verify_member.addEventListener('click', (e) => {
        e.preventDefault();
        this.removeTimeAction(verify_member, selectorString, e);
      });
    });

  }

  private async removeTimeAction(element: Element, selectorString: string, e: any) {
    e.preventDefault();

    const memberID = element.getAttribute(selectorString);

    if (!Number.isNaN(memberID) && Number(memberID) !== 0) {
      await DELETE_AttendanceDeleteScheduleTime(Number(memberID));
    }
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
