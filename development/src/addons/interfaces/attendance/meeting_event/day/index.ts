import { MeetingEventSchedule_I } from "../schedules"

export interface MeetingEventScheduleDay_I {
  id?: number,
  meetingEventId?: MeetingEventSchedule_I,
  dayId?: number,
  startDate?: Date,
  endDate?: Date,
  updatedBy?: number,
  updateDate?: Date,
  date?: Date,
}

export class MeetingEventFormInputInterface {
  meetingEventId: number;
  dayId: number;
  startDate: string;
  endDate: string;

  toJson(): object {
    return {
      meetingEventId: this.meetingEventId,
      dayId: this.dayId,
      startDate: this.startDate,
      endDate: this.endDate,
    };
  }

  static fromJson(json: any): MeetingEventFormInputInterface {
    const model = new MeetingEventFormInputInterface();
    model.meetingEventId = json.meetingEventId;
    model.dayId = json.dayId;
    model.startDate = json.startDate;
    model.endDate = json.endDate;
    return model;
  }

  toString(): string {
    return `MeetingEvent(meetingEventId=${this.meetingEventId}, dayId=${this.dayId}, startDate=${this.startDate}, endDate=${this.endDate})`;
  }
}
