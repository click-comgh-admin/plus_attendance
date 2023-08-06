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
import { GET_AttendanceScheduleMember } from '@@addons/network/attendance/setup/member';
import { GET_AttendanceSchedule } from '@@addons/network/attendance/setup/schedule';
import { urlQueryParams, urlQueryParamsGet, urlQueryParamsJoin } from '@@addons/functions/url_query_params';
import { MeetingEventSchedule_I } from '@@addons/interfaces/attendance/meeting_event/schedules';
import { NetworkCallPaginResponse_I, NetworkCallResponse_I } from '@@addons/interfaces/network_calls/response';
import { DELETE_AttendanceDeleteScheduleMember } from '@@addons/network/attendance/setup/member/delete';
import { MeetingEventScheduleMember_I } from '@@addons/interfaces/attendance/meeting_event/member';
import { ClientUsers_I } from '@@addons/interfaces/clients/users';
import '@@addons/widgets/form/new/select';
import { POST_AttendanceAddScheduleMember } from '@@addons/network/attendance/setup/member/post';
import { MembershipUser_I } from '@@addons/interfaces/members/user';
import { GET_MembershipUsers } from '@@addons/network/members/membership/users';
// @ts-ignore
import { QueryOptions } from 'select2';
import { CONSTANTS } from '@@addons/constants';
import { getUserLoginInfoCookie } from '@@addons/functions/login';
import '../../schedules/title_card';
import { NavigatorRouter } from '@@addons/classes/navigator';
import { FilterFieldBox } from '@@addons/classes/filter_field_box';
import { GET_AttendanceScheduleCategory } from '@@addons/network/attendance/setup/category';
import { MeetingEventCategoryModel } from '@@addons/interfaces/attendance/meeting_event/schedules/categories';
import { GET_AttendanceScheduleMemberGroup } from '@@addons/network/attendance/setup/group/member';
import { AttendanceMemberStatus, MeetingAttendanceMemberModel } from '@@addons/interfaces/attendance/meeting_event/member/member';
import { MeetingAttendanceMemberGroupModel } from '@@addons/interfaces/attendance/meeting_event/member/group';
import { MeetingAttendanceMemberSubGroupModel } from '@@addons/interfaces/attendance/meeting_event/member/subgroup';
import { GET_AttendanceScheduleSubGroupMember } from '@@addons/network/attendance/setup/subgroup/member';
import { filterSelectType } from "@@addons/widgets/form/new/select";
import { Button } from '@material/mwc-button';
import "./members/columns/one";
import "./members/columns/two";
import "./members/columns/three";
import "./members/columns/four";
import { PUT_AttendanceScheduleMemberStatusBulk } from "@@addons/network/attendance/setup/member/update_status_bulk";
import { RemoveAdminMember } from "@@addons/network/attendance/setup/admin/member/delete";



@customElement("attendance-setup-form-member")
export class AttendanceSetupFormMember extends LitElement {
  constructor() { super(); }

  @property({ type: Number })
  public CLIENT_ID: number = 0;

  @property({ type: Number })
  private startSearchPage: number = 0;

  @query('[filter-section-context="btn"]')
  private filterSectionContextBtn: Button;

  @query('[filter-section-context="container"]')
  private filterSectionContextContainer: Element;

  @query('[make-general-posts="submit_filter_form"]')
  private filterSectionContextForm: HTMLFormElement;

  @query('#allStatusDisplayBtn')
  private allStatusDisplayBtn: Button;

  @query('#assignedStatusDisplayBtn')
  private assignedStatusDisplayBtn: Button;

  @query('#unassignedStatusDisplayBtn')
  private unassignedStatusDisplayBtn: Button;

  @query('#pendingStatusDisplayBtn')
  private pendingStatusDisplayBtn: Button;

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

  @property({ type: Number })
  private activeStatus: AttendanceMemberStatus = AttendanceMemberStatus.None;

  @property({ type: Boolean })
  private _isLoading: boolean = false;

  @property({ type: Boolean })
  private firstLoad: boolean = true;

