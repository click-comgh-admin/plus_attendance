import '@@assets/styles/views/attendance/clocking/main.scss';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-icon';
import '@material/mwc-select';
import '@material/mwc-textfield';
import '@@widgets/datatables';
import '@@interfaces/datatables';
import '@material/mwc-circular-progress';
import "@@addons/widgets/buttons/link-buttons/link-button";
import '@@views/no_access/account_expired';
import '@@views/no_access/no_page_entry';
import '@@addons/widgets/form/new/select';
import '@@addons/widgets/profile_photo';
import '../../../membership/members/select-member-type';
import '@material/mwc-dialog';
// import "@@addons/widgets/accordion/main";
import "@@addons/widgets/accordion/component/item";
import "@@addons/widgets/accordion/component/main";
import { getActiveBranchIdCookie } from '@@addons/functions/views/home/branch';
import { MembershipUser_I } from '@@addons/interfaces/members/user';
import { ClientBranchShort_I } from '@@addons/interfaces/clients/branches';
import { NetworkCallPaginResponse_I, NetworkCallResponse_I } from '@@addons/interfaces/network_calls/response';
import { base64Decode, base64Encode } from '@@addons/functions/base64';
import { CONSTANTS } from '@@addons/constants';
import { getUserLoginInfoCookie } from '@@addons/functions/login';
import { urlQueryParams, urlQueryParamsGet, urlQueryParamsGetAll, urlQueryParamsJoin } from '@@addons/functions/url_query_params';
import { GET_GenericGender } from '@@addons/network/generic/gender';
import { GenericGenderInfo_I, GenericGenderInfo_S } from '@@addons/interfaces/generic/gender';
import { FilterFieldBox } from '@@addons/classes/filter_field_box';
import { Button } from '@material/mwc-button';
import { SelectInputProcessedAjaxResponse_I, SelectInputProcessedAjaxUrlParam_I } from '@@addons/interfaces/form/select-input';
// @ts-ignore
import { QueryOptions } from 'select2';
import { GroupingsMemberCategories_I } from '@@addons/interfaces/members/groupings/member_categories';
import { GET_MemberGroupingsGroups } from '@@addons/network/members/groupings/group';
import { GET_MemberGroupingsMemberCategories } from '@@addons/network/members/groupings/member_categories';
import { GET_MemberGroupingsSubGroups } from '@@addons/network/members/groupings/subgroup';
import { until } from 'lit/directives/until.js';
import '..';
import { MeetingEventSchedule_I } from '@@addons/interfaces/attendance/meeting_event/schedules';
import { GET_AttendanceSchedule } from '@@addons/network/attendance/setup/schedule';
import { GET_AttendanceDownloadHistoryPdf } from '@@addons/network/attendance/clocking/download/pdf/history';
import { GET_AttendanceDownloadHistoryExcel } from '@@addons/network/attendance/clocking/download/excel/history';
import { AppSetup } from '@@addons/functions/app_settings';
import { getAppSettingsExtraSettings } from '@@addons/functions/app_settings/extra_settings';
import { PageButtonUserAccess, AppSettingsExtraUserAccess } from '@@addons/functions/app_settings/extra_settings/user_access';
import { PAGE__IDS } from '@@views/attendance/page__id';
import { GET_MembershipUserIds } from '@@addons/network/members/membership/users/members';
import { MembershipMixedUserModel, Convert as mmumConvert } from '@@addons/interfaces/members/user/mixed';
import { MembershipUserModel, Convert as MuMconvert } from '@@addons/interfaces/members/user/model/index2';
import { MembershipOrganizationUserModel, Convert as MouMconvert } from '@@addons/interfaces/members/user/organization_model';
import { GroupModel, Convert as gmConvert } from '@@addons/interfaces/members/groupings/group/models';
import { SubGroupModel, Convert as sgmConvert } from '@@addons/interfaces/members/groupings/subgroup/models';
import { ClientBranchModel, Convert as cbmConvert } from '@@addons/interfaces/clients/branches/model';
import { GET_ClientBranches } from '@@addons/network/clients/branches';
import { MeetingAttendanceHistoryModel, Convert as mahmConvert } from '@@addons/interfaces/attendance/history';
import './columns/one';
import './columns/two';

type filterSelectType = { id: number | ""; name: string; isSelected: "true" | "false"; selected: boolean; };
@customElement("pdb-attendance-clocking-history")
export class PdbAttendanceClockingHistory extends LitElement {
  constructor() { super(); }

  @query('[filter-section-context="btn"]')
  private filterSectionContextBtn: Button;

  @query('[filter-section-context="container"]')
  private filterSectionContextContainer: Element;

  @query('[make-general-posts="submit_filter_form"]')
  private filterSectionContextForm: HTMLFormElement;

  @property({ type: Number })
  private meetingEventId?: number = 0;

  @property({ type: String })
  private meetingEventIdEnc?: string = null;

  @property({ type: String })
  private filter_start_date_val: string = "";

  @property({ type: String })
  private filter_end_date_val: string = "";

  @property({ type: String })
  private datatablePathUrl: string = "attendance/meeting-event/member-attendance-history";

  @property({ type: String })
  private memberProfileBaseUrl: string = "/member/member-profile?view=";

  @property({ type: Array })
  private _genders: GenericGenderInfo_I[] = [];

  @property({ type: Array })
  private _schedules: MeetingEventSchedule_I[] = [];

  @property({ type: Number })
  private startSearchPage: number = 0;

  @property({ type: Number })
  private accountType: number = 1;

  @property({ type: Boolean })
  private accountTypeChanged: boolean = false;

  @property({ type: Array })
  private _memberCategories: GroupingsMemberCategories_I[] = [];

  @property({ type: Array })
  private _activeBranchId?: ClientBranchShort_I[] = null;

  @property({ type: Number })
  private selectedBranch: number = 1;

  @property({ type: Number })
  private _memberType?: number = 1;

  private __members: NetworkCallPaginResponse_I<MembershipUser_I> = null;

  public set _members(value: NetworkCallPaginResponse_I<MembershipUser_I>) {
    this.__members = value;
    this.requestUpdate();
  }

  public get _members(): NetworkCallPaginResponse_I<MembershipUser_I> {
    return this.__members;
  }

  private __schedule: NetworkCallResponse_I<MeetingEventSchedule_I> = null;

  public set _schedule(value: NetworkCallResponse_I<MeetingEventSchedule_I>) {
    this.__schedule = value;
    this.requestUpdate();
  }

  public get _schedule(): NetworkCallResponse_I<MeetingEventSchedule_I> {
    return this.__schedule;
  }

  private filterBox: FilterFieldBox;

  @property({ type: Boolean })
  private filterBoxStarted?: boolean = false;

  @property({ type: Boolean })
  private _hasSetup: boolean = false;

  @property({ type: Boolean })
  private _selectedMembersCalled: boolean = false;

  @property({ type: Array })
  private _selectedMembersNames: TemplateResult<1>[] = null;

  @property({ type: Array })
  private _groups: GroupModel[] = [];

