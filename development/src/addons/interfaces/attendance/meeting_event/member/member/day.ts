import { MeetingEventIDModel } from "../../schedules/categories";
import { IndividualMemberModel } from "./ind";
import { OrganizationMemberModel } from "./org";
import { MeetingAttendanceMemberModel } from "./";

// Export class for the "MemberMeetingEventDay" containing all the fields
export class MemberMeetingEventDayModel {
  id: number;
  meetingEventId: MeetingEventIDModel;
  dayId: DayIdFullModel;
  memberId: MeetingAttendanceMemberModel;
  updatedBy: number;
  updateDate: Date;
  date: Date;
  memberInfo?: IndividualMemberModel | OrganizationMemberModel | null;

  // toJson method to convert the object to a JSON string
  toJson(): any {
    return {
      id: this.id,
      meetingEventId: this.meetingEventId.toJson(),
      dayId: this.dayId.toJson(),
      memberId: this.memberId.toJson(),
      updatedBy: this.updatedBy,
      updateDate: this.updateDate.toISOString(),
      date: this.date.toISOString(),
      memberInfo: this.memberInfo === null || this.memberInfo === undefined ? null : this.memberInfo.toJson(),
    };
  }

  // fromJson method to create an object from a JSON string
  static fromJson(json: any): MemberMeetingEventDayModel {
    const model = new MemberMeetingEventDayModel();
    model.id = json.id;
    model.meetingEventId = MeetingEventIDModel.fromJson(json.meetingEventId);
    model.dayId = DayIdFullModel.fromJson(json.dayId);
    model.memberId = MeetingAttendanceMemberModel.fromJson(json.memberId);
    model.updatedBy = json.updatedBy;
    model.updateDate = new Date(json.updateDate);
    model.date = new Date(json.date);
    model.memberInfo = json.memberInfo === null || json.memberInfo === undefined ? null : ('certificates' in json.memberInfo ? OrganizationMemberModel.fromJson(json.memberInfo) : IndividualMemberModel.fromJson(json.memberInfo));

    // console.log({"model-model--model": model});
    
    return model;
  }

  // toString method to return a string representation of the object
  toString(): string {
    return JSON.stringify(this.toJson());
  }
}


// Export class for the "dayId" field
export class DayIdModel {
  id: number;
  date: Date;

  // toJson method to convert the object to a JSON string
  toJson(): any {
    return {
      id: this.id,
      date: this.date.toISOString(),
    };
  }

  // fromJson method to create an object from a JSON string
  static fromJson(json: any): DayIdModel {
    const model = new DayIdModel();
    model.id = json.id;
    model.date = new Date(json.date);
    return model;
  }

  // toString method to return a string representation of the object
  toString(): string {
    return JSON.stringify(this.toJson());
  }
}


// Export class for the "dayId" field
export class DayIdFullModel {
  id: number;
  meetingEventId: MeetingEventIDModel;
  dayId: number;
  startDate: Date;
  endDate: Date;
  updatedBy: number;
  updateDate: Date;
  date: Date;

  // toJson method to convert the object to a JSON string
  toJson(): any {
    return {
      id: this.id,
      meetingEventId: this.meetingEventId.toJson(),
      dayId: this.dayId,
      startDate: this.startDate.toISOString(),
      endDate: this.endDate.toISOString(),
      updatedBy: this.updatedBy,
      updateDate: this.updateDate.toISOString(),
      date: this.date.toISOString(),
    };
  }

  // fromJson method to create an object from a JSON string
  static fromJson(json: any): DayIdFullModel {
    const model = new DayIdFullModel();
    model.id = json.id;
    model.meetingEventId = MeetingEventIDModel.fromJson(json.meetingEventId);
    model.dayId = json.dayId;
    model.startDate = new Date(json.startDate);
    model.endDate = new Date(json.endDate);
    model.updatedBy = json.updatedBy;
    model.updateDate = new Date(json.updateDate);
    model.date = new Date(json.date);
    return model;
  }

  // toString method to return a string representation of the object
  toString(): string {
    return JSON.stringify(this.toJson());
  }
}


export class MemberMeetingEventDayFormInputModel {
  meetingEventId: number;
  dayId: number;
  memberId: number;

  toJson(): object {
    return {
      meetingEventId: this.meetingEventId,
      dayId: this.dayId,
      memberId: this.memberId,
    };
  }

  static fromJson(json: any): MemberMeetingEventDayFormInputModel {
    const model = new MemberMeetingEventDayFormInputModel();
    model.meetingEventId = json.meetingEventId;
    model.dayId = json.dayId;
    model.memberId = json.memberId;
    return model;
  }

  toString(): string {
    return `MemberMeetingEventDayFormInputModel(meetingEventId=${this.meetingEventId}, dayId=${this.dayId}, memberId=${this.memberId})`;
  }
}
