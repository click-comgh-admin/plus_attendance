import { MeetingEventSchedule_I } from "../schedules"
import { MeetingEventIDModel } from "../schedules/categories";

export interface MeetingEventScheduleAdmin_I {
  id?: number,
  meetingEventId?: MeetingEventSchedule_I,
  adminId?: number,
  meetingEditor?: boolean,
  agendaEditor?: boolean,
  clockingAdmin?: boolean,
  updatedBy?: number,
  updateDate?: Date,
  date?: Date,
}

export class MeetingEventScheduleAdminModel {
  id: number;
  meetingEventId: MeetingEventIDModel|number;
  adminId: number;
  meetingEditor?: boolean;
  agendaEditor?: boolean;
  clockingAdmin?: boolean;
  updatedBy?: number;
  updateDate?: Date;
  date?: Date;

  // toJson method to convert the object to a JSON string
  toJson(): any {
    // console.log({"this.meetingEventId": this.meetingEventId})
    return {
      id: this.id,
      // @ts-ignore
      meetingEventId: Number.isNaN(this.meetingEventId)? this.meetingEventId.toJson(): this.meetingEventId,
      adminId: this.adminId,
      meetingEditor: this.meetingEditor,
      agendaEditor: this.agendaEditor,
      clockingAdmin: this.clockingAdmin,
      updatedBy: this.updatedBy,
      updateDate: this.updateDate.toISOString(),
      date: this.date.toISOString(),
    };
  }

  // fromJson method to create an object from a JSON string
  static fromJson(json: any): MeetingEventScheduleAdminModel {
    const model = new MeetingEventScheduleAdminModel();
    model.id = json.id;
    model.meetingEventId = MeetingEventIDModel.fromJson(json.meetingEventId);
    model.adminId = Number(json.adminId);
    model.meetingEditor = Boolean(json.meetingEditor);
    model.agendaEditor = Boolean(json.agendaEditor);
    model.clockingAdmin = Boolean(json.clockingAdmin);
    model.updatedBy = json.updatedBy;
    model.updateDate = new Date(json.updateDate);
    model.date = new Date(json.date);

    // console.log({"model-model--model": model});
    
    return model;
  }

  // toString method to return a string representation of the object
  toString(): string {
    return JSON.stringify(this.toJson());
  }
}