  @property({ type: Array })
  private _subgroups: SubGroupModel[] = [];

  @property({ type: Array })
  public _branches: ClientBranchModel[] = [];

  @property({ type: Boolean })
  private _pageButtonAccess: boolean = false;

  async connectedCallback() {
    super.connectedCallback();
    AppSetup().then(() => this._hasSetup = true);

    this.getMeetingEventId();

    const activeBranchId = getActiveBranchIdCookie();
    this._activeBranchId = (activeBranchId === null) ? null : [activeBranchId];
    
    if (this._activeBranchId !== null) {
      this.selectedBranch = this._activeBranchId[0].id;
    }

    this.filterBox = new FilterFieldBox({
      selectors: {
        container: this.filterSectionContextContainer,
        form: this.filterSectionContextForm,
        filterSectionContextBtn: this.filterSectionContextBtn,
      }
    });

    await this.getAttendanceSchedule();
    await this.getGenders();
    await this.getClientMemberCategories();
    await this.getBranches();
    await this.getGroups();
    await this.getSubGroups();
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    if (this._hasSetup) {
      if (getAppSettingsExtraSettings()?.expiration_date.expired) {
        return html`<account-expired-component></account-expired-component>`;
      }
      this._pageButtonAccess = PageButtonUserAccess(PAGE__IDS.attendance_history);
      if (!AppSettingsExtraUserAccess({pageId: PAGE__IDS.attendance_history, viewType: "Both"}, false)) {
        return html`<no-page-entry-component></no-page-entry-component>`;
      }
    }
    return html`
      <div class="shadow bg-white p-2">
        <span class="flex flex-row md:flex-col w-100"></span>
        <div class="block my-1">
          <mwc-button icon="open_with" label="Filters" raised class="primary mt-1"
            filter-section-context="btn" @click="${this.filterBox.toggleFilterFields}">
          </mwc-button>
        </div>
        <div class="block my-1">
          ${this.filterForm}
        </div>
        <div class="block my-1">
          ${this.downloadBtns}
          <div class="flex w-full items-center justify-center">
            <div class="block w-full xl:w-[45%]">
              ${this.table}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  private get downloadBtns() {
    return html`
      <div class="flex mb-4">
        <mwc-button icon="download" class="success mr-2" 
          label="Download Excel File" raised @click="${this.downloadHistoryExcel}">
        </mwc-button>
        <mwc-button icon="download" class="danger mr-2" 
          label="Download Pdf File" raised @click="${this.downloadHistoryPdf}">
        </mwc-button>
      </div>
    `
  }

  private changeActions() {
    const _this = this,
      filterNameId_filter_branch = "filter_branch",
      filterNameId_filter_member_category = "filter_member_category";
    document.querySelectorAll('[name="'+filterNameId_filter_member_category+'"]').forEach((category_field) => {
      category_field.addEventListener("change", (evt) => {
        // @ts-ignore 
        const selectedCategory = category_field.selectedCategory
        if (selectedCategory > 0) {
          _this._memberType = selectedCategory;
          // console.log({ "_this._memberType": _this._memberType, "selectedCategory": selectedCategory });
        }
      });
    });
    document.querySelectorAll('[name="'+filterNameId_filter_branch+'"]').forEach((branch_field) => {
      branch_field.addEventListener("change", (evt) => {
        // @ts-ignore 
        const currentValue = branch_field.currentValue
        if (currentValue > 0) {
          _this.selectedBranch = currentValue;
          // console.log({ "_this.selectedBranch": _this.selectedBranch, "currentValue": currentValue });
        }
      });
    });

  }

  firstUpdated() {
    setInterval(() => {
      if (this.filterSectionContextContainer !== null) {
        if (!this.filterBoxStarted) {
          this.filterBox = new FilterFieldBox({
            selectors: {
              container: this.filterSectionContextContainer,
              form: this.filterSectionContextForm,
              filterSectionContextBtn: this.filterSectionContextBtn,
            }, unmutableInputNames: [
              { name: 'meeting-event-id', value: this.meetingEventIdEnc },
            ],
          }); 
          this.filterBoxStarted = true;
          this.dialog();
        }
      }
    }); 
    this.changeActions();  
  }

  private getMeetingEventId() {
    let meetingEventId = urlQueryParamsGet('meeting-event-id');
    // console.log({ userId });
    let _meetingEventId = meetingEventId !== null ? base64Decode(meetingEventId) : null;
    this.meetingEventId = Number.isNaN(_meetingEventId) ? null : Number(_meetingEventId);
    // console.log({ "this.meetingEventId": this.meetingEventId });
    this.meetingEventIdEnc = base64Encode(String(this.meetingEventId), true);
  }

  private get filterForm() {
    let returnHtml = html``;
    const _urlQueryParams = urlQueryParams(),
      filterNameId_filter_start_date = "filter_start_date",
      filterNameId_filter_end_date = "filter_end_date",
      filterNameId_filter_gender = "filter_gender",
      filterNameId_filter_search = "search_member",
      filterNameId_filter_branch = "filter_branch",
      filterNameId_filter_member_category = "filter_member_category",
      filterNameId_filter_group = "filter_group",
      filterNameId_filter_subgroup = "filter_subgroup",
      filterNameId_filter_from_age = "filter_from_age",
      filterNameId_filter_to_age = "filter_to_age",
      filterNameId_filter_memberIds = "filter_memberIds",
      filterNameId_filter_meetingIds = "filter_meetingIds",
      filterNameId_filter_accountType = "accountType",
      filterNameId_filter_activeStatus = "filter_activeStatus";

    let filterNameId_filter_start_dateVal: string = null,
      filterNameId_filter_end_dateVal: string = null,
      filterNameId_filter_genderVal: string = null,
      filterNameId_filter_searchVal: string = null,
      filterNameId_filter_branchVal: number = this.selectedBranch,
      filterNameId_filter_member_categoryVal: number = this._memberType,
      filterNameId_filter_groupVal: number = null,
      filterNameId_filter_subgroupVal: number = null,
      filterNameId_filter_from_ageVal: number = null,
      filterNameId_filter_to_ageVal: number = null,
      filterNameId_filter_activeStatusVal: number = null,
      filterNameId_filter_accountTypeVal: number = this.accountType,
      filterNameId_filter_memberIdsVal: Array<string> = [],
      filterNameId_filter_meetingIdsVal: Array<string> = [];
    
      for (const key in _urlQueryParams) {
        let value = String(_urlQueryParams[key]);
        value = value === "" ? null : value;
        if (key === filterNameId_filter_start_date) {
          // console.log({value});
          
          if (value === null) {
            const today = new Date();
            let fivedaysago = today.getDate() - 30;
            fivedaysago = today.setDate(fivedaysago);
            const date = new Date(fivedaysago),
              _DATE = date.toLocaleDateString('en-US', {
                day: '2-digit', month: '2-digit', year: 'numeric', formatMatcher: 'best fit',
                // @ts-ignore
              }).split('/'),
              DATE = [_DATE[2], _DATE[0], _DATE[1]].join('-'); 
            filterNameId_filter_start_dateVal = DATE;
          } else {
            const date = new Date(value),
              _DATE = date.toLocaleDateString('en-US', {
                day: '2-digit', month: '2-digit', year: 'numeric', formatMatcher: 'best fit',
                // @ts-ignore
              }).split('/'),
              DATE = [_DATE[2], _DATE[0], _DATE[1]].join('-'); 
            filterNameId_filter_start_dateVal = DATE;
          }
          this.filter_start_date_val = filterNameId_filter_start_dateVal;
        }
        if (key === filterNameId_filter_end_date) {
          if (value === null) {
            const date = new Date(),
              _DATE = date.toLocaleDateString('en-US', {
                day: '2-digit', month: '2-digit', year: 'numeric', formatMatcher: 'best fit',
                // @ts-ignore
              }).split('/'),
              DATE = [_DATE[2], _DATE[0], _DATE[1]].join('-'); 
              filterNameId_filter_end_dateVal = DATE;
          } else {
            const date = new Date(value),
              _DATE = date.toLocaleDateString('en-US', {
                day: '2-digit', month: '2-digit', year: 'numeric', formatMatcher: 'best fit',
                // @ts-ignore
              }).split('/'),
              DATE = [_DATE[2], _DATE[0], _DATE[1]].join('-'); 
            filterNameId_filter_end_dateVal = DATE;
          }
          this.filter_end_date_val = filterNameId_filter_end_dateVal;
        }
        if (key === filterNameId_filter_gender) {
          filterNameId_filter_genderVal = value;
        }
        if (key === filterNameId_filter_search) {
          filterNameId_filter_searchVal = value;
        }
        if (key === filterNameId_filter_branch) {          
          filterNameId_filter_branchVal = Number(value);
        }
        if (key === filterNameId_filter_member_category) {
          filterNameId_filter_member_categoryVal = Number(value);
        }
        if (key === filterNameId_filter_activeStatus) {
          filterNameId_filter_activeStatusVal = Number(value);
        }
        if (key === filterNameId_filter_group) {
          filterNameId_filter_groupVal = Number(value);
        }
        if (key === filterNameId_filter_subgroup) {
          filterNameId_filter_subgroupVal = Number(value);
        }
        if (key === filterNameId_filter_from_age) {
          filterNameId_filter_from_ageVal = Number(value);
        }
        if (key === filterNameId_filter_to_age) {
          filterNameId_filter_to_ageVal = Number(value);
        }
        if (key === filterNameId_filter_accountType) {
          filterNameId_filter_accountTypeVal = Number(value);
          if (this.accountTypeChanged === false) {
            this.accountType = filterNameId_filter_accountTypeVal;
          }
        }

        if (key === filterNameId_filter_memberIds) {
          filterNameId_filter_memberIdsVal = [String(value)];
        } else {
          if (key === `${filterNameId_filter_memberIds}[]`) {
            filterNameId_filter_memberIdsVal = urlQueryParamsGetAll(`${filterNameId_filter_memberIds}[]`); 
          }
        }

        if (key === filterNameId_filter_meetingIds) {
          filterNameId_filter_meetingIdsVal = [String(value)];
        } else {
          if (key === `${filterNameId_filter_meetingIds}[]`) {
            filterNameId_filter_meetingIdsVal = urlQueryParamsGetAll(`${filterNameId_filter_meetingIds}[]`); 
          }
        }
      }
      
    // console.log({filterNameId_filter_memberIdsVal, filterNameId_filter_meetingIdsVal});
    
    const ageField = html`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Filter Age In Years</h4>
          <div class="flex">
            <mwc-textfield type="number" min="0" name="${filterNameId_filter_from_age}" id="${filterNameId_filter_from_age}" label="Pick From Age" 
              value="${filterNameId_filter_from_ageVal === null ? "" : filterNameId_filter_from_ageVal}" class="mr-1" outlined required>
            </mwc-textfield>
            <mwc-textfield type="number" min="0" name="${filterNameId_filter_to_age}" id="${filterNameId_filter_to_age}" label="Pick To Age" 
              value="${filterNameId_filter_to_ageVal === null ? "" : filterNameId_filter_to_ageVal}" class="ml-1" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>`;
    
    const memberCategoryField = html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Member Category</h4>
          <pdb-membership-select-member-type defaultValue="${filterNameId_filter_member_categoryVal}" 
            name="${filterNameId_filter_member_category}" id="${filterNameId_filter_member_category}"
            label="Select Member Category" outlined required>
          </pdb-membership-select-member-type>
        </div>
      </div>`;
    
    const dateField = html`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Pick Dates</h4>
          <div class="flex">
            <mwc-textfield type="date" name="${filterNameId_filter_start_date}" id="${filterNameId_filter_start_date}"
            value="${filterNameId_filter_start_dateVal}" class="mr-1" outlined required></mwc-textfield>
            <mwc-textfield type="date" name="${filterNameId_filter_end_date}" id="${filterNameId_filter_end_date}"
            value="${filterNameId_filter_end_dateVal}" class="ml-1" outlined required></mwc-textfield>
          </div>
        </div>
      </div>`;
    
    const genderField = html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Gender</h4>
          <mwc-select name="${filterNameId_filter_gender}" id="${filterNameId_filter_gender}" label="Select Gender" outlined required>
            ${this._genders.map((item) => {
              // console.log({item});
              if (filterNameId_filter_genderVal === null) {
                return html`<mwc-list-item value="${item.id}">${item.name}</mwc-list-item>`;
              } else {
                if (Number(filterNameId_filter_genderVal) === item.id) {
                  return html`<mwc-list-item value="${item.id}" selected>${item.name}</mwc-list-item>`;
                } else {
                  return html`<mwc-list-item value="${item.id}">${item.name}</mwc-list-item>`;
                }
              }
            })}
          </mwc-select>
        </div>
      </div>`;
    const accountTypes: filterSelectType[] = [
      "Individual Account", "Organization Account"
    ].map((aT, i) => {
      const ID = i + 1;
      let isSelected: boolean = false,
        isSelectedAlt: "true" | "false" = "false";
      if (filterNameId_filter_accountTypeVal === ID) {
        isSelected = true;
        isSelectedAlt = "true";
      }
      const accountType: filterSelectType = {
        id: ID, name: aT, isSelected: isSelectedAlt, selected: isSelected,
      };
      return accountType;
    });
    const accountTypeField = html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Account Type</h4>
          <mwc-select name="${filterNameId_filter_accountType}" id="${filterNameId_filter_accountType}" label="Select Account Type" @change="${this.accountTypeChange}" outlined required>
            <mwc-list-item value="">Select Account Type</mwc-list-item>
            ${accountTypes.map((item) => {
              // console.log({item});
              // console.log({filterNameId_filter_branchVal, "this.selectedBranch": this.selectedBranch});
              
              if (Number(filterNameId_filter_accountTypeVal) === item.id) {
                return html`<mwc-list-item value="${item.id}" selected>${item.name}</mwc-list-item>`;
              } else {
                return html`<mwc-list-item value="${item.id}">${item.name}</mwc-list-item>`;
              }
            })}
          </mwc-select>
        </div>
      </div>`;
    
    const activeStatusField = html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Active Status</h4>
          <mwc-select name="${filterNameId_filter_activeStatus}" id="${filterNameId_filter_activeStatus}" label="Select Active Status" outlined required>
            <mwc-list-item value="">Select Active Status</mwc-list-item>
            <mwc-list-item value="1" ?selected="${filterNameId_filter_activeStatusVal === 1 ? true: false}">Active</mwc-list-item>
            <mwc-list-item value="2" ?selected="${filterNameId_filter_activeStatusVal === 2 ? true: false}">Inactive</mwc-list-item>
          </mwc-select>
        </div>
      </div>`;

    const memberListField = html`
      <div class="col-xl-12 col-md-12">
        <div class="form-input-container !block">
          ${this.memberListField}
          <div class="flex flex-wrap gap-2 p-1 my-2 shadow">
            ${until(this.getMembersByIds(filterNameId_filter_memberIdsVal?.map(memberId => Number.isNaN(memberId) ? 0 :
              Number(memberId))), html`<span>Loading...</span>`)}
          </div>
        </div>
      </div>`;
    
    const groupsSubgroupsBranches = this.groupsSubgroupsBranches([filterNameId_filter_groupVal], [filterNameId_filter_subgroupVal], [filterNameId_filter_branchVal]);
    const branchField = html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Branch</h4>
          <mwc-select name="${filterNameId_filter_branch}" id="${filterNameId_filter_branch}" label="Select Branch"
            @change="${this.branchChange}" outlined required>
            ${groupsSubgroupsBranches.branches.map((item) => {
              // console.log({item});
              // console.log({filterNameId_filter_branchVal, "this.selectedBranch": this.selectedBranch});
              
              if (Number(filterNameId_filter_branchVal) === item.id) {
                return html`<mwc-list-item value="${item.id}" selected>${item.name}</mwc-list-item>`;
              } else {
                return html`<mwc-list-item value="${item.id}">${item.name}</mwc-list-item>`;
              }
            })}
          </mwc-select>
        </div>
      </div>`;

    // const groupField = html`
    //   <div class="col-xl-6 col-md-6">
    //     <div class="form-input-container !block">
    //       <h4 class="font-semibold my-2">Select Group</h4>
    //       <mwc-select name="${filterNameId_filter_group}" id="${filterNameId_filter_group}" label="Select Group"
    //         outlined required>
    //         ${groupsSubgroupsBranches.groups.map((item) => {
    //           // console.log({item});
              
    //           if (Number(filterNameId_filter_groupVal) === item.id) {
    //             return html`<mwc-list-item value="${item.id}" selected>${item.name}</mwc-list-item>`;
    //           } else {
    //             return html`<mwc-list-item value="${item.id}">${item.name}</mwc-list-item>`;
    //           }
    //         })}
    //       </mwc-select>
    //     </div>
    //   </div>`;

    // const subGroupField = html`
    //   <div class="col-xl-6 col-md-6">
    //     <div class="form-input-container !block">
    //       <h4 class="font-semibold my-2">Select Sub-Group</h4>
    //       <mwc-select name="${filterNameId_filter_subgroup}" id="${filterNameId_filter_subgroup}" label="Select Sub-Group"
    //         outlined required>
    //         ${groupsSubgroupsBranches.subgroups.map((item) => {
    //           // console.log({item});              
    //           if (Number(filterNameId_filter_subgroupVal) === item.id) {
    //             return html`<mwc-list-item value="${item.id}" selected>${item.name}</mwc-list-item>`;
    //           } else {
    //             return html`<mwc-list-item value="${item.id}">${item.name}</mwc-list-item>`;
    //           }
    //         })}
    //       </mwc-select>
    //     </div>
    //   </div>`;
    const groupField = html`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Group</h4>
          <select-input name="${filterNameId_filter_group}" id="${filterNameId_filter_group}" class="w-full" label="Select Group"
            .options="${groupsSubgroupsBranches.groups}" outlined required>
          </select-input>
        </div>
      </div>`;
    
    const subGroupField = html`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Sub-Group</h4>
          <select-input name="${filterNameId_filter_subgroup}" id="${filterNameId_filter_subgroup}" class="w-full" label="Select Sub-Group"
            .options="${groupsSubgroupsBranches.subgroups}" outlined required>
          </select-input>
        </div>
      </div>`;

    const meeting_schedules: {
      id: number; name: string; isSelected: "true" | "false";
      selected: boolean;
    }[] = this._schedules.map((schedule) => {
      let isSelected: "true" | "false" = "false",
        selected: true | false = false;
      filterNameId_filter_meetingIdsVal.forEach(meetingId => {
        if (schedule.id === Number(meetingId)) {
          isSelected = "true"; selected = true;
        }
      });
      return {
        id: schedule.id, name: schedule.name,
        isSelected: isSelected, selected: selected,
      }
    });

    const searchField = html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Search By Name/ ID/ E-mail/ Phone Number</h4>
          <mwc-textfield type="text" name="${filterNameId_filter_search}" id="${filterNameId_filter_search}"
            label="Search By Name/ ID/ E-mail/ Phone Number"
            value="${filterNameId_filter_searchVal === null ? "" : filterNameId_filter_searchVal}" outlined required>
          </mwc-textfield>
        </div>
      </div>`;

    const meetingsField = html`
      <div class="col-xl-12 col-md-12">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Meeting(s)</h4>
          <select-input name="${filterNameId_filter_meetingIds}" id="${filterNameId_filter_meetingIds}" multiple
            label="Select Meeting(s)" .options="${meeting_schedules}" outlined required>
          </select-input>
        </div>
      </div>`;
    
    // const contents: Array<TemplateResult> = [
    //   html`<app-accordion-item accordion_class_name="filter-areas" class="w-100"
    //     .buttonHtml="${html`<b>Member Filter</b>`}"
    //     .contentHtml="${html`
    //       <div class="mt-1 mb-2 row">
    //         ${activeStatusField} ${genderField} ${searchField} ${memberListField}
    //       </div>`}">
    //     </app-accordion-item>
    //   `,
    //   html`<app-accordion-item accordion_class_name="filter-areas" class="w-100"
    //     .buttonHtml="${html`<b>Group Filter</b>`}"
    //     .contentHtml="${html`
    //       <div class="mt-1 mb-2 row">
    //         ${groupField} ${subGroupField}
    //       </div>`}">
    //     </app-accordion-item>
    //   `,
    //   html`<app-accordion-item accordion_class_name="filter-areas" class="w-100"
    //     .buttonHtml="${html`<b>Age/ Date Filters</b>`}"
    //     .contentHtml="${html`<div class="mt-1 mb-2 row">
    //         ${ageField} ${dateField}
    //       </div>`}">
    //     </app-accordion-item>
    //   `,
    // ];
    // console.log({contents});
    
      returnHtml = html`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
          <div class="container">
            <div class="row">
              ${branchField} ${memberCategoryField} ${accountTypeField} ${meetingsField}
            </div>
          </div>
          <div class="container">
            <accordion-component class="my-2">
              <accordion-item title="Member Filter">
                <div class="mt-1 mb-2 row">
                  ${activeStatusField} ${genderField} ${searchField} ${memberListField}
                </div>
              </accordion-item>
              <accordion-item title="Group Filter">
                <div class="mt-1 mb-2 row">
                  ${groupField} ${subGroupField}
                </div>
              </accordion-item>
              <accordion-item title="Age/ Date Filters">
                <div class="mt-1 mb-2 row">
                  ${ageField} ${dateField}
                </div>
              </accordion-item>
            </accordion-component>
            ${ /** <app-accordion accordionName="filter-areas" .contents=${contents} class="w-100"></app-accordion> */ ""}
          </div>
          <div class="container">
            <div class="row">
              <div class="col-xl-12 col-md-10">
                <div class="form-input-container mt-1">
                  <mwc-button label="Clear" @click="${this.filterBox.clear_filter}"></mwc-button>
                  <mwc-button label="Filter" raised @click="${this.filterBox.submit}"></mwc-button>
                </div>
              </div>
            </div>
          </div>
      </form>`
    return returnHtml;
  }

