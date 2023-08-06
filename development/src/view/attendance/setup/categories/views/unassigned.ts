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
import { MemberCategoryIDModel } from '@@addons/interfaces/attendance/meeting_event/schedules/categories';
import { POST_AttendanceAddScheduleCategory } from '@@addons/network/attendance/setup/category/add';
import { POST_AttendanceAddScheduleCategoryBulk } from '@@addons/network/attendance/setup/category/assign_multiple';


@customElement("unassigned-categories")
export class UnAssignedCategories extends LitElement {
  constructor() { super(); }

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
      { title: 'Schedule', },
      { title: 'Type', },
    ];
  }

  private get __tableBody(): DataTables_ColumnSettings_I[][] {
    return [];
  }

  private get __tableFoot(): DataTables_ColumnSettings_I[] {
    return [
      { title: 'Category', },
      { title: 'Action', },
    ];
  }

  private get table(): TemplateResult {
    const __dataTable = this.__dataTable();
    let ajaxHeader: { Authorization?: string } = {};
    const _get_cookie = getUserLoginInfoCookie();
    ajaxHeader.Authorization = "Token " + _get_cookie.token;
    return html`
      ${this.table_header}
      <datatables-new .datatable="${__dataTable}" .ajaxHeader="${ajaxHeader}"  .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `;
  }

  private get table_header() {
    return html`
      <div class="flex-col p-2 mb-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 pb-5">
        <div
          class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 border-b-2 mb-2">
          <label class="flex justify-between items-center">
            <b>CHECK ALL: </b>
            <input id="add_categories_all" name="add_categories_all" type="checkbox"
              class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              @change="${this.check_all_categories}" />
          </label>
        </div>
        <div
          class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 border-b-2 mb-2">
          <mwc-button class="success" raised add_categories_all="activate" @click="${this.activateMultipleMemberAction}">
            Add All Selected</mwc-button>
        </div>
      </div>
    `;
  }

  private __dataTable(): DataTables_Settings_I {
    const __this = this,
      url = CONSTANTS.URLS.AKWAABA_API_BASE_URL + 'attendance/meeting-event/category/unassigned/'+this.meetingEventId+'?datatable_plugin';

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
          data: 'category',
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
        __this.addCategoryBtns();
      },
      "responsive": false,
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

    // const category: MemberCategoryID = mecmConvert.toMemberCategoryID(JSON.stringify(row));
    const category = MemberCategoryIDModel.fromJson((row));
    // console.log({ "category-category": category });

    return `
      <div class="flex items-center whitespace-normal mb-0">
        <div class="pr-3">
          <input id="category_info" name="category_info" type="checkbox" value="${category.id}"
            class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div>
          <h2 class="text-1xl font-bold">${category.category}</h2>
          <li>${"category..name"}</li>
        </div>
      </div>
    `;
  }

  renderRow2Info(data: any, type: any, row: any): any {
    // const category: MemberCategoryIDModel = mecmConvert.toMemberCategoryIDModel(JSON.stringify(row));
    const category = MemberCategoryIDModel.fromJson((row));

    return `
      <div>
        <mwc-button class="ml-1 success text-center" raised add-this-item="${category.id}" >
           <mwc-icon class="mr-1 text-center">add</mwc-icon> <span class="text-center">Add</span>
        </mwc-button>
      </div>
    `;
  }

  private async check_all_categories(e: any) {
    e.preventDefault();

    document.querySelectorAll('[id="add_categories_all"][name="add_categories_all"]').forEach((input: HTMLInputElement) => {
      if (input.checked) {
        document.querySelectorAll('[id="category_info"][name="category_info"]').forEach((_input_: HTMLInputElement) => {
          _input_.checked = true;
        })
      } else {
        document.querySelectorAll('[id="category_info"][name="category_info"]').forEach((_input_: HTMLInputElement) => {
          _input_.checked = false;
        })
      }
    })
  }

  private async activateMultipleMemberAction(e: any) {
    e.preventDefault();

    let ids: Array<number> = [];

    document.querySelectorAll('[id="category_info"][name="category_info"]').forEach((input: HTMLInputElement) => {
      if (input.checked) {
        if (!Number.isNaN(input.value)) {
          const value = Number(input.value);
          if (!ids.includes(value)) {
            ids.push(value)
          }
        }
      }
    })
    await POST_AttendanceAddScheduleCategoryBulk(this.meetingEventId, ids);
  }

  private addCategoryBtns() {
    const selectorString = 'add-this-item';
    document.querySelectorAll('[' + selectorString + ']').forEach(verify_member => {
      verify_member.addEventListener('click', (e) => {
        e.preventDefault();
        this.addCategoryAction(verify_member, selectorString, e);
      });
    });

  }

  private async addCategoryAction(element: Element, selectorString: string, e: any) {
    e.preventDefault();

    const memberID = element.getAttribute(selectorString);

    if (!Number.isNaN(memberID) && Number(memberID) !== 0) {
      await POST_AttendanceAddScheduleCategory(this.meetingEventId, Number(memberID));
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
