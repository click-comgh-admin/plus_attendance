export class MeetingEventCategoryModel {
  id: number;
  meetingEventId: MeetingEventIDModel;
  memberCategoryId: MemberCategoryIDModel;
  updatedBy: number;
  updateDate: Date;
  date: Date;

  static fromJson(json: any): MeetingEventCategoryModel {
    const model = new MeetingEventCategoryModel();
    model.id = json.id;
    model.meetingEventId = MeetingEventIDModel.fromJson(json.meetingEventId);
    model.memberCategoryId = MemberCategoryIDModel.fromJson(json.memberCategoryId);
    model.updatedBy = json.updatedBy;
    model.updateDate = new Date(json.updateDate);
    model.date = new Date(json.date);
    return model;
  }

  toJson(): any {
    return {
      id: this.id,
      meetingEventId: this.meetingEventId.toJson(),
      memberCategoryId: this.memberCategoryId.toJson(),
      updatedBy: this.updatedBy,
      updateDate: this.updateDate.toISOString(),
      date: this.date.toISOString(),
    };
  }

  toString(): string {
    return JSON.stringify(this.toJson(), null, 2);
  }
}

export class MeetingEventIDModel {
  id: number;
  type: number;
  memberType: number;
  name: string;
  clientId: ClientIDModel;
  branchId: BranchIDModel;
  memberCategoryId: MemberCategoryIDModel;
  meetingSpan: number;
  startTime: string;
  closeTime: string;
  latenessTime: null;
  isRecuring: boolean;
  hasBreakTime: boolean;
  hasDuty: boolean;
  hasOvertime: boolean;
  virtualMeetingLink: string;
  virtualMeetingType: number;
  meetingLocation: number;
  expectedMonthlyAttendance: number;
  activeMonthlyAttendance: number;
  agenda: string;
  agendaFile: string;
  updatedBy: number;
  updateDate: Date;
  date: Date;
  meetingCategories: MeetingCategoryModel[];

  static fromJson(json: any): MeetingEventIDModel {
    // console.log({ "MeetingEventIDModel:json": json });
    if (!Number.isNaN(json)) return json;
    
    const model = new MeetingEventIDModel();
    model.id = json.id;
    model.type = json.type;
    model.memberType = json.memberType;
    model.name = json.name;
    model.clientId = ClientIDModel.fromJson(json.clientId);
    model.branchId = BranchIDModel.fromJson(json.branchId);
    model.memberCategoryId = MemberCategoryIDModel.fromJson(json.memberCategoryId);
    model.meetingSpan = json.meetingSpan;
    model.startTime = json.startTime;
    model.closeTime = json.closeTime;
    model.latenessTime = json.latenessTime;
    model.isRecuring = json.isRecuring;
    model.hasBreakTime = json.hasBreakTime;
    model.hasDuty = json.hasDuty;
    model.hasOvertime = json.hasOvertime;
    model.virtualMeetingLink = json.virtualMeetingLink;
    model.virtualMeetingType = json.virtualMeetingType;
    model.meetingLocation = json.meetingLocation;
    model.expectedMonthlyAttendance = json.expectedMonthlyAttendance;
    model.activeMonthlyAttendance = json.activeMonthlyAttendance;
    model.agenda = json.agenda;
    model.agendaFile = json.agendaFile;
    model.updatedBy = json.updatedBy;
    model.updateDate = new Date(json.updateDate);
    model.date = new Date(json.date);
    model.meetingCategories = json.meetingCategories.map((item: any) => MeetingCategoryModel.fromJson(item));
    return model;
  }

  toJson(): any {
    return {
      id: this.id,
      type: this.type,
      memberType: this.memberType,
      name: this.name,
      clientId: this.clientId.toJson(),
      branchId: this.branchId.toJson(),
      memberCategoryId: this.memberCategoryId.toJson(),
      meetingSpan: this.meetingSpan,
      startTime: this.startTime,
      closeTime: this.closeTime,
      latenessTime: this.latenessTime,
      isRecuring: this.isRecuring,
      hasBreakTime: this.hasBreakTime,
      hasDuty: this.hasDuty,
      hasOvertime: this.hasOvertime,
      virtualMeetingLink: this.virtualMeetingLink,
      virtualMeetingType: this.virtualMeetingType,
      meetingLocation: this.meetingLocation,
      expectedMonthlyAttendance: this.expectedMonthlyAttendance,
      activeMonthlyAttendance: this.activeMonthlyAttendance,
      agenda: this.agenda,
      agendaFile: this.agendaFile,
      updatedBy: this.updatedBy,
      updateDate: this.updateDate.toISOString(),
      date: this.date.toISOString(),
      meetingCategories: this.meetingCategories.map((item: MeetingCategoryModel) => item.toJson()),
    };
  }