  @property({ type: Object })
  private renderView: TemplateResult = html``;

  @property({ type: Array })
  private _members: MembershipUser_I[] = [];

  @property({ type: Array })
  public _data?: Array<string> = [];

  @property({ type: Object })
  private urlQueryParams?: { [k: string]: string; } = undefined;

  @property({ type: Number })
  private meetingEventId?: number = 0;

  @property({ type: Array })
  private _categories: MeetingEventCategoryModel[] = [];

  @property({ type: Array })
  private _groups: MeetingAttendanceMemberGroupModel[] = [];

  @property({ type: Array })
  private _subgroups: MeetingAttendanceMemberSubGroupModel[] = [];

  @query('[show-memberField="all"]')
  private showMemberFieldAllSelector: Element;

  private filterBox: FilterFieldBox;

  async connectedCallback() {
    super.connectedCallback();
    this.urlQueryParams = urlQueryParams();
    this.getMeetingEventId();

    this.filterBox = new FilterFieldBox({
      selectors: {
        container: this.filterSectionContextContainer,
        form: this.filterSectionContextForm,
        filterSectionContextBtn: this.filterSectionContextBtn,
      },
    });

    document.onreadystatechange = (event) => {
      if (document.readyState == "complete") this.handleQueryParam();
    }

    await this.getAttendanceSchedule();
    // await this.getAttendanceScheduleMember();

    await this.getCategories();
    // console.log({"this._categories": this._categories});

    await this.getGroups();
    // console.log({"this._groups": this._groups});

    await this.getSubGroups();
    // console.log({"this._subgroups": this._subgroups});
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
        <div class="block my-1 p-2">
          <mwc-button icon="open_with" label="Filters" raised class="primary mt-1"
            filter-section-context="btn" @click="${this.filterBox.toggleFilterFields}">
          </mwc-button>
        </div>
        <div class="block my-1">
          ${this.filterForm}
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
    const viewParam = urlParams.get('status-view');
    return viewParam;
  }

  private get currentIndex() {
    if (this.getCurrentTabFromQueryParam === AttendanceMemberStatus.None.valueOf().toString()) {
      return AttendanceMemberStatus.None;
    } else if (this.getCurrentTabFromQueryParam === AttendanceMemberStatus.Assigned.valueOf().toString()) {
      return AttendanceMemberStatus.Assigned;
    } else if (this.getCurrentTabFromQueryParam === AttendanceMemberStatus.Unassigned.valueOf().toString()) {
      return AttendanceMemberStatus.Unassigned;
    } else {
      return AttendanceMemberStatus.Pending;
    }
  }

  private handleQueryParam() {
    const viewParam = this.getCurrentTabFromQueryParam;
    // console.log({viewParam});

    if (viewParam === AttendanceMemberStatus.None.valueOf().toString()) {
      this.displayAllStatus(new Event('click'));
    } else if (viewParam === AttendanceMemberStatus.Assigned.valueOf().toString()) {
      this.displayAssignedStatus(new Event('click'));
    } else if (viewParam === AttendanceMemberStatus.Unassigned.valueOf().toString()) {
      this.displayUnassignedStatus(new Event('click'));
    } else {
      this.displayPendingStatus(new Event('click'));
    }
    this.pageRenderFirstView();
  }

