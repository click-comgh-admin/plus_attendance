import '@@assets/styles/views/widget/simple-table/main.scss';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-circular-progress';
import '@@addons/widgets/form/new/switch';
import '@@addons/widgets/add_remove_widget';
import '@@addons/widgets/form/new/file-select';
import { MDCDataTable } from '@material/data-table';
import { urlQueryParams, urlQueryParamsGet } from '@@addons/functions/url_query_params';
import { NetworkCallPaginResponse_I, NetworkCallResponse_I } from '@@addons/interfaces/network_calls/response';
import { ClientUsers_I } from '@@addons/interfaces/clients/users';
import '@@addons/widgets/form/new/select';
import { DayOfWeek_I } from '@@addons/interfaces/attendance/day_of_week';
import { GET_DayOfWeek } from '@@addons/network/attendance/day_of_week';
import { getDate } from '@@addons/functions/date_time/date';
import { MeetingAttendanceMemberModel } from '@@addons/interfaces/attendance/meeting_event/member/member';
import { MemberMeetingEventDayModel } from '@@addons/interfaces/attendance/meeting_event/member/member/day';
import { GET_AttendanceScheduleMember } from '@@addons/network/attendance/setup/member';
import { GET_AttendanceScheduleMemberDay } from '@@addons/network/attendance/setup/member/day';
import { MeetingEventScheduleDay_I } from '@@addons/interfaces/attendance/meeting_event/day';
import { GET_AttendanceScheduleDay } from '@@addons/network/attendance/setup/day';
import { POST_AttendanceScheduleMemberDayBulk } from '@@addons/network/attendance/setup/member/day/post_multiple';
import { IndividualMemberModel } from '@@addons/interfaces/attendance/meeting_event/member/member/ind';
import { OrganizationMemberModel } from '@@addons/interfaces/attendance/meeting_event/member/member/org';
import { DELETE_AttendanceScheduleMemberDay } from '@@addons/network/attendance/setup/member/day/delete';
import '../../edit/member/days/multiple';


@customElement("attendance-setup-form-edit-member-days-content")
export class AttendanceSetupFormEditMemberDaysContent extends LitElement {
  constructor() {
    super();
  }

  //  @query(identifier)
  //  private _identifier?: any;

  //  @queryAll(identifier)
  //  private _identifier?: any;

  @property({ type: Number })
  public CLIENT_ID: number = 0;

  @property({ type: Number })
  private startSearchPage: number = 0;

  // @property({ type: Array })
  // private _dayUser: ClientUsers_I[] = [];

  private __dayUser: NetworkCallPaginResponse_I<ClientUsers_I> = null;

  public set _dayUser(value: NetworkCallPaginResponse_I<ClientUsers_I>) {
    this.__dayUser = value;
    this.requestUpdate();
  }

  public get _dayUser(): NetworkCallPaginResponse_I<ClientUsers_I> {
    return this.__dayUser;
  }

  private __scheduleDays: Array<MeetingEventScheduleDay_I> = [];

  public set _scheduleDays(value: Array<MeetingEventScheduleDay_I>) {
    this.__scheduleDays = value;
    this.requestUpdate();
  }

  public get _scheduleDays(): Array<MeetingEventScheduleDay_I> {
    return this.__scheduleDays;
  }

  private __meetingMember: NetworkCallResponse_I<MeetingAttendanceMemberModel> = null;

  public set _meetingMember(value: NetworkCallResponse_I<MeetingAttendanceMemberModel>) {
    this.__meetingMember = value;
    this.requestUpdate();
  }

  public get _meetingMember(): NetworkCallResponse_I<MeetingAttendanceMemberModel> {
    return this.__meetingMember;
  }

  // @property({ type: Object })
  // private _meetingMember: NetworkCallResponse_I<MeetingAttendanceMemberModel> = null;

  private __memberDays: Array<MemberMeetingEventDayModel> = [];

  public set _memberDays(value: Array<MemberMeetingEventDayModel>) {
    this.__memberDays = value;
    this.requestUpdate();
  }

  public get _memberDays(): Array<MemberMeetingEventDayModel> {
    return this.__memberDays;
  }

  @property({ type: Array })
  private _daysOfWeek: DayOfWeek_I[] = [];

  @property({ type: Array })
  public _data?: Array<string> = [];

  @property({ type: Object })
  private urlQueryParams?: { [k: string]: string; } = undefined;

  @property({ type: Number })
  private meetingMemberId?: number = 0;

  @property({ type: Number })
  private meetingEventId?: number = 0;

  @query('[show-dayField="all"]')
  private showDayFieldAllSelector: Element;

