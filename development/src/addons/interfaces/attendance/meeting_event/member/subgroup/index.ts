import { MeetingEventIDModel } from "../../schedules/categories";
import { GroupModel } from "../group";

export class MeetingAttendanceMemberSubGroupModel {
  id: number;
  meetingEventId: MeetingEventIDModel;
  subGroupId: number;
  subGroupInfo: SubGroupModel;
  asMemberType: boolean;
  updatedBy: number;
  updateDate: Date;
  date: Date;

  static fromJson(json: any): MeetingAttendanceMemberSubGroupModel {
    const model = new MeetingAttendanceMemberSubGroupModel();
    model.id = json.id;
    model.meetingEventId = MeetingEventIDModel.fromJson(json.meetingEventId);
    model.subGroupId = json.subGroupId;
    model.subGroupInfo = SubGroupModel.fromJson(json.subGroupInfo);
    model.asMemberType = json.asMemberType;
    model.updatedBy = json.updatedBy;
    model.updateDate = new Date(json.updateDate);
    model.date = new Date(json.date);

    return model;
  }

  toJson(): any {
    return {
      id: this.id,
      meetingEventId: this.meetingEventId.toJson(),
      subGroupId: this.subGroupId,
      subGroupInfo: this.subGroupInfo.toJson(),
      asMemberType: this.asMemberType,
      updatedBy: this.updatedBy,
      updateDate: this.updateDate.toISOString(),
      date: this.date.toISOString(),
    };
  }

  toString(): string {
    return JSON.stringify(this.toJson());
  }
}

export class SubGroupModel {
  id: number;
  clientId: number;
  groupId: GroupModel;
  branchId: number;
  memberCategoryId: number;
  subgroup: string;
  createdBy: number;
  updatedBy: number;
  updateDate: Date;
  date: Date;

  static fromJson(json: any): SubGroupModel {
    const model = new SubGroupModel();
    model.id = json.id;
    model.clientId = json.clientId;
    model.groupId = GroupModel.fromJson(json.groupId);
    model.branchId = json.branchId;
    model.memberCategoryId = json.memberCategoryId;
    model.subgroup = json.subgroup;
    model.createdBy = json.createdBy;
    model.updatedBy = json.updatedBy;
    model.updateDate = new Date(json.updateDate);
    model.date = new Date(json.date);

    return model;
  }

  toJson(): any {
    return {
      id: this.id,
      clientId: this.clientId,
      groupId: this.groupId.toJson(),
      branchId: this.branchId,
      memberCategoryId: this.memberCategoryId,
      subgroup: this.subgroup,
      createdBy: this.createdBy,
      updatedBy: this.updatedBy,
      updateDate: this.updateDate.toISOString(),
      date: this.date.toISOString(),
    };
  }

  toString(): string {
    return JSON.stringify(this.toJson());
  }
}