  private groupsSubgroupsBranches(selectedGroupIDs: Array<number>, selectedSubGroupIDs: Array<number>, selectedBranchIDs: Array<number>) {
    type returnType = { groups: filterSelectType[], subgroups: filterSelectType[], branches: filterSelectType[] };
    let groups: filterSelectType[] = [{ id: "", name: "Select Groups", isSelected: "false", selected: false }];
    let subgroups: filterSelectType[] = [{ id: "", name: "Select Sub-Groups", isSelected: "false", selected: false }];
    let branches: filterSelectType[] = [{ id: "", name: "Select Branches", isSelected: "false", selected: false }];

    // console.log({selectedGroupIDs, selectedSubGroupIDs});
    
    // console.log({"this._groups": this._groups, "this.memberGroups": this.memberGroups});
    // console.log({"this._subgroups": this._subgroups, "this.memberSubGroups": this.memberSubGroups});


    this._groups.forEach(_group => {
      let thisIsSelected = false;
      selectedGroupIDs.forEach(selectedGroupID => {
        if (selectedGroupID === _group.id) {
          thisIsSelected = true;
        }
      });
      // console.log({"thisIsSelected-group": thisIsSelected});
      
      let isSelected: boolean = false,
        isSelectedAlt: "true" | "false" = "false";
      if (thisIsSelected) {
        isSelected = true;
        isSelectedAlt = "true";
      }
      const group: filterSelectType = {
        id: _group.id, name: _group.group, isSelected: isSelectedAlt, selected: isSelected,
      };

      if (!groups.includes(group)) {
        groups.push(group);
      }
    });

    // console.log({"this._subgroups": this._subgroups})
    this._subgroups.forEach(_subgroup => {
      let thisIsSelected = false;
      selectedSubGroupIDs.forEach(selectedSubGroupID => {
        if (selectedSubGroupID === _subgroup.id) {
          thisIsSelected = true;
        }
      });
      // console.log({"thisIsSelected-subgroup": thisIsSelected});
      
      let isSelected: boolean = false,
        isSelectedAlt: "true" | "false" = "false";
      if (thisIsSelected) {
        isSelected = true;
        isSelectedAlt = "true";
      }
      const subgroup: filterSelectType = {
        id: _subgroup.id, name: `${_subgroup.groupID.group} => ${_subgroup.subgroup}`,
        isSelected: isSelectedAlt, selected: isSelected,
      };

      if (!subgroups.includes(subgroup)) {
        subgroups.push(subgroup);
      }
    });

    // console.log({"this._branches": this._branches, selectedBranchIDs})
    this._branches.forEach(_branch => {
      let thisIsSelected = false;
      selectedBranchIDs.forEach(selectedBranchID => {
        if (selectedBranchID === _branch.id) {
          thisIsSelected = true;
        }
      });

      let isSelected: boolean = false,
        isSelectedAlt: "true" | "false" = "false";
      if (thisIsSelected) {
        isSelected = true;
        isSelectedAlt = "true";
      }
      const branch: filterSelectType = {
        id: _branch.id, name: `${_branch.name}`,
        isSelected: isSelectedAlt, selected: isSelected,
      };

      if (!branches.includes(branch)) {
        branches.push(branch);
      }
    });

    const _returnType: returnType = {
      groups: groups, subgroups: subgroups, branches
    }
    return _returnType;
  }

