import { MeetingEventIDModel } from "../../schedules/categories";
import { IndividualMemberModel } from "./ind";
import { OrganizationMemberModel } from "./org";
import { MeetingAttendanceMemberModel } from "./";

// Export class for the "MemberMeetingEventDate" containing all the fields
export class MemberMeetingEventDateModel {
  id: number;
  meetingEventId: MeetingEventIDModel;
  dateId: DateIdModel;
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
      dateId: this.dateId.toJson(),
      memberId: this.memberId.toJson(),
      updatedBy: this.updatedBy,
      updateDate: this.updateDate.toISOString(),
      date: this.date.toISOString(),
      memberInfo: this.memberInfo === null || this.memberInfo === undefined ? null : this.memberInfo.toJson(),
    };
  }

  // fromJson method to create an object from a JSON string
  static fromJson(json: any): MemberMeetingEventDateModel {
    const model = new MemberMeetingEventDateModel();
    model.id = json.id;
    model.meetingEventId = MeetingEventIDModel.fromJson(json.meetingEventId);
    model.dateId = DateIdModel.fromJson(json.dateId);
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


// Export class for the "DateIdModel" field
export class DateIdModel {
  id: number;
  meetingEventId: number;
  date: Date;
  updatedBy: number;
  updateDate: Date;
  creationDate: Date;

  // toJson method to convert the object to a JSON string
  toJson(): any {
    return {
      id: this.id,
      meetingEventId: this.meetingEventId,
      date: this.date.toISOString(),
      updatedBy: this.updatedBy,
      updateDate: this.updateDate.toISOString(),
      creationDate: this.creationDate.toISOString(),
    };
  }

  // fromJson method to create an object from a JSON string
  static fromJson(json: any): DateIdModel {
    const model = new DateIdModel();
    model.id = json.id;
    model.meetingEventId = json.meetingEventId;
    model.date = new Date(json.date);
    model.updatedBy = json.updatedBy;
    model.updateDate = new Date(json.updateDate);
    model.creationDate = new Date(json.creationDate);
    return model;
  }

  // toString method to return a string representation of the object
  toString(): string {
    return JSON.stringify(this.toJson());
  }
}


export class MemberMeetingEventDateFormInputModel {
  meetingEventId: number;
  dateId: number;
  memberId: number;

  toJson(): object {
    return {
      meetingEventId: this.meetingEventId,
      dateId: this.dateId,
      memberId: this.memberId,
    };
  }

  static fromJson(json: any): MemberMeetingEventDateFormInputModel {
    const model = new MemberMeetingEventDateFormInputModel();
    model.meetingEventId = json.meetingEventId;
    model.dateId = json.dateId;
    model.memberId = json.memberId;
    return model;
  }

  toString(): string {
    return `MemberMeetingEventDateFormInputModel(meetingEventId=${this.meetingEventId}, dateId=${this.dateId}, memberId=${this.memberId})`;
  }
}

