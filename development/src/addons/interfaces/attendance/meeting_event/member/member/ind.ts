import { BranchIDModel, ClientIDModel, MemberCategoryIDModel } from "../../schedules/categories";

export class IndividualMemberModel {
  id: number;
  clientId: ClientIDModel | number;
  firstname: string;
  middlename: string;
  surname: string;
  gender: number;
  profilePicture: string;
  phone: string;
  email: string;
  dateOfBirth: Date;
  religion: number;
  nationality: string;
  countryOfResidence: string;
  stateProvince: string;
  region: number;
  district: number;
  constituency: number;
  electoralArea: number;
  community: string;
  hometown: string;
  houseNoDigitalAddress: string;
  digitalAddress: string;
  level: number;
  status: number;
  accountType: number;
  memberType: number;
  date: Date;
  last_login: string;
  referenceId: string;
  branchId: number;
  editable: boolean;
  profileResume: string;
  profileIdentification: any;
  archived: boolean;
  updatedBy: number;
  updateDate: Date;
  updatedByInfo: UpdatedByInfoModel;
  branchInfo: BranchIDModel;
  categoryInfo: MemberCategoryIDModel;

  static fromJson(json: any): IndividualMemberModel {
    const model = new IndividualMemberModel();
    model.id = json.id;
    model.clientId = Number.isNaN(json.clientId) ? ClientIDModel.fromJson(json.clientId) : Number(json.clientId);
    model.firstname = json.firstname;
    model.middlename = json.middlename;
    model.surname = json.surname;
    model.gender = json.gender;
    model.profilePicture = json.profilePicture;
    model.phone = json.phone;
    model.email = json.email;
    model.dateOfBirth = new Date(json.dateOfBirth);
    model.religion = json.religion;
    model.nationality = json.nationality;
    model.countryOfResidence = json.countryOfResidence;
    model.stateProvince = json.stateProvince;
    model.region = json.region;
    model.district = json.district;
    model.constituency = json.constituency;
    model.electoralArea = json.electoralArea;
    model.community = json.community;
    model.hometown = json.hometown;
    model.houseNoDigitalAddress = json.houseNoDigitalAddress;
    model.digitalAddress = json.digitalAddress;
    model.level = json.level;
    model.status = json.status;
    model.accountType = json.accountType;
    model.memberType = json.memberType;
    model.date = new Date(json.date);
    model.last_login = json.last_login;
    model.referenceId = json.referenceId;
    model.branchId = json.branchId;
    model.editable = json.editable;
    model.profileResume = json.profileResume;
    model.profileIdentification = json.profileIdentification;
    model.archived = json.archived;
    model.updatedBy = json.updatedBy;
    model.updateDate = new Date(json.updateDate);
    model.updatedByInfo = json.updatedByInfo === null ? null: UpdatedByInfoModel.fromJson(json.updatedByInfo);
    model.branchInfo = json.updatedByInfo === null ? null: BranchIDModel.fromJson(json.branchInfo);
    model.categoryInfo = json.updatedByInfo === null ? null: MemberCategoryIDModel.fromJson(json.categoryInfo);
    return model;
  }

  toJson(): any {
    return {
      id: this.id,
      //@ts-ignore
      clientId: Number.isNaN(this.clientId) ? this.clientId.toJson() : this.clientId,
      firstname: this.firstname,
      middlename: this.middlename,
      surname: this.surname,
      gender: this.gender,
      profilePicture: this.profilePicture,
      phone: this.phone,
      email: this.email,
      dateOfBirth: this.dateOfBirth.toISOString(),
      religion: this.religion,
      nationality: this.nationality,
      countryOfResidence: this.countryOfResidence,
      stateProvince: this.stateProvince,
      region: this.region,
      district: this.district,
      constituency: this.constituency,
      electoralArea: this.electoralArea,
      community: this.community,
      hometown: this.hometown,
      houseNoDigitalAddress: this.houseNoDigitalAddress,
      digitalAddress: this.digitalAddress,
      level: this.level,
      status: this.status,
      accountType: this.accountType,
      memberType: this.memberType,
      date: this.date.toISOString(),
      last_login: this.last_login,
      referenceId: this.referenceId,
      branchId: this.branchId,
      editable: this.editable,
      profileResume: this.profileResume,
      profileIdentification: this.profileIdentification,
      archived: this.archived,
      updatedBy: this.updatedBy,
      updateDate: this.updateDate.toISOString(),
      updatedByInfo: this.updatedByInfo === null? null: this.updatedByInfo.toJson(),
      branchInfo: this.branchInfo === null? null: this.branchInfo.toJson(),
      categoryInfo: this.categoryInfo === null? null: this.categoryInfo.toJson(),
    };
  }

  toString(): string {
    return JSON.stringify(this.toJson());
  }
}

export class UpdatedByInfoModel {
  id: number;
  firstname: string;
  surname: string;
  gender: number;
  profilePicture: string;
  dateOfBirth: string;
  phone: string;
  email: string;
  role: number;
  accountId: number;
  branchId: number;
  level: number;
  status: number;
  lastUpdatedBy: number;
  date: string;
  last_login: string;

  static fromJson(json: any): UpdatedByInfoModel {
    const model = new UpdatedByInfoModel();
    model.id = json.id;
    model.firstname = json.firstname;
    model.surname = json.surname;
    model.gender = json.gender;
    model.profilePicture = json.profilePicture;
    model.dateOfBirth = json.dateOfBirth;
    model.phone = json.phone;
    model.email = json.email;
    model.role = json.role;
    model.accountId = json.accountId;
    model.branchId = json.branchId;
    model.level = json.level;
    model.status = json.status;
    model.lastUpdatedBy = json.lastUpdatedBy;
    model.date = json.date;
    model.last_login = json.last_login;
    return model;
  }

  toJson(): any {
    return {
      id: this.id,
      firstname: this.firstname,
      surname: this.surname,
      gender: this.gender,
      profilePicture: this.profilePicture,
      dateOfBirth: this.dateOfBirth,
      phone: this.phone,
      email: this.email,
      role: this.role,
      accountId: this.accountId,
      branchId: this.branchId,
      level: this.level,
      status: this.status,
      lastUpdatedBy: this.lastUpdatedBy,
      date: this.date,
      last_login: this.last_login,
    };
  }

  toString(): string {
    return JSON.stringify(this.toJson());
  }
}