  private get __tableHeaders(): DataTables_ColumnSettings_I[] {
    return [
      { title: 'History', },
      { title: html`<span class="block">MEETING RECORDS</span>`, },
    ];
  }

  private get __tableBody(): DataTables_ColumnSettings_I[][] {
    return [];
  }

  private get __tableFoot(): DataTables_ColumnSettings_I[] {
    return [
      { title: 'History', },
      { title: html`<span class="block">MEETING RECORDS</span>`, },
    ];
  }

  private get table(): TemplateResult {
    const memberType = this._memberType;
    let branchId = this.selectedBranch;

    let URL = CONSTANTS.URLS.AKWAABA_API_BASE_URL + "" + this.datatablePathUrl + "?branchId=" + branchId
      + "&meetingEventId=" + this.meetingEventId + "&memberType=" + memberType + "&order__by=firstname&datatable_plugin";

    const _urlQueryString = this.urlQueryString;
    // console.log({_urlQueryString});
    URL = URL + _urlQueryString;
    // console.log({URL});
    
    const __dataTable = this.__dataTable(URL);
    let ajaxHeader: { Authorization?: string } = {};
    const _get_cookie = getUserLoginInfoCookie();
    ajaxHeader.Authorization = "Token " + _get_cookie.token;
    return html`
      <datatables-new .datatable="${__dataTable}" .ajaxHeader="${ajaxHeader}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}" id="attendance-history"></datatables-new>
    `;
  }

