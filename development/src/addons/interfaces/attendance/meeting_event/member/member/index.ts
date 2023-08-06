import { MeetingEventCategoryModel, MeetingEventIDModel } from "../../schedules/categories";
import { MeetingAttendanceMemberGroupModel } from "../group";
import { MeetingAttendanceMemberSubGroupModel } from "../subgroup";
import { IndividualMemberModel } from "./ind";
import { OrganizationMemberModel } from "./org";


export enum AttendanceMemberStatus {
  None = 0,
  Assigned = 1,
  Pending = 3,
  Unassigned = 2,
}

export class MeetingAttendanceMemberModel {
  id: number;
  meetingEventId: MeetingEventIDModel;
  memberId: number;
  memberInfo?: IndividualMemberModel | OrganizationMemberModel;
  statusId: MeetingAttendanceMemberStatusIdModel;
  meetingCategoryId?: MeetingEventCategoryModel;
  meetingGroupId?: MeetingAttendanceMemberGroupModel;
  meetingSubgroupId?: MeetingAttendanceMemberSubGroupModel;
  updatedBy: number;
  updateDate: string;
  date: string;

  static fromJson(json: any): MeetingAttendanceMemberModel {    
    // console.log({ "MeetingAttendanceMemberModel:json": json });
    // if (!Number.isNaN(json)) return json;

    const model = new MeetingAttendanceMemberModel();
    model.id = json.id;
    model.meetingEventId = MeetingEventIDModel.fromJson(json.meetingEventId);
    model.memberId = json.memberId;
    model.memberInfo = json.memberInfo === null || json.memberInfo === undefined ? null : ('certificates' in json.memberInfo ? OrganizationMemberModel.fromJson(json.memberInfo) : IndividualMemberModel.fromJson(json.memberInfo));
    model.statusId = MeetingAttendanceMemberStatusIdModel.fromJson(json.statusId);
    model.meetingCategoryId = json.meetingCategoryId === null ? null : MeetingEventCategoryModel.fromJson(json.meetingCategoryId);
    model.meetingGroupId = json.meetingGroupId === null ? null : MeetingAttendanceMemberGroupModel.fromJson(json.meetingGroupId);
    model.meetingSubgroupId = json.meetingSubgroupId === null ? null : MeetingAttendanceMemberSubGroupModel.fromJson(json.meetingSubgroupId);
    model.updatedBy = json.updatedBy;
    model.updateDate = json.updateDate;
    model.date = json.date;
    return model;
  }

  toJson(): any {
    // console.log({"this.meetingEventId": this.meetingEventId});
    
    try {
      return {
        id: this.id,
        meetingEventId: this.meetingEventId.toJson(),
        memberId: this.memberId,
        memberInfo: this.memberInfo === null ? null : this.memberInfo.toJson(),
        statusId: this.statusId.toJson(),
        meetingCategoryId: this.meetingCategoryId === null ? null : this.meetingCategoryId.toJson(),
        meetingGroupId: this.meetingGroupId === null ? null : this.meetingGroupId.toJson(),
        meetingSubgroupId: this.meetingSubgroupId === null ? null : this.meetingSubgroupId.toJson(),
        updatedBy: this.updatedBy,
        updateDate: this.updateDate,
        date: this.date,
      };
    } catch (error) {
      return {
        id: this.id,
        meetingEventId: this.meetingEventId,
        memberId: this.memberId,
        memberInfo: this.memberInfo === null ? null : this.memberInfo.toJson(),
        statusId: this.statusId.toJson(),
        meetingCategoryId: this.meetingCategoryId === null ? null : this.meetingCategoryId.toJson(),
        meetingGroupId: this.meetingGroupId === null ? null : this.meetingGroupId.toJson(),
        meetingSubgroupId: this.meetingSubgroupId === null ? null : this.meetingSubgroupId.toJson(),
        updatedBy: this.updatedBy,
        updateDate: this.updateDate,
        date: this.date,
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