  toString(): string {
    return JSON.stringify(this.toJson(), null, 2);
  }
}

export class BranchIDModel {
  id: number;
  name: string;
  accountId: number;
  createdBy: number;
  creationDate: Date;
  updatedBy: number;
  updateDate: Date;

  static fromJson(json: any): BranchIDModel {
    const model = new BranchIDModel();
    model.id = json.id;
    model.name = json.name;
    model.accountId = json.accountId;
    model.createdBy = json.createdBy;
    model.creationDate = new Date(json.creationDate);
    model.updatedBy = json.updatedBy;
    model.updateDate = new Date(json.updateDate);
    return model;
  }

  toJson(): any {
    return {
      id: this.id,
      name: this.name,
      accountId: this.accountId,
      createdBy: this.createdBy,
      creationDate: this.creationDate.toISOString(),
      updatedBy: this.updatedBy,
      updateDate: this.updateDate.toISOString(),
    };
  }

  toString(): string {
    return JSON.stringify(this.toJson(), null, 2);
  }
}

export class ClientIDModel {
  id: number;
  name: string;
  accountType: number;
  country: string;
  stateProvince: string;
  applicantFirstname: string;
  applicantSurname: string;
  applicantGender: number;
  applicantPhone: string;
  applicantEmail: string;
  applicantDesignationRole: number;
  region: number;
  district: number;
  constituency: number;
  community: string;
  subscriptionDuration: string;
  subscriptionDate: Date;
  subscriptionFee: string;
  logo: string;
  status: number;
  archive: number;
  accountCategory: MemberCategoryIDModel;
  website: string;
  creationDate: Date;
  updatedBy: number;
  updateDate: Date;
  subscriptionInfo: SubscriptionInfoModel;
  countryInfo: CountryInfoModel[];

  static fromJson(json: any): ClientIDModel {
    console.log({"json-json--json---json": json});
    
    const model = new ClientIDModel();
    model.id = json.id;
    model.name = json.name;
    model.accountType = json.accountType;
    model.country = json.country;
    model.stateProvince = json.stateProvince;
    model.applicantFirstname = json.applicantFirstname;
    model.applicantSurname = json.applicantSurname;
    model.applicantGender = json.applicantGender;
    model.applicantPhone = json.applicantPhone;
    model.applicantEmail = json.applicantEmail;
    model.applicantDesignationRole = json.applicantDesignationRole;
    model.region = json.region;
    model.district = json.district;
    model.constituency = json.constituency;
    model.community = json.community;
    model.subscriptionDuration = json.subscriptionDuration;
    model.subscriptionDate = new Date(json.subscriptionDate);
    model.subscriptionFee = json.subscriptionFee;
    model.logo = json.logo;
    model.status = json.status;
    model.archive = json.archive;
    model.accountCategory = MemberCategoryIDModel.fromJson(json.accountCategory);
    model.website = json.website;
    model.creationDate = new Date(json.creationDate);
    model.updatedBy = json.updatedBy;
    model.updateDate = new Date(json.updateDate);
    model.subscriptionInfo = SubscriptionInfoModel.fromJson(json.subscriptionInfo);
    model.countryInfo = json.countryInfo.map((item: any) => CountryInfoModel.fromJson(item));
    return model;
  }

  toJson(): any {
    return {
      id: this.id,
      name: this.name,
      accountType: this.accountType,
      country: this.country,
      stateProvince: this.stateProvince,
      applicantFirstname: this.applicantFirstname,
      applicantSurname: this.applicantSurname,
      applicantGender: this.applicantGender,
      applicantPhone: this.applicantPhone,
      applicantEmail: this.applicantEmail,
      applicantDesignationRole: this.applicantDesignationRole,
      region: this.region,
      district: this.district,
      constituency: this.constituency,
      community: this.community,
      subscriptionDuration: this.subscriptionDuration,
      subscriptionDate: this.subscriptionDate.toISOString(),
      subscriptionFee: this.subscriptionFee,
      logo: this.logo,
      status: this.status,
      archive: this.archive,
      accountCategory: this.accountCategory.toJson(),
      website: this.website,
      creationDate: this.creationDate.toISOString(),
      updatedBy: this.updatedBy,
      updateDate: this.updateDate.toISOString(),
      subscriptionInfo: this.subscriptionInfo.toJson(),
      countryInfo: this.countryInfo.map((item: CountryInfoModel) => item.toJson()),
    };
  }

  toString(): string {
    return JSON.stringify(this.toJson(), null, 2);
  }
}

export class MemberCategoryIDModel {
  id: number;
  clientId: ClientIDModel | number;
  category: string;
  createdBy: number;
  updatedBy: number;
  updateDate: Date | null;
  date: Date | null;