  private get urlQueryString() {
    const _urlQueryParams = urlQueryParams(),
      filterNameId_filter_start_date = "filter_start_date",
      filterNameId_filter_end_date = "filter_end_date",
      filterNameId_filter_gender = "filter_gender",
      filterNameId_filter_search = "search_member",
      filterNameId_filter_branch = "filter_branch",
      filterNameId_filter_member_category = "filter_member_category",
      filterNameId_filter_group = "filter_group",
      filterNameId_filter_subgroup = "filter_subgroup",
      filterNameId_filter_from_age = "filter_from_age",
      filterNameId_filter_to_age = "filter_to_age",
      filterNameId_filter_memberIds = "filter_memberIds",
      filterNameId_filter_meetingIds = "filter_meetingIds",
      filterNameId_filter_activeStatus = "filter_activeStatus";

    let newObject: any = {};
    
    let _meetingIds: Array<string> = [],
      _memberIds: Array<string> = [];

    for (const key in _urlQueryParams) {
      let value = String(_urlQueryParams[key]),
        memberIds = `${filterNameId_filter_memberIds}[]`,
        meetingIds = `${filterNameId_filter_meetingIds}[]`;
      if ((key === filterNameId_filter_start_date) || (key === filterNameId_filter_end_date)
        || (key === filterNameId_filter_gender) || (key === filterNameId_filter_branch)
        || (key === filterNameId_filter_search) || (key === filterNameId_filter_member_category)
        || (key === filterNameId_filter_group) || (key === filterNameId_filter_subgroup)
        || (key === filterNameId_filter_from_age) || (key === filterNameId_filter_to_age)
        || (key === filterNameId_filter_memberIds) || (key === filterNameId_filter_meetingIds)
        || (key === filterNameId_filter_activeStatus) || (key === meetingIds) || (key === memberIds)) {
        // console.log({value, });

        if ((key === filterNameId_filter_from_age) || (key === filterNameId_filter_to_age)) {
          if (value <= "0" ) {
            delete newObject[key];
          }
        }

        if ((key === filterNameId_filter_start_date) || (key === filterNameId_filter_end_date)) {
          if (key === filterNameId_filter_start_date) {
            newObject[key] = this.filter_start_date_val;
          } else {
            newObject[key] = this.filter_end_date_val;
          }
        } else {
          newObject[key] = value;

          if ((key === meetingIds) || (key === memberIds)) {
            // console.log({value, });
              _meetingIds = urlQueryParamsGetAll(meetingIds),
              _memberIds = urlQueryParamsGetAll(memberIds);
          }
        }
      }
    } 

    if (!(filterNameId_filter_member_category in newObject)) {
      newObject[filterNameId_filter_member_category] = "1";
    }

    if (((filterNameId_filter_from_age in newObject) && (filterNameId_filter_to_age in newObject))
      && ((newObject[filterNameId_filter_from_age] > 1) && (newObject[filterNameId_filter_to_age] > 1))) {
    } else {
      delete newObject[filterNameId_filter_from_age];
      delete newObject[filterNameId_filter_to_age];
    }

    let filter_start_date = urlQueryParamsGet(filterNameId_filter_start_date);
    const today_last_month_date = this.today_last_month_date;
    console.log({"filter_start_date": filter_start_date, "today_last_month_date": today_last_month_date})
    
    if (filter_start_date === null) {
      // delete newObject[filterNameId_filter_start_date];
      newObject[filterNameId_filter_start_date] = today_last_month_date[1]; //`${this.filter_start_date_val}`;
    }
    let filter_end_date = urlQueryParamsGet(filterNameId_filter_end_date);
    console.log({"filter_end_date": filter_end_date})
    if (filter_end_date === null) {
      // delete newObject[filterNameId_filter_end_date];
      newObject[filterNameId_filter_end_date] = today_last_month_date[0]; //`${this.filter_end_date_val}`;
    }
    // console.log({filter_start_date, filter_end_date});
    
    
    let new_params = ``;
    _meetingIds.forEach(_meetingId => new_params += `&${filterNameId_filter_meetingIds}=${_meetingId}`);
    _memberIds.forEach(_memberId => new_params += `&${filterNameId_filter_memberIds}=${_memberId}`);

    let _urlQueryParamsJoin = urlQueryParamsJoin(newObject);
    let urlQueryString = (_urlQueryParamsJoin.length === 0)
      ? _urlQueryParamsJoin : "&" + _urlQueryParamsJoin + new_params;
    
    urlQueryString = `${urlQueryString}`

    return urlQueryString;
  }

