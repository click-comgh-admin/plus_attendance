import { MeetingEventIDModel } from "../../schedules/categories";

export class MeetingAttendanceMemberGroupModel {
  id: number;
  meetingEventId: MeetingEventIDModel;
  groupId: number;
  groupInfo: GroupModel;
  asMemberType: boolean;
  updatedBy: number;
  updateDate: Date;
  date: Date;

  static fromJson(json: any): MeetingAttendanceMemberGroupModel {
    const model = new MeetingAttendanceMemberGroupModel();
    model.id = json.id;
    model.meetingEventId = MeetingEventIDModel.fromJson(json.meetingEventId);
    model.groupId = json.groupId;
    model.groupInfo = GroupModel.fromJson(json.groupInfo);
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
      groupId: this.groupId,
      groupInfo: this.groupInfo.toJson(),
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

export class GroupModel {
  id: number;
  clientId: number;
  group: string;
  branchId: number;
  memberCategoryId: number;
  createdBy: number;
  updatedBy: number;
  updateDate: Date;
  date: Date;

  static fromJson(json: any): GroupModel {
    const model = new GroupModel();
    // console.log({ "json: json": json });
    model.id = json.id;
    model.clientId = json.clientId;
    model.group = json.group;
    model.branchId = json.branchId;
    model.memberCategoryId = json.memberCategoryId;
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
      group: this.group,
      branchId: this.branchId,
      memberCategoryId: this.memberCategoryId,
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

export class SubGroupModel {
  id: number;
  clientId: number;
  groupId: number;
  groupInfo: GroupModel;
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
    model.groupId = json.groupId;
    model.groupInfo = GroupModel.fromJson(json.groupInfo);
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
      groupId: this.groupId,
      groupInfo: this.groupInfo.toJson(),
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