  static fromJson(json: any): MemberCategoryIDModel {
    const model = new MemberCategoryIDModel();
    model.id = json.id;
    model.clientId = Number.isNaN(json.clientId) ? ClientIDModel.fromJson(json.clientId) : Number(json.clientId);
    model.category = json.category;
    model.createdBy = json.createdBy;
    model.updatedBy = json.updatedBy;
    model.updateDate = json.updateDate ? new Date(json.updateDate) : null;
    model.date = json.date ? new Date(json.date) : null;
    return model;
  }

  toJson(): any {
    return {
      id: this.id,
      //@ts-ignore
      clientId: Number.isNaN(this.clientId) ? this.clientId.toJson() : this.clientId,
      category: this.category,
      createdBy: this.createdBy,
      updatedBy: this.updatedBy,
      updateDate: this.updateDate ? this.updateDate.toISOString() : null,
      date: this.date ? this.date.toISOString() : null,
    };
  }

  toString(): string {
    return JSON.stringify(this.toJson(), null, 2);
  }
}

export class CountryInfoModel {
  id: number;
  name: string;
  short: string;
  code: string;

  static fromJson(json: any): CountryInfoModel {
    const model = new CountryInfoModel();
    model.id = json.id;
    model.name = json.name;
    model.short = json.short;
    model.code = json.code;
    return model;
  }

  toJson(): any {
    return {
      id: this.id,
      name: this.name,
      short: this.short,
      code: this.code,
    };
  }

  toString(): string {
    return JSON.stringify(this.toJson(), null, 2);
  }
}

export class SubscriptionInfoModel {
  id: number;
  client: string;
  client_id: string;
  subscription_id: string;
  subscribed_modules: SubscribedModulesModel;
  date_created: Date;

  static fromJson(json: any): SubscriptionInfoModel {
    const model = new SubscriptionInfoModel();
    model.id = json.id;
    model.client = json.client;
    model.client_id = json.client_id;
    model.subscription_id = json.subscription_id;
    model.subscribed_modules = SubscribedModulesModel.fromJson(json.subscribed_modules);
    model.date_created = new Date(json.date_created);
    return model;
  }

  toJson(): any {
    return {
      id: this.id,
      client: this.client,
      client_id: this.client_id,
      subscription_id: this.subscription_id,
      subscribed_modules: this.subscribed_modules.toJson(),
      date_created: this.date_created.toISOString(),
    };
  }

  toString(): string {
    return JSON.stringify(this.toJson(), null, 2);
  }
}

export class SubscribedModulesModel {
  "Module 1": ModuleModel;
  "Module 2": ModuleModel;

  static fromJson(json: any): SubscribedModulesModel {
    const model = new SubscribedModulesModel();
    model["Module 1"] = ModuleModel.fromJson(json["Module 1"]);
    model["Module 2"] = ModuleModel.fromJson(json["Module 2"]);
    return model;
  }

  toJson(): any {
    return {
      "Module 1": this["Module 1"].toJson(),
      "Module 2": this["Module 2"].toJson(),
    };
  }

  toString(): string {
    return JSON.stringify(this.toJson(), null, 2);
  }
}

export class ModuleModel {
  module_id: number;
  module_name: string;
  expires_on: Date;
  amount_paid: number;

  static fromJson(json: any): ModuleModel {
    const model = new ModuleModel();
    model.module_id = json.module_id;
    model.module_name = json.module_name;
    model.expires_on = new Date(json.expires_on);
    model.amount_paid = json.amount_paid;
    return model;
  }

  toJson(): any {
    return {
      module_id: this.module_id,
      module_name: this.module_name,
      expires_on: this.expires_on.toISOString(),
      amount_paid: this.amount_paid,
    };
  }

  toString(): string {
    return JSON.stringify(this.toJson(), null, 2);
  }
}

export class MeetingCategoryModel {
  id: number;
  meetingEventId: number;
  memberCategoryId: MemberCategoryIDModel;
  updatedBy: number;
  updateDate: Date;
  date: Date;

  static fromJson(json: any): MeetingCategoryModel {
    const model = new MeetingCategoryModel();
    model.id = json.id;
    model.meetingEventId = json.meetingEventId;
    model.memberCategoryId = MemberCategoryIDModel.fromJson(json.memberCategoryId);
    model.updatedBy = json.updatedBy;
    model.updateDate = new Date(json.updateDate);
    model.date = new Date(json.date);
    return model;
  }

  toJson(): any {
    return {
      id: this.id,
      meetingEventId: this.meetingEventId,
      memberCategoryId: this.memberCategoryId.toJson(),
      updatedBy: this.updatedBy,
      updateDate: this.updateDate.toISOString(),
      date: this.date.toISOString(),
    };
  }

  toString(): string {
    return JSON.stringify(this.toJson(), null, 2);
  }
}