  get today_last_month_date() {
    const today = new Date();

    const year = today.getFullYear(),
      month = today.getMonth() + 1,
      day = today.getDate();
    
    const todayDate = `${year}-${month}-${day}`,
      lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);

    const lastMonthYear = lastMonth.getFullYear(),
      lastMonthMonth = lastMonth.getMonth() + 1,
      lastMonthDay = lastMonth.getDate();
    
    const lastMonthDate = `${lastMonthYear}-${lastMonthMonth}-${lastMonthDay}`;

    return [todayDate, lastMonthDate]
  }

  get memberListField() {
    // console.log({ "this.selectedBranch": this.selectedBranch });
    // console.log({"Number(this.accountType)": Number(this.accountType)});
    
    if (Number(this.accountType) === 1) {
      return this.individualMemberList;
    } else if (Number(this.accountType) === 2) {
      return this.organizationMemberList;
    }
  }

  get individualMemberList() {
    this.startSearchPage = 0;

    function processClientUserSearch(data: any, params: QueryOptions): SelectInputProcessedAjaxResponse_I {
      params.page = params.page || 0;
      const TOTAL = data.count,
        RESULTS = data.results,
        SELECTOR = document.querySelector('[id="filter_memberIds"]');
      // console.log({ data, params, RESULTS, SELECTOR });

      let processedData: { id: number; text: string; }[] = [];
      if (TOTAL > 0) {
        var _data = RESULTS;
        // console.log({ "smbfl-_data": _data });
        for (let i = 0; i < _data.length; i++) {
          const item = _data[i];
          // console.log({"typeof": typeof item, "item-item": item });
          const member: MembershipUserModel = MuMconvert.toMembershipUserModel(JSON.stringify(item));
          // console.log({ "member-member": member });

          const id = member.id;
          const fullName = `${member.firstname} ${member.middlename ?? ""} ${member.surname}`;
          const _new = {
            id: id,
            text: fullName,
          }
          if (!processedData.includes(_new)) {
            processedData.push(_new)
          }
        }
      }
      // console.log({ processedData });

      return {
        results: processedData,
        total: TOTAL,
        // @ts-ignore
        totalShowing: SELECTOR.totalShowing,
      };
    }

    let ajaxHeader: { Authorization?: string } = {};
    // const _get_cookie = base64Decode(get_cookie('client_tokenLogin'));
    const _get_cookie = getUserLoginInfoCookie();
    ajaxHeader.Authorization = "Token " + _get_cookie.token;

    return html`
      <h4 class="font-semibold my-2">Select User</h4>
      <select-input class="w-100" id="filter_memberIds" name="filter_memberIds" label="Select User" multiple
        .ajaxFetchProcessResponse="${processClientUserSearch}" startSearchPage="${this.startSearchPage}"
        .ajaxHeader="${ajaxHeader}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
        ajaxFetchUrl="${CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
    `;
  }

  get organizationMemberList() {
    this.startSearchPage = 0;

    function processClientUserSearch(data: any, params: QueryOptions): SelectInputProcessedAjaxResponse_I {
      params.page = params.page || 0;
      const TOTAL = data.count,
        RESULTS = data.results,
        SELECTOR = document.querySelector('[id="filter_memberIds"]');
      // console.log({ data, params, RESULTS, SELECTOR });

      let processedData: { id: number; text: string; }[] = [];
      if (TOTAL > 0) {
        var _data = RESULTS;
        // console.log({ "smbfl-_data": _data });
        for (let i = 0; i < _data.length; i++) {
          const item = _data[i];
          // console.log({"typeof": typeof item, "item-item": item });
          const member: MembershipOrganizationUserModel = MouMconvert.toMembershipOrganizationUserModel(JSON.stringify(item));
          // console.log({ "member-member": member });

          const id = member.id;
          const organizationName = `${member.organizationName}`;
          const _new = {
            id: id,
            text: organizationName,
          }
          if (!processedData.includes(_new)) {
            processedData.push(_new)
          }
        }
      }
      // console.log({ processedData });

      return {
        results: processedData,
        total: TOTAL,
        // @ts-ignore
        totalShowing: SELECTOR.totalShowing,
      };
    }

    let ajaxHeader: { Authorization?: string } = {};
    // const _get_cookie = base64Decode(get_cookie('client_tokenLogin'));
    // console.log({"this.selectedBranch": this.selectedBranch});

    const _get_cookie = getUserLoginInfoCookie();
    ajaxHeader.Authorization = "Token " + _get_cookie.token;
    return html`
      <h4 class="font-semibold my-2">Select Organization</h4>
      <select-input class="w-100" id="filter_memberIds" name="filter_memberIds" label="Select Organization" multiple
        .ajaxFetchProcessResponse="${processClientUserSearch}" startSearchPage="${this.startSearchPage}"
        .ajaxHeader="${ajaxHeader}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
        ajaxFetchUrl="${CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user-organization/search"></select-input>
    `;
  }

  private get ajaxFetchUrlParams(): SelectInputProcessedAjaxUrlParam_I[] {
    let branchId = this.selectedBranch;
    return [
      { param: "branchId", value: String(branchId) }
    ]
  }

  async getMembersByIds(memberIds: Array<Number>) {
    memberIds = memberIds === null ? [] : memberIds;
    // console.log({memberIds, "this._selectedMembersCalled": this._selectedMembersCalled});

    let _members: MembershipMixedUserModel[] = [];

    if (this._selectedMembersCalled === false) {
      this._selectedMembersCalled = true;
      const _networkResponse = await GET_MembershipUserIds<any>(memberIds, this.accountType);

      if (_networkResponse !== null) {
        // @ts-ignore
        // console.log({"_networkResponse.data.paginResponse": _networkResponse.data});

        if ((_networkResponse.response.success === true)) {
          const _DATAS = _networkResponse.response.data;
          // console.log({_DATAS});

          const DATA: MembershipMixedUserModel[] = _DATAS.results?.map((member: any) => mmumConvert.toMembershipMixedUserModel(JSON.stringify(member)));
          // console.log({DATA});
          _members = DATA;
        }
      }
      const _selectedMembersNames = _members?.map(member => {        
        if (this.accountType === 1) {
          return html`
            <span
              class="flex h-fit items-center gap-1 font-semibold bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300 rounded-full p-1.5 text-xs">
              <span>${member.firstname} ${member.middlename ?? ""} ${member.surname}</span>
            </span>
          `;
        } else {
          return html`
            <span
              class="flex h-fit items-center gap-1 font-semibold bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300 rounded-full p-1.5 text-xs">
              <span>${member.organizationName}</span>
            </span>
          `;
        }
      });
      this._selectedMembersNames = _selectedMembersNames;
    }
    return this._selectedMembersNames;
  }

  accountTypeChange(e: Event) {
    // @ts-ignore
    const accountType = Number.isNaN(e.currentTarget.value) ? 0 : Number(e.currentTarget.value);
    if (accountType > 0) {
      setTimeout(() => {
        this.accountTypeChanged = true;
        this.accountType = accountType;
      }, 50);
      // console.log({ "this.accountType": this.accountType });
    }
  }
  
  branchChange(e: Event) {
    // @ts-ignore
    const branch = Number.isNaN(e.currentTarget.value) ? 0 : Number(e.currentTarget.value);
    if (branch > 0) {
      this.selectedBranch = branch;
      // console.log({ "this.selectedBranch": this.selectedBranch });
    }
  }

  memberCategoryChange(e: Event) {
    // @ts-ignore
    const memberType = Number.isNaN(e.currentTarget.value) ? 1 : Number(e.currentTarget.value);
    this._memberType = memberType;
    // console.log({ "this._memberType": this._memberType });
  }

  private async getGenders() {
    const _networkResponse = await GET_GenericGender<GenericGenderInfo_I>();
    // console.log({_networkResponse});
    
    let __genders: GenericGenderInfo_I[] = [];

    if (_networkResponse === null) {
      __genders.push({ id: 0, name: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const data: any[] = _networkResponse.response.data;

        const DATA: GenericGenderInfo_I[] = data.map(value => {
          return GenericGenderInfo_S(value)
        });
        // console.log({DATA});
        __genders = DATA;
      }
    }
    const new_data: Array<GenericGenderInfo_I> = [];
    new_data.push(...this._genders, ...__genders);
    this._genders = new_data;
  }

  private async downloadHistoryPdf() {
    const memberType = this._memberType;
    let branchId = this.selectedBranch;

    let URL = "?branchId=" + branchId
      + "&meetingEventId=" + this.meetingEventId + "&memberType=" + memberType + "&order__by=firstname&datatable_plugin";

    const _urlQueryString = this.urlQueryString;
    // console.log({_urlQueryString});
    URL = URL + _urlQueryString;
    
    const _networkResponse = await GET_AttendanceDownloadHistoryPdf<any>(URL);
    // console.log({_networkResponse});
  }

  private async downloadHistoryExcel() {
    const memberType = this._memberType;
    let branchId = this.selectedBranch;

    let URL = "?branchId=" + branchId
      + "&meetingEventId=" + this.meetingEventId + "&memberType=" + memberType + "&order__by=firstname&datatable_plugin";

    const _urlQueryString = this.urlQueryString;
    // console.log({_urlQueryString});
    URL = URL + _urlQueryString;
    
    const _networkResponse = await GET_AttendanceDownloadHistoryExcel<any>(URL);
    // console.log({_networkResponse});
  }
  
  private async getClientMemberCategories() {
    const _networkResponse = await GET_MemberGroupingsMemberCategories<GroupingsMemberCategories_I>();
    let __memberCategories: GroupingsMemberCategories_I[] = [];

    if (_networkResponse === null) {
      __memberCategories.push({ id: 0, category: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const DATA: GroupingsMemberCategories_I[] = _networkResponse.response.data;
        // console.log({DATA});
        __memberCategories = DATA;
      }
    }
    const new_data: Array<GroupingsMemberCategories_I> = [];
    new_data.push(...this._memberCategories, ...__memberCategories);
    this._memberCategories = new_data;
  }

  private renderCol1Info(data: any, type: any, attendanceHistory: MeetingAttendanceHistoryModel) {
    // console.log({attendanceHistory,});
    
    return `
      <pdb-attendance-clocking-history-col-1 filter_start_date_val="${this.filter_start_date_val}"
        filter_end_date_val="${this.filter_end_date_val}" historyDataStr='${JSON.stringify(attendanceHistory).split("'").join("&rsquo;")}'
        style="display: block; height: 200px; position: relative; top: -75px;">
      </pdb-attendance-clocking-history-col-1>
      <div class="whitespace-nowrap block sm:hidden">
        ${this.renderCol2Info(data, type, attendanceHistory, "block", "0", '100px')}
      </div>
    `;
  }

  private renderCol2Info(data: any, type: any, attendanceHistory: MeetingAttendanceHistoryModel, cls="block w-72", top="-75px", height="150px") {
    // console.log({attendanceHistory,});
    
    return `
      <div class="${cls}">
        <pdb-attendance-clocking-history-col-2 historyDataStr='${JSON.stringify(attendanceHistory).split("'").join("&rsquo;")}'
          style="display: block; height: ${height}; position: relative; top: ${top};">
        </pdb-attendance-clocking-history-col-2>
      </div>
    `;
  }

  private dialog() {
    document.querySelectorAll('[open-dialog-btn]').forEach((btn) => {
      // console.log({btn})
      btn.addEventListener('click', (e) => {
        // console.log({e})
        // e.preventDefault();
        this.showDialog(e);
      })
    });

  }

  private showDialog(event: any) {
    // event.preventDefault();
    // console.log({event})

    const dialogId: number = (event.currentTarget.getAttribute('open-dialog-btn'));
    const dialog = this.querySelector('[open-this-dialog="' + dialogId + '"]');
    dialog.setAttribute('open', "true");
  }

  private async getAttendanceSchedule() {
    let branchId = this.selectedBranch;
    const _networkResponse = await GET_AttendanceSchedule<MeetingEventSchedule_I>(null, "?length=1000000&branchId=" + branchId);
    if (_networkResponse === null) {
      this._schedules = [];
    } else {
      if ("results" in _networkResponse.paginResponse) {
        this._schedules = _networkResponse.paginResponse.results;
      }
    }
    // console.log({"this._schedule": this._schedule});
    
  }

  private async getBranches() {
    const _networkResponse = await GET_ClientBranches<ClientBranchModel>();
    let __branches: ClientBranchModel[] = [];

    if (_networkResponse === null) {
      __branches.push({ id: 0, name: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        // @ts-ignore
        const DATA: ClientBranchModel[] = _networkResponse.response.data.map((data: any) => {
          return cbmConvert.toClientBranchModel(JSON.stringify(data));
        });
        // console.log({DATA});
        __branches = DATA;
      }
    }
    const new_data: Array<ClientBranchModel> = [];
    new_data.push(...this._branches, ...__branches);
    this._branches = new_data;
  }

  private async getGroups() {
    const memberType = this._memberType;
    let branchId = this.selectedBranch;    

    let _networkResponse;
    if (memberType === null || memberType == 0) {
      _networkResponse = await GET_MemberGroupingsGroups<any>(null, "?branchId=" + branchId);
    } else {
      _networkResponse = await GET_MemberGroupingsGroups<any>(null, "?branchId=" + branchId + "&memberCategoryId=" + memberType);
    }
    
    let __groups: GroupModel[] = [];

    if (_networkResponse === null) {
      __groups.push({ id: 0, group: "**NOT FOUND**", date: new Date() });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        // console.log({"_networkResponse.response.data": _networkResponse.response.data});

        const DATA: GroupModel[] = _networkResponse.response.data.map((group: any) => gmConvert.toGroupModel(JSON.stringify(group)));
        // console.log({DATA});
        __groups = DATA;
      }
    }
    const new_data: Array<GroupModel> = [];
    new_data.push(...this._groups, ...__groups);
    this._groups = new_data;
  }

  private async getSubGroups() {
    const memberType = this._memberType;
    let branchId = this.selectedBranch;

    let _networkResponse;
    if (memberType === null || memberType == 0) {
      _networkResponse = await GET_MemberGroupingsSubGroups<any>(null, "?branchId=" + branchId);
    } else {
      _networkResponse = await GET_MemberGroupingsSubGroups<any>(null, "?branchId=" + branchId + "&memberCategoryId=" + memberType);
    }

    let __subgroups: SubGroupModel[] = [];

    if (_networkResponse === null) {
      __subgroups.push({ id: 0, subgroup: "**NOT FOUND**", date: new Date() });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const DATA: SubGroupModel[] = _networkResponse.response.data.map((subgroup: any) => sgmConvert.toSubGroupModel(JSON.stringify(subgroup)));
        // console.log({DATA});
        __subgroups = DATA;
      }
    }
    const new_data: Array<SubGroupModel> = [];
    new_data.push(...this._subgroups, ...__subgroups);
    this._subgroups = new_data;
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
          data: 'breakOverstay',
          render: (data: any, type: any, attendanceHistory: MeetingAttendanceHistoryModel) => __this.renderCol1Info(data, type, attendanceHistory),
          orderable: true
        },
        {
          data: 'history',
          render: (data: any, type: any, attendanceHistory: MeetingAttendanceHistoryModel) => __this.renderCol2Info(data, type, attendanceHistory,),
          orderable: true
        },

      ],
      'columnDefs': [
        {
          targets: ['_all'],
          className: 'mdc-data-table__cell',
          orderable: false,
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
        __this.dialog();
        __this.view_breakdown();
      },
      "responsive": {
        details: false, // this removes the green plus button to view hidden columns
        breakpoints: [
          {
            mame: "mobile",
            width: 480
          }
        ],
      },
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

  view_breakdown() {
    const table: HTMLTableElement = document.querySelector("#attendance-history table");
    console.log({'document.querySelector("#attendance-history table")': table});
    
    table.addEventListener("click", function(event) {
      var target = event.target;
      console.log({event, target});
      
      // @ts-ignore
      if (target && target.matches('[open-dialog-btn]')) {
        // @ts-ignore
        const dialogId: number = (target.getAttribute('open-dialog-btn'));
        const dialog = this.querySelector('[open-this-dialog="' + dialogId + '"]');
        console.log({dialogId, dialog})
        dialog.setAttribute('open', "true");
      }
      
      // @ts-ignore
      if (target && target.matches('accordion-item[breakdown]')) {
        // const dialogId: number = (target.getAttribute('open-dialog-btn'));
        // const dialog = this.querySelector('[open-this-dialog="' + dialogId + '"]');
        console.log({"target-target-target": target})
        // dialog.setAttribute('open', "true");
      }
      
      // @ts-ignore
      if (target && target.matches('[heading="History Breakdown"] [dialogAction="close"]')) {
        // @ts-ignore
        const dialogId: number = (target.getAttribute('open-dialog-btn'));
        const dialog = this.querySelector('[open-this-dialog="' + dialogId + '"]');
        dialog.setAttribute('open', "false");
        console.log({"close-target": target})
      }
    });
  }

  createRenderRoot() {
    return this;
  }
}
