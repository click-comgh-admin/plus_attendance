import { MeetingEventIDModel } from "../schedules/categories";
import { IndividualMemberModel } from "../member/member/ind";
import { OrganizationMemberModel } from "../member/member/org";
import { MeetingAttendanceMemberModel } from "../member/member/index";
import { MeetingEventScheduleAdminModel } from "./";


export class MeetingEventScheduleAdminMemberModel {
  id: number;
  meetingEventId: MeetingEventIDModel;
  memberId: MeetingAttendanceMemberModel;
  memberInfo?: IndividualMemberModel | OrganizationMemberModel | null;
  adminId: MeetingEventScheduleAdminModel;
  updatedBy: number;
  updateDate: Date;
  date: Date;

  static fromJson(json: any): MeetingEventScheduleAdminMemberModel {
    // console.log({ "MeetingEventScheduleAdminMemberModel:json": json });
    // if (!Number.isNaN(json)) return json;

    const model = new MeetingEventScheduleAdminMemberModel();
    model.id = json.id;
    model.meetingEventId = MeetingEventIDModel.fromJson(json.meetingEventId);
    model.memberId = MeetingAttendanceMemberModel.fromJson(json.memberId);
    model.memberInfo = json.memberInfo === null || json.memberInfo === undefined ? null : ('certificates' in json.memberInfo ? OrganizationMemberModel.fromJson(json.memberInfo) : IndividualMemberModel.fromJson(json.memberInfo));
    model.adminId = MeetingEventScheduleAdminModel.fromJson(json.adminId);
    model.updatedBy = json.updatedBy;
    model.updateDate = new Date(json.updateDate);
    model.date = new Date(json.date);

    return model;
  }

  toJson(): any {
    // console.log({"this.meetingEventId": this.meetingEventId});

    try {
      return {
        id: this.id,
        meetingEventId: this.meetingEventId.toJson(),
        memberId: this.memberId,
        memberInfo: this.memberInfo === null || this.memberInfo === undefined ? null : this.memberInfo.toJson(),
        adminId: this.adminId.toJson(),
        updatedBy: this.updatedBy,
        updateDate: this.updateDate.toISOString(),
        date: this.date.toISOString(),
      };
    } catch (error) {
      return {
        id: this.id,
        meetingEventId: this.meetingEventId,
        memberId: this.memberId,
        memberInfo: this.memberInfo === null || this.memberInfo === undefined ? null : this.memberInfo.toJson(),
        adminId: this.adminId.toJson(),
        updatedBy: this.updatedBy,
        updateDate: this.updateDate.toISOString(),
        date: this.date.toISOString(),
      };
    }
  }

  toString(): string {
    return JSON.stringify(this.toJson());
  }
}


export class MeetingAttendanceMemberStatusIdModel {
  id: number;
  status: string;

  static fromJson(json: any): MeetingAttendanceMemberStatusIdModel {
    const model = new MeetingAttendanceMemberStatusIdModel();
    model.id = json.id;
    model.status = json.status;
    return model;
  }

  toJson(): any {
    return {
      id: this.id,
      status: this.status,
    };
  }

  toString(): string {
    return JSON.stringify(this.toJson());
  }
}
