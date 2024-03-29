import '@@assets/styles/views/branch/main.scss';
import "../../../assets/styles/views/home/dashboard.scss";
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '@material/mwc-button';
import '@@widgets/datatables';
import '@@addons/widgets/alert';
import '@@interfaces/datatables';
import "@@addons/widgets/buttons/link-buttons/link-button";
import { ClientUserDashboardAttendanceMetricModel } from '@@addons/interfaces/clients/users/dashboard/metrics/attendance';

@customElement("pdb-dashboard-user")
export class PdbDashboardMainUser extends LitElement {
  constructor() { super(); }

  @property({ type: Array })
  private dashboardMetrics: ClientUserDashboardAttendanceMetricModel[] = [];

  async connectedCallback() {
    super.connectedCallback();

    // @ts-ignore
    // console.log({ "countDownCounter": countDownCounter });

  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {

    const metrics = this.dashboardMetrics.map(element => {
      return html`
        <div class="!max-w-full d-none"></div>
        ${this.headers(element.branch.name + " Attendance Metrics")}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-flow-row gap-4 pb-2">
          ${this.metric("All Events", "fa-table", "bg-midnight-bloom", element.scheduledEvents)}
          ${this.metric("All Meetings", "fa-table", "bg-midnight-bloom", element.scheduledMeetings)}
        </div>
        ${this.headers(`On-Going Meeting ->-> ${element.onGoing?.meetingName?.length > 0 ? element.onGoing?.meetingName: "??"}`)}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 pb-2">
          ${this.metric("Attendees", "fa-users", "bg-night-sky", element.onGoing.attendees)}
          ${this.metric("Absentees", "fa-users", "bg-night-sky", element.onGoing.absentees)}
          ${this.metric("Late", "fa-user-clock", "bg-night-sky", element.onGoing.late)}
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-flow-row gap-4 pb-2">
          ${this.metric("Males", "fa-male", "bg-night-sky", element.onGoing.males)}
          ${this.metric("Females", "fa-female", "bg-night-sky", element.onGoing.females)}
        </div>
        ${this.headers(`Previous Meeting ->-> ${element.previous?.meetingName?.length > 0 ? element.previous?.meetingName: "??"}`)}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 pb-2">
          ${this.metric("Attendees", "fa-users", "bg-royal", element.previous.attendees)}
          ${this.metric("Absentees", "fa-users", "bg-royal", element.previous.absentees)}
          ${this.metric("Late", "fa-user-clock", "bg-royal", element.previous.late)}
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-flow-row gap-4 pb-2">
          ${this.metric("Males", "fa-male", "bg-royal", element.previous.males)}
          ${this.metric("Females", "fa-female", "bg-royal", element.previous.females)}
        </div>
        ${this.headers("Subscription Info")}
        <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4 pb-5">
          ${this.metric("Subscription Amount", "pe-7s-cash py-2", "bg-vicious-stance", element.subscriptionAmount, "p-3")}
          <div class="bg-white border border-gray-200 rounded shadow-sm p-0">
            <div class="flex flex-row items-center h-full">
              <div class="flex-shrink pr-2 contents">
                <div class="rounded py-2 px-3 bg-vicious-stance">
                  <i class="fa fa-clock fa-2x fa-fw fa-inverse"></i>
                </div>
              </div>
              <div class="flex-1 text-right md:text-center">
                ${this.subscriptionCountDown(element)}
              </div>
            </div>
          </div>
          <!-- -->
        </div>
      `;
    });
    return metrics;
  }

  private headers(title: string) {
    const header = html`<h4 class="text-gray-600">${title}</h4>`,
      content = nothing;
    return html`<alert-card info .header="${header}" .content="${content}" extra_class="!max-w-full"></alert-card>`;
  }

  private subscriptionCountDown(element: ClientUserDashboardAttendanceMetricModel) {
    if (element.nonExpiry == true) return html`
      <div class="widget-content p-0">
        <div class="widget-content-outer">
          <div class="grid grid-cols-1 sm:grid-cols-1 grid-flow-row gap-1 p-1">
            <div class="text-muted flex justify-end items-center content-center">
              <h5 class="font-bold uppercase text-gray-400 pr-2">Account Does Not Expire</h5>
            </div>
          </div>
        </div>
      </div>
    `;
    return html`
      <div class="widget-content p-0">
        <div class="widget-content-outer">
          <div class="grid grid-cols-1 sm:grid-cols-1 grid-flow-row gap-1 p-1">
            <div class="text-muted flex justify-end items-center content-center">
              <input type="hidden" getClock__="${this.getDate(element.expirationDate)}" name="">
              <h5 class="font-bold uppercase text-gray-400 pr-2">Subscription Ends In</h5>
            </div>
            <ul class="countdown px-1 pt-1 flex justify-center items-center content-center">
              <li> <span style="background-color: #eee" class="days p-1">00</span>
                <p class="days_ref">days</p>
              </li>
              <li class="seperator !px-0">|</li>
              <li> <span style="background-color: #eee" class="hours p-1">00</span>
                <p class="hours_ref">hours</p>
              </li>
              <li class="seperator !px-0">|</li>
              <li> <span style="background-color: #eee" class="minutes p-1">00</span>
                <p class="minutes_ref">minutes</p>
              </li>
              <li class="seperator !px-0">|</li>
              <li> <span style="background-color: #eee" class="seconds p-1">00</span>
                <p class="seconds_ref">seconds</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  private metric(title: string, icon: string, icon_bg: string, value: number, padding: string = "py-2 px-3") {
    return html`
      <div class="bg-white border border-gray-200 rounded shadow-sm p-0 pr-2">
        <div class="flex flex-row items-center h-full">
          <div class="flex-shrink pr-4 contents">
            <div class="rounded ${padding} bg-green-600 ${icon_bg}">
              <i class="fa ${icon} fa-2x fa-fw fa-inverse"></i>
            </div>
          </div>
          <div class="flex-1 text-right md:text-center">
            <h6 class="font-bold uppercase text-gray-400">${title}</h6>
            <h4 class="font-bold text-3xl text-gray-600">
              ${value} <span class="text-green-500 text-grow-early">
                <i class="fas fa-caret-right"></i>
              </span>
            </h4>
          </div>
        </div>
      </div>
    `;
  }

  protected firstUpdated(_changedProperties: Map<string | number | symbol, unknown>): void {
    setTimeout(() => {
      // @ts-ignore
      countDownCounter({
        selector: document.querySelector('.countdown'),
        date: document.querySelector('[getClock__]').getAttribute('getClock__'),
      });
    }, 500);
  }

  getDate(date: Date) {
    // console.log({ "date_date_date": date });
    if (date === null) {
      date = new Date();
    }

    let year = date.toLocaleString('default', { year: "numeric" }),
      month = date.toLocaleString('default', { month: "2-digit" }),
      day = date.toLocaleString('default', { day: "2-digit" });
    return month + "/" + day + "/" + (year) + " 00:00";
  }

  createRenderRoot() {
    return this;
  }
}
