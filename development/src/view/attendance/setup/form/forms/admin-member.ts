import "@@assets/styles/views/home/dashboard.scss";
import { LitElement, html, css, TemplateResult, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import '@material/mwc-tab';
import '@material/mwc-button';
import '@material/mwc-tab-bar';
import '@material/mwc-circular-progress';
import '@@addons/widgets/form/new/switch';
import '@@addons/widgets/add_remove_widget';
import '@@addons/widgets/form/new/file-select';
import '@@widgets/datatables';
import '@@interfaces/datatables';
import { GET_AttendanceSchedule } from '@@addons/network/attendance/setup/schedule';
import { urlQueryParams, urlQueryParamsGet, urlQueryParamsJoin } from '@@addons/functions/url_query_params';
import { MeetingEventSchedule_I } from '@@addons/interfaces/attendance/meeting_event/schedules';
import { NetworkCallPaginResponse_I, NetworkCallResponse_I } from '@@addons/interfaces/network_calls/response';
import { DELETE_AttendanceDeleteScheduleMember } from '@@addons/network/attendance/setup/member/delete';
import { MeetingEventScheduleMember_I } from '@@addons/interfaces/attendance/meeting_event/member';
import { ClientUsers_I } from '@@addons/interfaces/clients/users';
import '@@addons/widgets/form/new/select';
import { POST_AttendanceAddScheduleMember } from '@@addons/network/attendance/setup/member/post';
import { CONSTANTS } from '@@addons/constants';
import { getUserLoginInfoCookie } from '@@addons/functions/login';
import '../../schedules/title_card';
import { MeetingEventScheduleAdminMemberModel } from '@@addons/interfaces/attendance/meeting_event/admin/member';
import { Button } from '@material/mwc-button';
import "./admin/row1";
import "./admin/row2";
import { DELETE_AttendanceScheduleAdminMembers, RemoveAdminMember } from "@@addons/network/attendance/setup/admin/member/delete";
import { AddAdminMember, POST_AttendanceScheduleAdminMembers } from "@@addons/network/attendance/setup/admin/member/post_multiple";



@customElement("attendance-setup-form-admin-member")
export class AttendanceSetupFormAdminMember extends LitElement {
  constructor() { super(); }

  @property({ type: Number })
  public CLIENT_ID: number = 0;

  @query('#assignedMemberDisplayBtn')
  private assignedMemberDisplayBtn: Button;

  @query('#unassignedMemberDisplayBtn')
  private unassignedMemberDisplayBtn: Button;

  @property({ type: Number })
  private statusDisplay: number = 1;

  private __memberUser: NetworkCallPaginResponse_I<ClientUsers_I> = null;

  public set _memberUser(value: NetworkCallPaginResponse_I<ClientUsers_I>) {
    this.__memberUser = value;
    this.requestUpdate();
  }

  public get _memberUser(): NetworkCallPaginResponse_I<ClientUsers_I> {
    return this.__memberUser;
  }

  private __schedule: NetworkCallResponse_I<MeetingEventSchedule_I> = null;

  public set _schedule(value: NetworkCallResponse_I<MeetingEventSchedule_I>) {
    this.__schedule = value;
    this.requestUpdate();
  }

  public get _schedule(): NetworkCallResponse_I<MeetingEventSchedule_I> {
    return this.__schedule;
  }

  private __scheduleMembers: NetworkCallPaginResponse_I<MeetingEventScheduleMember_I> = null;

  public set _scheduleMembers(value: NetworkCallPaginResponse_I<MeetingEventScheduleMember_I>) {
    this.__scheduleMembers = value;
    this.requestUpdate();
  }

  public get _scheduleMembers(): NetworkCallPaginResponse_I<MeetingEventScheduleMember_I> {
    return this.__scheduleMembers;
  }

  @property({ type: Boolean })
  private _isLoading: boolean = false;

  @property({ type: Boolean })
  private firstLoad: boolean = true;

  @property({ type: Object })
  private renderView: TemplateResult = html``;

  @property({ type: Array })
  public _data?: Array<string> = [];

  @property({ type: Object })
  private urlQueryParams?: { [k: string]: string; } = undefined;

  @property({ type: Number })
  private meetingEventId?: number = 0;

  @property({ type: Number })
  private meetingAdminId?: number = 0;

  async connectedCallback() {
    super.connectedCallback();
    this.urlQueryParams = urlQueryParams();
    this.getMeetingEventId();
    this.getMeetingAdminId();

    document.onreadystatechange = (event) => {
      if (document.readyState == "complete") this.handleQueryParam();
    }

    await this.getAttendanceSchedule();
    // await this.getAttendanceScheduleMember();
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    // console.log({"this.firstLoad": this.firstLoad, "this._isLoading": this._isLoading})
    return html`
      <span class="flex flex-row md:flex-col w-100">
      </span>
      <div class="mt-1 mb-2 border border-y-2 rounded shadow-sm">
        <div class="block my-1">
          <schedule-title-card meetingEventId="${this.meetingEventId}" CLIENT_ID="${this.CLIENT_ID}">
          </schedule-title-card>
        </div>
      </div>
      <div class="block my-2">
        ${(this.firstLoad) ? this.mainRender : nothing}
        ${(this._isLoading) ? html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `: this.renderView}
      </div>
    `;
  }

  private get getCurrentTabFromQueryParam() {
    const urlParams = new URLSearchParams(window.location.search);
    const viewParam = urlParams.get('member-view');
    return viewParam;
  }

  private get currentIndex() {
    if (this.getCurrentTabFromQueryParam === "unassigned") {
      return 1;
    } else {
      return 0;
    }
  }

  private handleQueryParam() {
    const viewParam = this.getCurrentTabFromQueryParam;
    // console.log({viewParam});

    if (viewParam === "unassigned") {
      this.displayUnassignedMembers(new Event('click'));
    } else {
      this.displayAssignedMembers(new Event('click'));
    }
    this.pageRenderFirstView();
  }

  private updateQueryParam(param: string) {


    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('member-view', param);
    // urlParams.set('origin', window.location.origin);
    const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
    // console.log({"window.history": window.history, "newUrl": newUrl});
    window.history.replaceState('', '', newUrl);
    this.reloadRenderView(new Event('click'));
  }

  private displayUnassignedMembers(e: any) {
    e.preventDefault();
    this.statusDisplay = 1;
    this.updateQueryParam("unassigned");
  }

  private displayAssignedMembers(e: any) {
    e.preventDefault();
    this.statusDisplay = 2;
    this.updateQueryParam("assigned");
  }

  pageRenderView() {
    this.firstLoad = false;
    this._isLoading = true;
    this.renderView = html``;

    setTimeout(() => {
      this.renderView = this.mainRender;
      this._isLoading = false;
    }, 100);
  }

  pageRenderFirstView() {
    setTimeout(() => {
      this.firstLoad = true;
      this._isLoading = false;
      this.renderView = html``;
    }, 100);
  }

  get mainRender() {
    return html`
      <!-- <mwc-button icon="refresh" label="Reload" raised class="primary mt-1"
        @click="${/** this.reloadRenderView */ ""}">
      </mwc-button> -->
      <div>
        <div class="main-container">
          <div class="md:hidden block">
            <mwc-tab-bar activeIndex="${this.currentIndex.valueOf()}">
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="check_circle" id="assignedMemberDisplayBtn"
                label="Member" @click="${this.displayAssignedMembers}"></mwc-tab>
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="circle" id="unassignedMemberDisplayBtn"
                label="Member" @click="${this.displayUnassignedMembers}"></mwc-tab>
            </mwc-tab-bar>
          </div>
          <div class="md:block hidden">
            <mwc-tab-bar activeIndex="${this.currentIndex.valueOf()}">
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="check_circle" id="assignedMemberDisplayBtn"
                label="Member :: Assigned" @click="${this.displayAssignedMembers}"></mwc-tab>
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="circle" id="unassignedMemberDisplayBtn"
                label="Member :: Unassigned" @click="${this.displayUnassignedMembers}"></mwc-tab>
            </mwc-tab-bar>
          </div>
          <hr class="mt-3 mb-2"/>
          <div class="p-2">
            ${/** this.getDisplay */ ""}
          </div>
        </div>
      </div>
      ${this.schedule}
    `;
  }

  reloadRenderView(e: Event) {
    e.preventDefault();

    this.pageRenderView();
  }

  private get schedule() {
    // console.log({ "this._schedule": this._schedule });
    if (this._schedule === null) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;
    } else if (this._schedule === undefined) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `;
    } else if (this._schedule.success === true) {
      return html`
        <div class="flex items-center justify-center ">
          <div class="w-full md:w-[40rem] items-center justify-center">
            ${this.table_header}
          </div>
        </div>
        <div class="flex items-center justify-center ">
          <div class="w-full md:w-[30rem]">
            ${this.table}
          </div>
        </div>
      `;
    } else {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `;
    }
  }
  private get table_header() {
    // <div class="flex flex-col md:flex-row p-2 mb-2 pb-5">
    return html`
      <div class="p-2 mb-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-flow-row gap-4 pb-5">
        <div
          class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 border-b-2 mb-2">
          <label class="flex justify-between items-stretch px-4 my-2">
            <b>CHECK ALL: </b>
            <input id="admin_member_info_all" name="admin_member_info_all" type="checkbox"
              class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              @change="${this.check_all_admin_members}" />
          </label>
        </div>
        <div
          class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 border-b-2 mb-2 flex justify-center items-center">
          ${this.currentIndex === 0? html`
            <mwc-button class="danger" raised admin_member_info_all="unassign"
              @click="${this.unassignMultipleMemberAction}">Unassign All Selected</mwc-button>
              `: html`<mwc-button class="success" raised admin_member_info_all="assign" @click="${this.assignMultipleMemberAction}">
            Assign All Selected</mwc-button>`}
        </div>
      </div>
    `;
  }

  private get __tableHeaders(): DataTables_ColumnSettings_I[] {
    return [
      { title: 'Member(s)', },
      { title: 'Action', },
    ];
  }

  private get __tableBody(): DataTables_ColumnSettings_I[][] {
    return [];
  }

  private get __tableFoot(): DataTables_ColumnSettings_I[] {
    return [
      { title: 'Member(s)', },
      { title: 'Action', },
    ];
  }

  private get table(): TemplateResult {
    let URL = CONSTANTS.URLS.AKWAABA_API_BASE_URL;
    console.log({ "this.currentIndex--this.currentIndex": this.currentIndex });
    if (this.currentIndex === 0) {
      URL += "attendance/meeting-event/admin-member?datatable_plugin&meetingEventId=" + this.meetingEventId + "&adminId=" + this.meetingAdminId;
    } else {
      URL += "attendance/meeting-event/admin-member/unassigned/" + this.meetingEventId + "/" + this.meetingAdminId + "?datatable_plugin";
    }

    // console.log({URL});

    const __dataTable = this.__dataTable(URL);
    let ajaxHeader: { Authorization?: string } = {};
    const _get_cookie = getUserLoginInfoCookie();
    ajaxHeader.Authorization = "Token " + _get_cookie.token;
    return html`
      <datatables-new .datatable="${__dataTable}" .ajaxHeader="${ajaxHeader}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `;
  }

  firstUpdated() { }

  private rowOneRender(data: any) {
    // console.log({"data-data--data::One": data});

    const adminMember = MeetingEventScheduleAdminMemberModel.fromJson(data);
    // console.log({ adminMember });

    if (this.currentIndex == 0) {
      return `
        <admin-member-row1-component isAssigned class="p-0 m-0"
          adminMemberString='${adminMember.toString()}'>
        </admin-member-row1-component>
      `;
    } else {
      return `
        <admin-member-row1-component class="p-0 m-0"
          adminMemberString='${adminMember.toString()}'>
        </admin-member-row1-component>
      `;
    }

  }

  private rowTwoRender(data: any) {
    // console.log({"data-data--data::Two": data});

    const adminMember = MeetingEventScheduleAdminMemberModel.fromJson(data);
    // console.log({ adminMember });

    if (this.currentIndex == 0) {
      return `
        <admin-member-row2-component isAssigned class="p-0 m-0"
          adminMemberString='${adminMember.toString()}'>
        </admin-member-row2-component>
      `;
    } else {
      return `
        <admin-member-row2-component class="p-0 m-0"
          adminMemberString='${adminMember.toString()}'>
        </admin-member-row2-component>
      `;
    }
  }

  private __dataTable(url: string): DataTables_Settings_I {
    const __this = this;

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
          render: (data: any, type: any, member: any) => __this.rowOneRender(member),
          orderable: true,
          // className: "w-1/6",
        },
        {
          data: 'memberId',
          render: (data: any, type: any, member: any) => __this.rowTwoRender(member),
          orderable: true,
          // className: "w-20",
        },
        // {
        //   data: 'meetingCategoryId',
        //   render: (data: any, type: any, member: any) => __this.rowFiveRender(member),
        //   orderable: true
        // },

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
        // console.log({ aoData })
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

  async submitForm(e: PointerEvent) {
    e.preventDefault();
    await POST_AttendanceAddScheduleMember();
  }

  async deleteQuestionnaireMeetingAttendanceMember(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });

    // @ts-ignore
    const meetingEventId = Number(e.currentTarget.getAttribute('delete-this-item'));

    await DELETE_AttendanceDeleteScheduleMember(meetingEventId);
  }

  private getMeetingEventId() {
    let meetingEventId = urlQueryParamsGet('meeting-event-id');
    let _meetingEventId = meetingEventId !== null ? Number(meetingEventId) : null;
    this.meetingEventId = Number.isNaN(_meetingEventId) ? null : _meetingEventId;
    // console.log({ "this.urlQueryParams": this.urlQueryParams, "this.meetingEventId": this.meetingEventId });
  }

  private getMeetingAdminId() {
    let meetingAdminId = urlQueryParamsGet('meeting-admin-id');
    let _meetingAdminId = meetingAdminId !== null ? Number(meetingAdminId) : null;
    this.meetingAdminId = Number.isNaN(_meetingAdminId) ? null : _meetingAdminId;
    // console.log({ "this.urlQueryParams": this.urlQueryParams, "this.meetingAdminId": this.meetingAdminId });
  }

  private async getAttendanceSchedule() {
    const _networkResponse = await GET_AttendanceSchedule<MeetingEventSchedule_I>(this.meetingEventId);
    if (_networkResponse === null) {
      this._schedule = undefined;
    } else {
      this._schedule = _networkResponse.response;
    }
  }

  private async check_all_admin_members(e: any) {
    e.preventDefault();

    document.querySelectorAll('[id="admin_member_info_all"][name="admin_member_info_all"]').forEach((input: HTMLInputElement) => {
      if (input.checked) {
        document.querySelectorAll('[id="admin_member_info"][name="admin_member_info"]').forEach((_input_: HTMLInputElement) => {
          _input_.checked = true;
        })
      } else {
        document.querySelectorAll('[id="admin_member_info"][name="admin_member_info"]').forEach((_input_: HTMLInputElement) => {
          _input_.checked = false;
        })
      }
    })
  }

  private async assignMultipleMemberAction(e: any) {
    e.preventDefault();

    let ids: Array<number> = [];

    document.querySelectorAll('[id="admin_member_info"][name="admin_member_info"]').forEach((input: HTMLInputElement) => {
      if (input.checked) {
        if (!Number.isNaN(input.value)) {
          const value = Number(input.value);
          if (!ids.includes(value)) {
            ids.push(value)
          }
        }
      }
    })

    let addInfos: AddAdminMember[] = ids.map(id => {
      return {
        memberId: id,
        adminId: this.meetingAdminId,
        meetingEventId: this.meetingEventId,
      }
    });

    await POST_AttendanceScheduleAdminMembers(addInfos);
  }

  private async unassignMultipleMemberAction(e: any) {
    e.preventDefault();

    let ids: Array<number> = [];

    document.querySelectorAll('[id="admin_member_info"][name="admin_member_info"]').forEach((input: HTMLInputElement) => {
      if (input.checked) {
        if (!Number.isNaN(input.value)) {
          const value = Number(input.value);
          if (!ids.includes(value)) {
            ids.push(value)
          }
        }
      }
    })

    let removeInfos: RemoveAdminMember[] = ids.map(id => {
      return { id: id };
    });
    await DELETE_AttendanceScheduleAdminMembers(removeInfos);
  }

  createRenderRoot() {
    return this;
  }
}
