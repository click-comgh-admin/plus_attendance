import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js'
import { getUserLoginInfoCookie } from '@@addons/functions/login';
import { getActiveBranchIdCookie } from '@@addons/functions/views/home/branch';
import { ClientBranches_I, ClientBranchShort_I } from '@@addons/interfaces/clients/branches';
import { UserLoginInfo_I } from '@@addons/interfaces/network_calls/login';
import { CreditEarnedModel, Convert as cemConvert } from '@@addons/interfaces/attendance/credit_earned';
import '@material/mwc-select';
import '@material/mwc-textfield';
import { GET_ClientBranches } from '@@addons/network/clients/branches';
import { GET_AttendanceScheduleCreditEarnedSign } from '@@addons/network/attendance/setup/credit_earned/filters/signs';
import { GET_AttendanceScheduleCreditEarnedDuration } from '@@addons/network/attendance/setup/credit_earned/filters/duration';
import { GET_AttendanceScheduleCreditEarnedType } from '@@addons/network/attendance/setup/credit_earned/filters/types';
import { CreditEarnedFiltersModel } from '@@addons/interfaces/attendance/credit_earned';
import { GET_AttendanceSchedule } from '@@addons/network/attendance/setup/schedule';
import { MeetingEventSchedule_I } from '@@addons/interfaces/attendance/meeting_event/schedules';
import { GET_AttendanceScheduleMember } from '@@addons/network/attendance/setup/member';
import { MeetingAttendanceMemberModel } from '@@addons/interfaces/attendance/meeting_event/member/member';
import '@@addons/widgets/form/new/select';
import { filterSelectType } from "@@addons/widgets/form/new/select";


@customElement("credit-earned-inputs-component")
export class CreditEarnedInputsComponent extends LitElement {
  constructor() { super(); }

  @property({ type: String })
  private inputId = Math.random().toString(36).substring(2, 22);

  @property({ type: String })
  public startTimeValue?: string;

  @property({ type: String })
  public endTimeValue?: string;

  @property({ type: Array })
  public creditEarnedData: Array<CreditEarnedModel> = [];

  @property({ type: Number })
  private selectedBranchId: number = 0;

  @property({ type: Number })
  private selectedScheduleId: number = 0;

  @property({ type: Number })
  private selectedTypeId: number = 0;

  @property({ type: Array })
  private _branches: ClientBranches_I[] = [];

  @property({ type: Array })
  private _schedules: MeetingEventSchedule_I[] = [];

  @property({ type: Array })
  private _members: MeetingAttendanceMemberModel[] = [];;

  @property({ type: Array })
  private _userLoginInfo?: UserLoginInfo_I[] = null;

  @property({ type: Array })
  private _activeBranchId?: ClientBranchShort_I[] = null;

  private defaultCreditEarned?: CreditEarnedModel = null;

  @property({ type: Array })
  public _ceFilterType?: Array<CreditEarnedFiltersModel>  = [];

  @property({ type: Array })
  public _ceFilterSign?: Array<CreditEarnedFiltersModel>  = [];

  @property({ type: Array })
  public _ceFilterDuration?: Array<CreditEarnedFiltersModel>  = [];