  private updateQueryParam(param: string) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('status-view', param);
    const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
    window.history.replaceState(null, '', newUrl);
    this.reloadRenderView(new Event('click'));
  }

  private displayAllStatus(e: any) {
    e.preventDefault();
    this.statusDisplay = 1;
    this.updateQueryParam(AttendanceMemberStatus.None.valueOf().toString());
  }

  private displayAssignedStatus(e: any) {
    e.preventDefault();
    this.statusDisplay = 2;
    this.updateQueryParam(AttendanceMemberStatus.Assigned.valueOf().toString());
  }

  private displayUnassignedStatus(e: any) {
    e.preventDefault();
    this.statusDisplay = 3;
    this.updateQueryParam(AttendanceMemberStatus.Unassigned.valueOf().toString());
  }

  private displayPendingStatus(e: any) {
    e.preventDefault();
    this.statusDisplay = 4;
    this.updateQueryParam(AttendanceMemberStatus.Pending.valueOf().toString());
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
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="album" id="allStatusDisplayBtn"
                label="Status" @click="${this.displayAllStatus}"></mwc-tab>
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="check_circle" id="assignedStatusDisplayBtn"
                label="Status" @click="${this.displayAssignedStatus}"></mwc-tab>
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="circle" id="unassignedStatusDisplayBtn"
                label="Status" @click="${this.displayUnassignedStatus}"></mwc-tab>
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="timer" id="pendingStatusDisplayBtn"
                label="Status" @click="${this.displayPendingStatus}"></mwc-tab>
            </mwc-tab-bar>
          </div>
          <div class="md:block hidden">
            <mwc-tab-bar activeIndex="${this.currentIndex.valueOf()}">
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="album" id="allStatusDisplayBtn"
                label="Status :: All" @click="${this.displayAllStatus}"></mwc-tab>
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="check_circle" id="assignedStatusDisplayBtn"
                label="Status :: Assigned" @click="${this.displayAssignedStatus}"></mwc-tab>
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="circle" id="unassignedStatusDisplayBtn"
                label="Status :: Unassigned" @click="${this.displayUnassignedStatus}"></mwc-tab>
              <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="timer" id="pendingStatusDisplayBtn"
                label="Status :: Pending" @click="${this.displayPendingStatus}"></mwc-tab>
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
        <div>
          ${this.groupsAndSubgroups}
          ${this.table}
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

  private get groupsAndSubgroups() {
    return html`
      <div class="main-container mt-2 mb-4">
        <div class="flex justify-end">
          <div class="flex flex-col md:flex-row justify-evenly">
            <mwc-button raised class="button info" type="button" @click="${() => NavigatorRouter.push("settings/edit/member-groups?meeting-event-id=" + this.meetingEventId)}">
              Assign Group(s)
            </mwc-button>
            <div class="m-1"></div>
            <mwc-button raised class="button warning" type="button" @click="${() => NavigatorRouter.push("settings/edit/member-subgroups?meeting-event-id=" + this.meetingEventId)}">
              Assign Sub-Group(s)
            </mwc-button>
          </div>
        </div>
      </div>
    `;
  }

  private get __tableHeaders(): DataTables_ColumnSettings_I[] {
    return [
      { title: 'Member(s)', },
      { title: 'Status', },
      // { title: 'Category', },
      { title: 'Grouping', },
      { title: 'Action', },
    ];
  }

  private get __tableBody(): DataTables_ColumnSettings_I[][] {
    return [];
  }

  private get __tableFoot(): DataTables_ColumnSettings_I[] {
    return [
      { title: 'Member(s)', },
      { title: 'Status', },
      // { title: 'Category', },
      { title: 'Grouping', },
      { title: 'Action', },
    ];
  }

  private get table(): TemplateResult {
    const statusIdFilter = this.currentIndex === 0 ? "" : `&statusId=${this.currentIndex}`;
    let URL = CONSTANTS.URLS.AKWAABA_API_BASE_URL + "attendance/meeting-event/member?datatable_plugin&meetingEventId=" + this.meetingEventId + statusIdFilter;

    const _urlQueryString = this.urlQueryString;
    // console.log({_urlQueryString});
    URL = URL + _urlQueryString;
    // console.log({URL});

    const __dataTable = this.__dataTable(URL);
    let ajaxHeader: { Authorization?: string } = {};
    const _get_cookie = getUserLoginInfoCookie();
    ajaxHeader.Authorization = "Token " + _get_cookie.token;
    return html`
      ${this.table_header}
      <datatables-new .datatable="${__dataTable}" .ajaxHeader="${ajaxHeader}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `;
  }

  firstUpdated() {
    // console.log({ "this.filterBox--1": this.filterBox });

    this.filterBox = new FilterFieldBox({
      selectors: {
        container: this.filterSectionContextContainer,
        form: this.filterSectionContextForm,
        filterSectionContextBtn: this.filterSectionContextBtn,
      }, unmutableInputNames: [{ name: "meeting-event-id", value: String(this.meetingEventId) }]
    });
    // console.log({ "this.filterBox--2": this.filterBox });
  }

  private get filterForm() {
    let returnHtml = html``;
    const _urlQueryParams = urlQueryParams(),
      filterNameId_groupId = "meetingGroupId",
      filterNameId_subgroupId = "meetingSubgroupId",
      filterNameId_memberCategory = "meetingCategoryId";

    let filterNameId_memberCategoryVal: string = null,
      filterNameId_groupIdVal: string = null,
      filterNameId_subgroupIdVal: string = null;

    for (const key in _urlQueryParams) {
      let value = String(_urlQueryParams[key]);
      value = value === "" ? null : value;
      if (key === filterNameId_groupId) {
        filterNameId_groupIdVal = value;
      }
      if (key === filterNameId_subgroupId) {
        filterNameId_subgroupIdVal = value;
      }
      if (key === filterNameId_memberCategory) {
        filterNameId_memberCategoryVal = value;
      }
    }

    const selectedGroupID = Number.isNaN(filterNameId_groupIdVal) ? 0 : Number(filterNameId_groupIdVal),
      selectedSubGroupID = Number.isNaN(filterNameId_subgroupIdVal) ? 0 : Number(filterNameId_subgroupIdVal),
      selectedCategoryID = Number.isNaN(filterNameId_memberCategoryVal) ? 0 : Number(filterNameId_memberCategoryVal);
    const groupsSubgroupsCategories = this.groupsSubgroupsCategories(selectedGroupID, selectedSubGroupID, selectedCategoryID);
    // console.log({groupsSubgroupsCategories});


    const groupField = html`
      <div class="col-xl-4 col-md-4">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Group</h4>
          <select-input name="${filterNameId_groupId}" class="w-full" id="${filterNameId_groupId}" label="Select Group"
            .options="${groupsSubgroupsCategories.groups}" outlined required>
          </select-input>
        </div>
      </div>`;

    const subGroupField = html`
      <div class="col-xl-4 col-md-4">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Sub-Group</h4>
          <select-input name="${filterNameId_subgroupId}" class="w-full" id="${filterNameId_subgroupId}" label="Select Sub-Group"
            .options="${groupsSubgroupsCategories.subgroups}" outlined required>
          </select-input>
        </div>
      </div>`;

    const CategoryField = html`
      <div class="col-xl-4 col-md-4">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Category</h4>
          <select-input name="${filterNameId_memberCategory}" class="w-full" id="${filterNameId_memberCategory}" label="Select Category"
            .options="${groupsSubgroupsCategories.categories}" outlined required>
          </select-input>
        </div>
      </div>`;

    returnHtml = html`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
          <div class="container pb-2">
            <div class="row">
              ${CategoryField} ${groupField} ${subGroupField}
              <div class="col-xl-12 col-md-12">
                <div class="form-input-container mt-1">
                  <input type="hidden" name="meeting-event-id" id="meeting-event-id" value="${this.meetingEventId}" />
                  <mwc-button label="Clear" @click="${this.filterBox.clear_filter}"></mwc-button>
                  <mwc-button label="Filter" raised @click="${this.filterBox.submit}"></mwc-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>`
    return returnHtml;
  }

  private groupsSubgroupsCategories(selectedGroupID: number, selectedSubGroupID: number, selectedCategoryID: number) {
    type returnType = { groups: filterSelectType[], subgroups: filterSelectType[], categories: filterSelectType[] };
    let groups: filterSelectType[] = [{ id: 0, name: "Select Group Status", isSelected: "false", selected: false }];
    let subgroups: filterSelectType[] = [{ id: 0, name: "Select Sub-Group Status", isSelected: "false", selected: false }];
    let categories: filterSelectType[] = [{ id: 0, name: "Select Category Status", isSelected: "false", selected: false }];

    // console.log({"this._groups": this._groups, "this.memberGroups": this.memberGroups});
    // console.log({"this._subgroups": this._subgroups, "this.memberSubGroups": this.memberSubGroups});


    this._groups.forEach(_group => {
      let isSelected: boolean = false,
        isSelectedAlt: "true" | "false" = "false";
      if (selectedGroupID === _group.id) {
        isSelected = true;
        isSelectedAlt = "true";
      }
      const group: filterSelectType = {
        id: _group.id, name: _group.groupInfo.group, isSelected: isSelectedAlt, selected: isSelected,
      };

      if (!groups.includes(group)) {
        groups.push(group);
      }
    });

    // console.log({"this._subgroups": this._subgroups})
    this._subgroups.forEach(_subgroup => {
      let isSelected: boolean = false,
        isSelectedAlt: "true" | "false" = "false";
      if (selectedSubGroupID === _subgroup.id) {
        isSelected = true;
        isSelectedAlt = "true";
      }
      const subgroup: filterSelectType = {
        id: _subgroup.id, name: `${_subgroup.subGroupInfo.groupId.group} => ${_subgroup.subGroupInfo.subgroup}`,
        isSelected: isSelectedAlt, selected: isSelected,
      };

      if (!subgroups.includes(subgroup)) {
        subgroups.push(subgroup);
      }
    });

    // console.log({"this._categories": this._categories})
    this._categories.forEach(_category => {
      let isSelected: boolean = false,
        isSelectedAlt: "true" | "false" = "false";
      if (selectedSubGroupID === _category.id) {
        isSelected = true;
        isSelectedAlt = "true";
      }
      const category: filterSelectType = {
        id: _category.id, name: `${_category.memberCategoryId.category}`,
        isSelected: isSelectedAlt, selected: isSelected,
      };

      if (!categories.includes(category)) {
        categories.push(category);
      }
    });

    // console.log({"this._groups": this._groups, "this.memberGroups": this.memberGroups});
    // console.log({"this._subgroups": this._subgroups, "this.memberSubGroups": this.memberSubGroups});

    const _returnType: returnType = {
      groups: groups, subgroups: subgroups, categories: categories,
    }
    return _returnType;
  }

  private get urlQueryString() {
    const _urlQueryParams = urlQueryParams(),
      filterNameId_groupId = "meetingGroupId",
      filterNameId_subgroupId = "meetingSubgroupId",
      filterNameId_memberCategory = "meetingCategoryId";

    let newObject: any = {};
    // for (const key in _urlQueryParams) {
    //   let value = Number(_urlQueryParams[key]);
    //   if (!Number.isNaN(value) && (value !== 0)) {
    //     // console.log({value, });

    //     newObject[key] = value;
    //   }
    // }

    for (const key in _urlQueryParams) {
      let value = String(_urlQueryParams[key]);
      if ((key === filterNameId_groupId) || (key === filterNameId_subgroupId)
        || (key === filterNameId_memberCategory)) {
        // console.log({value, });

        newObject[key] = value;

        if ((key === filterNameId_groupId) || (key === filterNameId_subgroupId)
          || (key === filterNameId_memberCategory)) {
          // console.log({value, });
          if (value === "0") {
            newObject[key] = "";
          }
        }
      }
    }

    // console.log({"newObject-newObject": newObject});


    let _urlQueryParamsJoin = urlQueryParamsJoin(newObject);

    return (_urlQueryParamsJoin.length === 0)
      ? _urlQueryParamsJoin : "&" + _urlQueryParamsJoin;
  }
  private get table_header() {
    // <div class="flex flex-col md:flex-row p-2 mb-2 pb-5">
    return html`
      <div class="p-2 mb-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-flow-row gap-4 pb-5">
        <div
          class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 border-b-2 mb-2">
          <label class="flex justify-between items-stretch px-4 my-2">
            <b>CHECK ALL: </b>
            <input id="meeting_member_info_all" name="meeting_member_info_all" type="checkbox"
              class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              @change="${this.check_all_meeting_members}" />
          </label>
        </div>
        ${this.table_header_buttons}
      </div>
    `;
  }

  private get table_header_buttons() {
    const viewParam = this.getCurrentTabFromQueryParam;
    // console.log({viewParam});
    
    if (viewParam === AttendanceMemberStatus.None.valueOf().toString()) {
      return html``;
    } else if (viewParam === AttendanceMemberStatus.Assigned.valueOf().toString()) {
      return html`
        <div
          class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 p-2 border-b-2 mb-2 flex sm:flex-row flex-col justify-center items-stretch">
          <mwc-button class="danger" raised meeting_member_info_all="unassign"
            @click="${(e:Event) => this.updateBulkStatusID(e, 2)}">Unassign Selected</mwc-button>
          <div class="w-4 h-4"></div>
          <mwc-button class="info" raised meeting_member_info_all="pending"
            @click="${(e:Event) => this.updateBulkStatusID(e, 3)}">Set Pending To Selected</mwc-button>  
        </div>
      `;
    } else if (viewParam === AttendanceMemberStatus.Unassigned.valueOf().toString()) {
      return html`
        <div
          class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 p-2 border-b-2 mb-2 flex sm:flex-row flex-col justify-center items-stretch">
          <mwc-button class="success" raised meeting_member_info_all="assign"
            @click="${(e:Event) => this.updateBulkStatusID(e, 1)}">Assign Selected</mwc-button>
          <div class="w-4 h-4"></div>
          <mwc-button class="info" raised meeting_member_info_all="unassign"
            @click="${(e:Event) => this.updateBulkStatusID(e, 3)}">Set Pending To Selected</mwc-button>  
        </div>
      `;
    } else {
      return html`
        <div
          class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 p-2 border-b-2 mb-2 flex sm:flex-row flex-col justify-center items-stretch">
          <mwc-button class="success" raised meeting_member_info_all="assign"
            @click="${(e:Event) => this.updateBulkStatusID(e, 1)}">Assign Selected</mwc-button>
          <div class="w-4 h-4"></div>
          <mwc-button class="danger" raised meeting_member_info_all="pending"
            @click="${(e:Event) => this.updateBulkStatusID(e, 2)}">Unassign Selected</mwc-button>  
        </div>
      `;
    }
  }

  private rowOneRender(data: any) {
    // console.log({"data-data--data::One": data});
    
    const attendanceMember = MeetingAttendanceMemberModel.fromJson(data);
    // console.log({ attendanceMember });

    return `
      <member-col-one-component activeStatus="${this.activeStatus}"
        attendanceMemberString='${attendanceMember.toString()}'>
      </member-col-one-component>
    `;

  }

  private rowTwoRender(data: any) {
    // console.log({"data-data--data::Two": data});
    
    const attendanceMember = MeetingAttendanceMemberModel.fromJson(data);
    // console.log({ attendanceMember });

    return `
      <member-col-two-component activeStatus="${this.activeStatus}"
      attendanceMemberString='${attendanceMember.toString()}'>
    </member-col-two-component>
    `;
  }

  private rowThreeRender(data: any) {
    // console.log({"data-data--data::Three": data});
    
    const attendanceMember = MeetingAttendanceMemberModel.fromJson(data);
    // console.log({ attendanceMember });

    return `
      <member-col-three-component activeStatus="${this.activeStatus}"
      attendanceMemberString='${attendanceMember.toString()}'>
    </member-col-three-component>
    `;
  }

  private rowFourRender(data: any) {
    // console.log({"data-data--data::Four": data});
    
    const attendanceMember = MeetingAttendanceMemberModel.fromJson(data);
    // console.log({ attendanceMember });

    return `
      <member-col-four-component activeStatus="${this.activeStatus}"
      attendanceMemberString='${attendanceMember.toString()}'>
    </member-col-four-component>
    `;
  }

  // private rowFiveRender(data: any) {
  //   const attendanceMember = MeetingAttendanceMemberModel.fromJson(data);
  //   // console.log({ attendanceMember });

  //   return `
  //     <member-col-one-component activeStatus="${this.activeStatus}"
  //     attendanceMemberString='${attendanceMember.toString()}'>
  //   </member-col-one-component>
  //   `;
  // }

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
          className: "w-1/6",
        },
        {
          data: 'memberId',
          render: (data: any, type: any, member: any) => __this.rowTwoRender(member),
          orderable: true,
          className: "w-20",
        },
        {
          data: 'meetingEventId',
          render: (data: any, type: any, member: any) => __this.rowThreeRender(member),
          orderable: true,
          className: "w-full sm:w-1/4",
        },
        {
          data: 'statusId',
          render: (data: any, type: any, member: any) => __this.rowFourRender(member),
          orderable: true,
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

  private async getAttendanceSchedule() {
    const _networkResponse = await GET_AttendanceSchedule<MeetingEventSchedule_I>(this.meetingEventId);
    if (_networkResponse === null) {
      this._schedule = undefined;
    } else {
      this._schedule = _networkResponse.response;
    }
  }

  private async getCategories() {
    const _networkResponse = await GET_AttendanceScheduleCategory<MeetingEventCategoryModel>(null, "?length=10000&meetingEventId=" + this.meetingEventId);
    if (_networkResponse === null) {
      this._categories = [];
    } else {
      const DATA = _networkResponse.paginResponse.results;
      if (Array.isArray(DATA)) {
        this._categories = DATA.map((data: any) => MeetingEventCategoryModel.fromJson(data));
      } else {
        this._categories = [MeetingEventCategoryModel.fromJson(DATA)];
      }
    }
  }

  private async getGroups() {
    const _networkResponse = await GET_AttendanceScheduleMemberGroup<MeetingAttendanceMemberGroupModel>(null, "?length=10000&meetingEventId=" + this.meetingEventId);
    if (_networkResponse === null) {
      this._groups = [];
    } else {
      const DATA = _networkResponse.paginResponse.results;
      if (Array.isArray(DATA)) {
        this._groups = DATA.map((data: any) => MeetingAttendanceMemberGroupModel.fromJson(data));
      } else {
        this._groups = [MeetingAttendanceMemberGroupModel.fromJson(DATA)];
      }
    }
  }

  private async getSubGroups() {
    const _networkResponse = await GET_AttendanceScheduleSubGroupMember<MeetingAttendanceMemberSubGroupModel>(null, "?length=10000&meetingEventId=" + this.meetingEventId);
    if (_networkResponse === null) {
      this._subgroups = [];
    } else {
      const DATA = _networkResponse.paginResponse.results;
      if (Array.isArray(DATA)) {
        this._subgroups = DATA.map((data: any) => MeetingAttendanceMemberSubGroupModel.fromJson(data));
      } else {
        this._subgroups = [MeetingAttendanceMemberSubGroupModel.fromJson(DATA)];
      }
    }
  }

  private async check_all_meeting_members(e: any) {
    e.preventDefault();

    document.querySelectorAll('[id="meeting_member_info_all"][name="meeting_member_info_all"]').forEach((input: HTMLInputElement) => {
      if (input.checked) {
        document.querySelectorAll('[id="meeting_member_info"][name="meeting_member_info"]').forEach((_input_: HTMLInputElement) => {
          _input_.checked = true;
        })
      } else {
        document.querySelectorAll('[id="meeting_member_info"][name="meeting_member_info"]').forEach((_input_: HTMLInputElement) => {
          _input_.checked = false;
        })
      }
    })
  }

  private async updateBulkStatusID(e: any, statusId: number) {
    e.preventDefault();

    let ids: Array<number> = [];

    document.querySelectorAll('[id="meeting_member_info"][name="meeting_member_info"]').forEach((input: HTMLInputElement) => {
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
    await PUT_AttendanceScheduleMemberStatusBulk(removeInfos, statusId);;
  }

  createRenderRoot() {
    return this;
  }
}
