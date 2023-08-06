import '@@assets/styles/views/widget/simple-table/main.scss';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
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
import '../../edit/member/dates/multiple';
import { MeetingEventScheduleDate_I } from '@@addons/interfaces/attendance/meeting_event/dates';
import { MemberMeetingEventDateModel } from '@@addons/interfaces/attendance/meeting_event/member/member/date';
import { GET_AttendanceScheduleDate } from '@@addons/network/attendance/setup/date';
import { POST_AttendanceScheduleMemberDateBulk } from '@@addons/network/attendance/setup/member/date/post_multiple';
import { DELETE_AttendanceScheduleMemberDate } from '@@addons/network/attendance/setup/member/date/delete';
import { GET_AttendanceScheduleMemberDate } from '@@addons/network/attendance/setup/member/date';


@customElement("attendance-setup-form-edit-member-dates-content")
export class AttendanceSetupFormEditMemberDatesContent extends LitElement {
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
  // private _dateUser: ClientUsers_I[] = [];

  private __dateUser: NetworkCallPaginResponse_I<ClientUsers_I> = null;

  public set _dateUser(value: NetworkCallPaginResponse_I<ClientUsers_I>) {
    this.__dateUser = value;
    this.requestUpdate();
  }

  public get _dateUser(): NetworkCallPaginResponse_I<ClientUsers_I> {
    return this.__dateUser;
  }

  private __scheduleDates: Array<MeetingEventScheduleDate_I> = [];

  public set _scheduleDates(value: Array<MeetingEventScheduleDate_I>) {
    this.__scheduleDates = value;
    this.requestUpdate();
  }

  public get _scheduleDates(): Array<MeetingEventScheduleDate_I> {
    return this.__scheduleDates;
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

  private __memberDates: Array<MemberMeetingEventDateModel> = [];

  public set _memberDates(value: Array<MemberMeetingEventDateModel>) {
    this.__memberDates = value;
    this.requestUpdate();
  }

  public get _memberDates(): Array<MemberMeetingEventDateModel> {
    return this.__memberDates;
  }

  @property({ type: Array })
  public _data?: Array<string> = [];

  @property({ type: Object })
  private urlQueryParams?: { [k: string]: string; } = undefined;

  @property({ type: Number })
  private meetingMemberId?: number = 0;

  @property({ type: Number })
  private meetingEventId?: number = 0;

  async connectedCallback() {
    super.connectedCallback();
    this.urlQueryParams = urlQueryParams();
    this.getMeetingMemberId();

    await this.getAttendanceScheduleMember();
    await this.getAttendanceScheduleDate();
    // console.log({ "_scheduleDates": this._scheduleDates });

    await this.getAttendanceScheduleMemberDate();
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
      return html`${this.memberDate}`;
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

  private get memberDate() {
    // console.log({ "this._memberDates": this._memberDates });

    if (this._memberDates === null) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;
    } else if (this._memberDates === undefined) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Date</span>: undefined error</h4>
          </div>
        </div>
      `;
    } else {
      // console.log({ "this._memberDates": "this._memberDates" });
      return html`
        ${this.form}<hr/>${this.display}
      `;
    }
  }

  private get display() {
    return html`${this.table}`;
  }

  private get table(): TemplateResult {
    if (this._memberDates.length > 0) {
      return html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="Member Meeting Date">
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
                        Meeting Date
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
                ${this.getMeetingAttendanceDates}
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

  private get getMeetingAttendanceDates() {
    return html`
      ${this._memberDates.map((item, i) => {
      return html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${this.getMemberName(item.memberInfo)}
            </th>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${getDate(item.dateId.date, { dateStyle: "medium" })}
            </td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${item.id}" @click="${this.deleteMemberMeetingAttendanceDate}"></mwc-icon-button>
            </td>
          </tr>
        `;
    })}
    `;
  }

  private get form() {
    return html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Member Date</h1>
                  <h3 class="h3">Create New Meeting/ Event Member Date!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-member-date">
                <div class="p-0 m-0" show-dateField="all">
                  <member-date-multiple-inputs-component .meetingDates="${this._scheduleDates}" 
                    meetingMemberId="${this.meetingMemberId}"
                    meetingEventId="${this.meetingEventId}">
                  </member-date-multiple-inputs-component>
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingMemberId" id="meetingMemberId" value="${this.meetingMemberId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Submit Date(s)" raised class="button" @click="${this.submitForm}">
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

  async submitForm(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });
    document.querySelectorAll("member-date-multiple-inputs-component").forEach(async selector => {
      console.log({ "selector--selector": selector });

      // @ts-ignore
      const multipleDateObjects = selector.multipleDateObjects;
      // console.log({ "selector--multipleDateObjects": multipleDateObjects });
      await POST_AttendanceScheduleMemberDateBulk(multipleDateObjects);

    });
  }

  async deleteMemberMeetingAttendanceDate(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });

    // @ts-ignore
    const meetingMemberId = Number(e.currentTarget.getAttribute('delete-this-item'));

    await DELETE_AttendanceScheduleMemberDate(meetingMemberId);
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

  private async getAttendanceScheduleDate() {
    const _networkResponse = await GET_AttendanceScheduleDate<MeetingEventScheduleDate_I>(
      null, "?meetingEventId=" + this.meetingEventId + "&length=1000"
    );
    let __scheduleDates: MeetingEventScheduleDate_I[] = [];

    if (_networkResponse === null) {
      __scheduleDates.push({ id: 0, date:  new Date() });
    } else {
      if ((_networkResponse.paginResponse.count > 0) && ('results' in _networkResponse.paginResponse)) {
        const DATA: MeetingEventScheduleDate_I[] = _networkResponse.paginResponse.results;
        // console.log({DATA});
        __scheduleDates = DATA;
      }
    }

    const new_data: Array<MeetingEventScheduleDate_I> = [];
    new_data.push(...this._scheduleDates, ...__scheduleDates);
    this._scheduleDates = new_data;
  }

  private async getAttendanceScheduleMemberDate() {
    const _networkResponse = await GET_AttendanceScheduleMemberDate<MemberMeetingEventDateModel>(
      null, "?memberId=" + this.meetingMemberId + "&length=1000"
    );
    let __memberDates: MemberMeetingEventDateModel[] = [];

    if (_networkResponse === null) {
      __memberDates.push(new MemberMeetingEventDateModel());
    } else {
      // console.log({"_networkResponse.paginResponse": _networkResponse.paginResponse});

      if ((_networkResponse.paginResponse.count > 0) && ('results' in _networkResponse.paginResponse)) {
        const DATA: MemberMeetingEventDateModel[] = _networkResponse.paginResponse.results.map(value => {
          // console.log({"value--value--value": value});

          return MemberMeetingEventDateModel.fromJson(value);
        });
        // console.log({DATA});
        __memberDates = DATA;
      }
    }

    const new_data: Array<MemberMeetingEventDateModel> = [];
    new_data.push(...this._memberDates, ...__memberDates);
    this._memberDates = new_data;
  }

  createRenderRoot() {
    return this;
  }
}