  async connectedCallback() {
    super.connectedCallback();
    const activeBranchId = getActiveBranchIdCookie();
    this._activeBranchId = (activeBranchId === null) ? null : [activeBranchId];
    this._userLoginInfo = [getUserLoginInfoCookie()];
    await this.getBranches();

    await this.getCreditEarnedFilterSign();
    await this.getCreditEarnedFilterType();
    await this.getCreditEarnedFilterDuration();

    this.defaultCreditEarned = this.creditEarnedData.length < 0 ? null: this.creditEarnedData[0] == undefined? null: this.creditEarnedData[0];

    if(this.defaultCreditEarned !== null) {
      this.startTimeValue = this.defaultCreditEarned.startTime;
  
      this.endTimeValue = this.defaultCreditEarned.endTime;

    }
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    let userBranch = 0;
    if (this._userLoginInfo !== null) {
      if (this._userLoginInfo.length > 0) {
        userBranch = this._userLoginInfo[0].user.branchId;
      }
    }

    // console.log({"this.selectedBranchId--this.selectedBranchId": this.selectedBranchId})
    // console.log({"[0,1,2].includes(this.selectedTypeId)": [0,1,2].includes(this.selectedTypeId), "this.selectedTypeId": this.selectedTypeId})

    interface MemberName {id: number; name: string};
    const members: Array<MemberName> = this._members.map(member=>{
      const memberInfo = member.memberInfo;
      if (member.memberInfo != null) {
        const accountType = memberInfo.accountType;
        if (accountType === 1){
          // @ts-ignore
          return {id: memberInfo.id, name: `${memberInfo.firstname} ${memberInfo.middlename} ${memberInfo.surname}`}
        } else {
          // @ts-ignore
          return {id: memberInfo.id, name: `${memberInfo.organizationName}`}
        }
      }

    });

    let selectedMembers: number[] = [];
    if (this.defaultCreditEarned !== null) {
      selectedMembers = this.defaultCreditEarned.memberIDS.map(mID => {
        return mID.memberID;
      });
    }
    const memberSelectionList = this.memberSelectionList(selectedMembers);

    return html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6">
            <h4 class="font-semibold my-2">Select Branch</h4>
            <mwc-select name="branchId" class="w-full" id="branchId" @change="${this.handleBranchChange}" label="Select Branch" outlined required>
              ${userBranch === 1 ? html`
                <mwc-list-item value="0">Select Branch</mwc-list-item>
                ${this._branches.map((value) => {
                  if (this.defaultCreditEarned == null) {
                    return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
                  } else {
                    const branchId = this.defaultCreditEarned.branchIDS.length > 0? this.defaultCreditEarned.branchIDS[0].id: undefined;
                    if (branchId === undefined) {
                      return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
                    } else {
                      if (branchId === value.id) {
                        return html`<mwc-list-item value="${value.id}" selected>${value.name}</mwc-list-item>`;
                      } else {
                        return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
                      }
                    }
                  }
                })}
              `: html`
                ${this._branches.map((value) => {
                  if (value.id === userBranch) {
                    return html`<mwc-list-item value="${value.id}" selected>${value.name}</mwc-list-item>`;
                  }
                })}
              `}
            </mwc-select>
            <select type="hidden" class="opacity-0 h-0" style="height:0!important" name="branchIds[]" multiple id="branchIds"><select/>
          </div>
          <div class="col-md-6">
            <h4 class="font-semibold my-2">Select Schedule/ Meeting/ Event</h4>
            <mwc-select name="scheduleId" class="w-full" id="scheduleId" @change="${this.handleScheduleChange}" label="Select Schedule" outlined required>
              <mwc-list-item value="0">Select Schedule</mwc-list-item>
              ${this._schedules.map((value) => {
                if (this.defaultCreditEarned == null) {
                  return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
                } else {
                  const scheduleId = this.defaultCreditEarned.scheduleIDS.length > 0? this.defaultCreditEarned.scheduleIDS[0].id: undefined;
                  if (scheduleId === undefined) {
                    return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
                  } else {
                    if (scheduleId === value.id) {
                      return html`<mwc-list-item value="${value.id}" selected>${value.name}</mwc-list-item>`;
                    } else {
                      return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
                    }
                  }
                }
              })}
            </mwc-select>
            <select type="hidden" class="opacity-0 h-0" style="height:0!important" name="scheduleIds[]" multiple id="scheduleIds"><select/>
          </div>
          <div class="col-md-6">
            <h4 class="font-semibold my-2">Select Member(s)</h4>
            <select-input name="memberIds" class="w-full" id="memberIds" label="Select Member(s)" 
              .options="${memberSelectionList}" outlined multiple required>
            </select-input>
          </div>
          <div class="col-md-6">
            <h4 class="font-semibold my-2">Select Type</h4>
            <mwc-select name="type" class="w-full" id="type" label="Select Type" @change="${this.handleTypeChange}"outlined required>
              <mwc-list-item value="0">Select Type</mwc-list-item>
              ${this._ceFilterType.map((value) => {
                if (this.defaultCreditEarned == null) {
                  return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
                } else {
                  const type = this.defaultCreditEarned.type !== null? this.defaultCreditEarned.type: undefined;
                  if (type === undefined) {
                    return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
                  } else {
                    if (type === value.id) {
                      return html`<mwc-list-item value="${value.id}" selected>${value.name}</mwc-list-item>`;
                    } else {
                      return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
                    }
                  }
                }
              })}
            </mwc-select>
          </div>
          <div class="col-md-6">
            <h4 class="font-semibold my-2">Select Sign</h4>
            <mwc-select name="sign" class="w-full" id="sign" label="Select Sign" outlined required>
              <mwc-list-item value="0">Select Sign</mwc-list-item>
              ${this._ceFilterSign.map((value) => {
                if (this.defaultCreditEarned == null) {
                  return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
                } else {
                  const sign = this.defaultCreditEarned.sign !== null? this.defaultCreditEarned.sign: undefined;
                  if (sign === undefined) {
                    return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
                  } else {
                    if (sign === value.id) {
                      return html`<mwc-list-item value="${value.id}" selected>${value.name}</mwc-list-item>`;
                    } else {
                      return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
                    }
                  }
                }
              })}
            </mwc-select>
          </div>
          ${[0,1,2].includes(this.selectedTypeId)? nothing: html`
            <div class="col-md-6">
              <h4 class="font-semibold my-2">Select Duration Type</h4>
              <mwc-select name="duration" class="w-full" id="duration" label="Select Duration Type" outlined required>
                <mwc-list-item value="0">Select Duration Type</mwc-list-item>
                ${this._ceFilterDuration.map((value) => {
                  if (this.defaultCreditEarned == null) {
                    return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
                  } else {
                    const duration = this.defaultCreditEarned.duration !== null? this.defaultCreditEarned.duration: undefined;
                    if (duration === undefined) {
                      return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
                    } else {
                      if (duration === value.id) {
                        return html`<mwc-list-item value="${value.id}" selected>${value.name}</mwc-list-item>`;
                      } else {
                        return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
                      }
                    }
                  }
                })}
              </mwc-select>
            </div>
            <div class="col-md-6">
              <h4 class="font-semibold my-2">Enter Duration</h4> 
              <mwc-textfield name="durationValue" type="number" min="1" step="1" class="w-full" id="durationValue" @change="${this.handleStartTimeChange}" value="${String(this.defaultCreditEarned == null? "": this.defaultCreditEarned.durationValue)}" label="Enter Duration" outlined required>
              </mwc-textfield>
            </div>`}
          <div class="col-md-6">
            <h4 class="font-semibold my-2">Enter Currency</h4> 
            <mwc-textfield name="currency" type="text" class="w-full" id="currency" @change="${this.handleStartTimeChange}" value="${String(this.defaultCreditEarned == null? "": this.defaultCreditEarned.currency)}" label="Enter Currency" outlined required>
            </mwc-textfield>
          </div>
          <div class="col-md-6">
            <h4 class="font-semibold my-2">Enter Unit</h4> 
            <mwc-textfield name="unit" type="number" min="0.01" step="0.01" class="w-full" id="unit" @change="${this.handleEndTimeChange}" value="${String(this.defaultCreditEarned == null? "": this.defaultCreditEarned.unit)}" label="Enter Units" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>
    `;
  }

  memberSelectionList(selectedMembers: Array<number> = []) {
    let memberList: filterSelectType[] = [];
    interface MemberName {id: number; name: string};
    const members: Array<MemberName> = this._members.map(member=>{
      const memberInfo = member.memberInfo;
      if (member.memberInfo != null) {
        const accountType = memberInfo.accountType;
        if (accountType === 1){
          // @ts-ignore
          return {id: memberInfo.id, name: `${memberInfo.firstname} ${memberInfo.middlename} ${memberInfo.surname}`}
        } else {
          // @ts-ignore
          return {id: memberInfo.id, name: `${memberInfo.organizationName}`}
        }
      }

    });

    members.forEach(member => {
      let isSelected: boolean = false,
        isSelectedAlt: "true" | "false" = "false";
      if (selectedMembers.includes(member.id) ) {
        isSelected = true;
        isSelectedAlt = "true";
      }
      const _member: filterSelectType = {
        id: member.id, name: member.name, isSelected: isSelectedAlt, selected: isSelected,
      };

      if (!memberList.includes(_member)) {
        memberList.push(_member);
      }
    });

    return memberList;
  }

  handleBranchChange(event: Event) {
    // @ts-ignore
    this.selectedBranchId = Number.isNaN(event.target.value)? 0: Number(event.target.value);
    const selectedBranchId = this.selectedBranchId === 0? null: this.selectedBranchId;
    setTimeout(() => {
      document.querySelectorAll('select[name="branchIds[]"][id="branchIds"]').forEach(selectElement => {
        selectElement.childNodes.forEach(cN=>{
          cN.remove();
        })
        if (selectedBranchId != null) selectElement.replaceChildren(new Option(String(selectedBranchId), String(selectedBranchId), true, true))
      });
      this.getSchedules();
    }, 100);
  }

  handleScheduleChange(event: Event) {
    // @ts-ignore
    this.selectedScheduleId = Number.isNaN(event.target.value)? 0: Number(event.target.value);
    const selectedScheduleId = this.selectedScheduleId === 0? null: this.selectedScheduleId;
    setTimeout(() => {
      document.querySelectorAll('select[name="scheduleIds[]"][id="scheduleIds"]').forEach(selectElement => {
        selectElement.childNodes.forEach(cN=>{
          cN.remove();
        })
        if (selectedScheduleId != null) selectElement.replaceChildren(new Option(String(selectedScheduleId), String(selectedScheduleId), true, true))
      });
      this.getMembers();
    }, 100);
  }

  handleTypeChange(event: Event) {
    // @ts-ignore
    this.selectedTypeId = Number.isNaN(event.target.value)? 0: Number(event.target.value);
  }

  handleStartTimeChange(event: Event) {
    // @ts-ignore
    this.startTimeValue = event.target.value;
  }

  handleEndTimeChange(event: Event) {
    // @ts-ignore
    this.endTimeValue = event.target.value;
  }

  firstUpdated() { 
  }

  private async getBranches() {
    const _networkResponse = await GET_ClientBranches<ClientBranches_I>();
    let __branches: ClientBranches_I[] = [];

    if (_networkResponse === null) {
      __branches.push({ id: 0, name: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const DATA: ClientBranches_I[] = _networkResponse.response.data;
        // console.log({DATA});
        __branches = DATA;
      }
    }
    const new_data: Array<ClientBranches_I> = [];
    new_data.push(...this._branches, ...__branches);
    this._branches = new_data;
  }

  private async getSchedules() {
    this._schedules = [];
    const _networkResponse = await GET_AttendanceSchedule<MeetingEventSchedule_I>(null, "?1&length=10000&branchId="+this.selectedBranchId);
    let __schedules: MeetingEventSchedule_I[] = [];

    if (_networkResponse === null) {
      __schedules.push({ id: 0, name: "**NOT FOUND**" });
    } else {
      if (('results' in _networkResponse.paginResponse) && ('count' in _networkResponse.paginResponse)) {
        const DATA: MeetingEventSchedule_I[] = _networkResponse.paginResponse.results;
        // console.log({DATA});
        __schedules = DATA;
      }
    }
    const new_data: Array<MeetingEventSchedule_I> = [];
    new_data.push(...this._schedules, ...__schedules);
    this._schedules = new_data;
  }

  private async getMembers() {
    this._members = [];
    const _networkResponse = await GET_AttendanceScheduleMember<MeetingAttendanceMemberModel>(null, "?1&length=10000&meetingEventId="+this.selectedScheduleId);
    let __members: MeetingAttendanceMemberModel[] = [];

    if (_networkResponse === null) {
      this._members = [];
    } else {
      if (('results' in _networkResponse.paginResponse) && ('count' in _networkResponse.paginResponse)) {
        const DATA: MeetingAttendanceMemberModel[] = _networkResponse.paginResponse.results;
        // console.log({DATA});
        __members = DATA;
      }
    }
    const new_data: Array<MeetingAttendanceMemberModel> = [];
    new_data.push(...this._members, ...__members);
    this._members = new_data;
  }
  
  private async getCreditEarnedFilterSign() {
    const _networkResponse = await GET_AttendanceScheduleCreditEarnedSign<CreditEarnedFiltersModel>();
    let __ceFilterSign: CreditEarnedFiltersModel[] = [];

    if (_networkResponse === null) {
      __ceFilterSign.push({ id: 0, name: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const DATA: CreditEarnedFiltersModel[] = _networkResponse.response.data;
        // console.log({DATA});
        __ceFilterSign = DATA;
      }
    }
    const new_data: Array<CreditEarnedFiltersModel> = [];
    new_data.push(...this._ceFilterSign, ...__ceFilterSign);
    this._ceFilterSign = new_data;
  }

  private async getCreditEarnedFilterType() {
    const _networkResponse = await GET_AttendanceScheduleCreditEarnedType<CreditEarnedFiltersModel>();
    let __ceFilterType: CreditEarnedFiltersModel[] = [];

    if (_networkResponse === null) {
      __ceFilterType.push({ id: 0, name: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const DATA: CreditEarnedFiltersModel[] = _networkResponse.response.data;
        // console.log({DATA});
        __ceFilterType = DATA;
      }
    }
    const new_data: Array<CreditEarnedFiltersModel> = [];
    new_data.push(...this._ceFilterType, ...__ceFilterType);
    this._ceFilterType = new_data;
  }

  private async getCreditEarnedFilterDuration() {
    const _networkResponse = await GET_AttendanceScheduleCreditEarnedDuration<CreditEarnedFiltersModel>();
    let __ceFilterDuration: CreditEarnedFiltersModel[] = [];

    if (_networkResponse === null) {
      __ceFilterDuration.push({ id: 0, name: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const DATA: CreditEarnedFiltersModel[] = _networkResponse.response.data;
        // console.log({DATA});
        __ceFilterDuration = DATA;
      }
    }
    const new_data: Array<CreditEarnedFiltersModel> = [];
    new_data.push(...this._ceFilterDuration, ...__ceFilterDuration);
    this._ceFilterDuration = new_data;
  }

  createRenderRoot() {
    return this;
  }
}