  async connectedCallback() {
    super.connectedCallback();
    this.urlQueryParams = urlQueryParams();
    this.getMeetingMemberId();

    // await this.getDayUsers();  
    await this.getDaysOfWeek();
    // console.log({ "_daysOfWeek": this._daysOfWeek });

    await this.getAttendanceScheduleMember();
    await this.getAttendanceScheduleDay();
    // console.log({ "_scheduleDays": this._scheduleDays });

    await this.getAttendanceScheduleMemberDay();
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
    // console.log({ "this._meetingMember": this._meetingMember });
    if (this._meetingMember === null) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;
    } else if (this._meetingMember === undefined) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting Member</span>: undefined error</h4>
          </div>
        </div>
      `;
    } else if (this._meetingMember.success === true) {
      return html`${this.memberDay}`;
    } else {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting Member</span>: ${this._meetingMember.message}</h2>
          </div>
        </div>
      `;
    }
  }

  private get memberDay() {
    // console.log({ "this._memberDays": this._memberDays });

    if (this._memberDays === null) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;
    } else if (this._memberDays === undefined) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Day</span>: undefined error</h4>
          </div>
        </div>
      `;
    } else {
      return html`
        ${this.form}<hr/>${this.display}
      `;
    }
  }

  private get display() {
    return html`${this.table}`;
  }

  private get table(): TemplateResult {
    if (this._memberDays.length > 0) {
      return html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="Member Meeting Day">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Member
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting Day
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Start Date
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        End Date
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell !text-right" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <mwc-icon>tune</mwc-icon>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="mdc-data-table__content">
                ${this.getMeetingAttendanceDays}
              </tbody>
            </table>
          </div>
        </div>
      `;
    } else {
      return html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `;
    }
  }

  getMemberName(memberInfo?: IndividualMemberModel | OrganizationMemberModel) {
    if (memberInfo === null) {

    } else {
      if (memberInfo.accountType === 1) {
        // @ts-ignore
        const _memberInfo: IndividualMemberModel = memberInfo;
        return `${_memberInfo.firstname} ${_memberInfo.middlename ?? ""} ${_memberInfo.surname}`;
      } else {
        // @ts-ignore
        const _memberInfo: OrganizationMemberModel = memberInfo;
        return _memberInfo.organizationName;
      }
    }
  }

  private get getMeetingAttendanceDays() {
    return html`
      ${this._memberDays.map((item, i) => {
      return html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${this.getMemberName(item.memberInfo)}
            </th>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${/**until(this.getDayOfWeek(item.dayId.id), html`<span>Loading...</span>`)*/ ""}
              ${this.getMemberDayOfWeek(item.dayId.id)}
            </td>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${getDate(item.dayId.startDate, { dateStyle: "medium" })}
            </td>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${getDate(item.dayId.endDate, { dateStyle: "medium" })}
            </td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${item.id}" @click="${this.deleteMemberMeetingAttendanceDay}"></mwc-icon-button>
            </td>
          </tr>
        `;
    })}
    `;
  }

  private get form() {
    // <mwc-icon-button icon="library_add" class="success -mt-1 mr-2" @click="${this.addDayField}">
    // </mwc-icon-button>
    return html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Member Day</h1>
                  <h3 class="h3">Create New Meeting/ Event Member Day!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-member-day">
                <div class="p-0 m-0" show-dayField="all">
                  <member-day-multiple-inputs-component .meetingDays="${this._scheduleDays}" 
                    .daysOfWeek="${this._daysOfWeek}" meetingMemberId="${this.meetingMemberId}"
                    meetingEventId="${this.meetingEventId}">
                  </member-day-multiple-inputs-component>
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingMemberId" id="meetingMemberId" value="${this.meetingMemberId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Submit Day(s)" raised class="button" @click="${this.submitForm}">
                      </mwc-button>
                    </div>

                    <div class="flex form-input-container items-center text-center">
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                      <label class="block font-medium text-sm text-gray-600 w-full">
                        Lets go digital...
                      </label>
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    this.querySelectorAll('[mdc-data-table="data-table"]').forEach((selector) => {
      const dataTable = new MDCDataTable(selector);

      // console.log({ dataTable: dataTable })
    });
  }

  getMemberDayOfWeek(id: number) {
    let _scheduleDay: string = "-";
    this._scheduleDays.forEach(scheduleDay => {
      if (id === scheduleDay.id) {

        this._daysOfWeek.forEach(dayOfWeek => {
          if (scheduleDay.dayId === dayOfWeek.id) {
            _scheduleDay = dayOfWeek.day;
          }
        });
      }
    });

    return _scheduleDay;
  }

  async submitForm(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });
    // if (this._memberDays.count > 0) {
    //   await PUT_AttendanceUpdateScheduleDayMultiple(this.meetingMemberId);
    // } else {
    //   await POST_AttendanceAddScheduleDayMultiple();
    // }
    // await POST_AttendanceAddScheduleDayMultiple();
    document.querySelectorAll("member-day-multiple-inputs-component").forEach(async selector => {
      console.log({ "selector--selector": selector });

      // @ts-ignore
      const multipleDayObjects = selector.multipleDayObjects;
      // console.log({ "selector--multipleDayObjects": multipleDayObjects });
      await POST_AttendanceScheduleMemberDayBulk(multipleDayObjects);

    });
    // await POST_AttendanceAddScheduleDay();
  }

  async deleteMemberMeetingAttendanceDay(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });

    // @ts-ignore
    const meetingMemberId = Number(e.currentTarget.getAttribute('delete-this-item'));

    await DELETE_AttendanceScheduleMemberDay(meetingMemberId);
  }

  private getMeetingMemberId() {
    let meetingMemberId = urlQueryParamsGet('member-id');
    let _meetingMemberId = meetingMemberId !== null ? Number(meetingMemberId) : null;
    this.meetingMemberId = Number.isNaN(_meetingMemberId) ? null : _meetingMemberId;
    // console.log({ "this.urlQueryParams": this.urlQueryParams, "this.meetingMemberId": this.meetingMemberId });
  }

  private async getAttendanceScheduleMember() {
    const _networkResponse = await GET_AttendanceScheduleMember<MeetingAttendanceMemberModel>(this.meetingMemberId);
    if (_networkResponse === null) {
      this._meetingMember = undefined;
    } else {
      this._meetingMember = _networkResponse.response;
      this.meetingEventId = Array.isArray(this._meetingMember.data)
        ? this._meetingMember.data[0].meetingEventId.id : this._meetingMember.data.meetingEventId.id;
    }
  }

  private async getAttendanceScheduleDay() {
    const _networkResponse = await GET_AttendanceScheduleDay<MeetingEventScheduleDay_I>(
      null, "?meetingEventId=" + this.meetingEventId + "&length=1000"
    );
    let __scheduleDays: MeetingEventScheduleDay_I[] = [];

    if (_networkResponse === null) {
      __scheduleDays.push({ id: 0, dayId: 0, endDate: new Date() });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const DATA: MeetingEventScheduleDay_I[] = _networkResponse.response.data;
        // console.log({DATA});
        __scheduleDays = DATA;
      }
    }

    const new_data: Array<MeetingEventScheduleDay_I> = [];
    new_data.push(...this._scheduleDays, ...__scheduleDays);
    this._scheduleDays = new_data;
  }

  private async getAttendanceScheduleMemberDay() {
    const _networkResponse = await GET_AttendanceScheduleMemberDay<MemberMeetingEventDayModel>(
      null, "?memberId=" + this.meetingMemberId + "&length=1000"
    );
    let __memberDays: MemberMeetingEventDayModel[] = [];

    if (_networkResponse === null) {
      __memberDays.push(new MemberMeetingEventDayModel());
    } else {
      // console.log({"_networkResponse.paginResponse": _networkResponse.paginResponse});

      if ((_networkResponse.paginResponse.count > 0) && ('results' in _networkResponse.paginResponse)) {
        const DATA: MemberMeetingEventDayModel[] = _networkResponse.paginResponse.results.map(value => {
          // console.log({"value--value--value": value});

          return MemberMeetingEventDayModel.fromJson(value);
        });
        // console.log({DATA});
        __memberDays = DATA;
      }
    }

    const new_data: Array<MemberMeetingEventDayModel> = [];
    new_data.push(...this._memberDays, ...__memberDays);
    this._memberDays = new_data;
  }

  private async getDaysOfWeek() {
    const _networkResponse = await GET_DayOfWeek<DayOfWeek_I>();
    let __daysOfWeek: DayOfWeek_I[] = [];

    if (_networkResponse === null) {
      __daysOfWeek.push({ id: 0, day: "**NOT FOUND**", date: new Date() });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const DATA: DayOfWeek_I[] = _networkResponse.response.data;
        // console.log({DATA});
        __daysOfWeek = DATA;
      }
    }

    const new_data: Array<DayOfWeek_I> = [];
    new_data.push(...this._daysOfWeek, ...__daysOfWeek);
    this._daysOfWeek = new_data;
  }

  private async getDayOfWeek(ID: number) {
    const _networkResponse = await GET_DayOfWeek<DayOfWeek_I>(ID);
    if (_networkResponse === null) {
      return "???";
    } else {
      if (_networkResponse.response.success && 'day' in _networkResponse.response.data) {

        const day_of_week: DayOfWeek_I = _networkResponse.response.data;
        return day_of_week.day;
      } else {
        return _networkResponse.response.message;
      }
    }
  }

  createRenderRoot() {
    return this;
  }
}
