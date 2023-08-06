// Export class for the "accountCategory" field
export class AccountCategory {
  id: number;
  clientId: number;
  category: string;
  createdBy: number;
  updatedBy: number;
  updateDate: string | null;
  date: string | null;

  // toJson method to convert the object to a JSON string
  toJson(): string {
    return JSON.stringify(this);
  }

  // fromJson method to create an object from a JSON string
  static fromJson(json: string): AccountCategory {
    return JSON.parse(json);
  }

  // toString method to return a string representation of the object
  toString(): string {
    return this.toJson();
  }
}

// Export class for the "subscribed_modules" field
export class SubscribedModule {
  module_id: number;
  module_name: string;
  expires_on: string;
  amount_paid: number;

  // toJson method to convert the object to a JSON string
  toJson(): string {
    return JSON.stringify(this);
  }

  // fromJson method to create an object from a JSON string
  static fromJson(json: string): SubscribedModule {
    return JSON.parse(json);
  }

  // toString method to return a string representation of the object
  toString(): string {
    return this.toJson();
  }
}

// Export class for the "subscriptionInfo" field
export class SubscriptionInfo {
  id: number;
  client: string;
  client_id: string;
  subscription_id: string;
  subscribed_modules: {
    [moduleName: string]: SubscribedModule;
  };
  date_created: string;

  // toJson method to convert the object to a JSON string
  toJson(): string {
    return JSON.stringify(this);
  }

  // fromJson method to create an object from a JSON string
  static fromJson(json: string): SubscriptionInfo {
    return JSON.parse(json);
  }

  // toString method to return a string representation of the object
  toString(): string {
    return this.toJson();
  }
}

// Export class for the "countryInfo" field
export class CountryInfo {
  id: number;
  name: string;
  short: string;
  code: string;

  // toJson method to convert the object to a JSON string
  toJson(): string {
    return JSON.stringify(this);
  }

  // fromJson method to create an object from a JSON string
  static fromJson(json: string): CountryInfo {
    return JSON.parse(json);
  }

  // toString method to return a string representation of the object
  toString(): string {
    return this.toJson();
  }
}

// Export class for the "clientId" field
export class ClientId {
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
  subscriptionDate: string;
  subscriptionFee: string;
  logo: string;
  status: number;
  archive: number;
  accountCategory: AccountCategory;
  website: string;
  creationDate: string;
  updatedBy: number;
  updateDate: string;
  subscriptionInfo: SubscriptionInfo;
  countryInfo: CountryInfo[];

  // toJson method to convert the object to a JSON string
  toJson(): string {
    return JSON.stringify(this);
  }

  // fromJson method to create an object from a JSON string
  static fromJson(json: string): ClientId {
    return JSON.parse(json);
  }

  // toString method to return a string representation of the object
  toString(): string {
    return this.toJson();
  }
}

// Export class for the "branchId" field
export class BranchId {
  id: number;
  name: string;
  accountId: number;
  createdBy: number;
  creationDate: string;
  updatedBy: number;
  updateDate: string;

  // toJson method to convert the object to a JSON string
  toJson(): string {
    return JSON.stringify(this);
  }

  // fromJson method to create an object from a JSON string
  static fromJson(json: string): BranchId {
    return JSON.parse(json);
  }

  // toString method to return a string representation of the object
  toString(): string {
    return this.toJson();
  }
}

// Export class for the "memberCategoryId" field
export class MemberCategoryId {
  id: number;
  clientId: number;
  category: string;
  createdBy: number;
  updatedBy: number;
  updateDate: string;
  date: string;

  // toJson method to convert the object to a JSON string
  toJson(): string {
    return JSON.stringify(this);
  }

  // fromJson method to create an object from a JSON string
  static fromJson(json: string): MemberCategoryId {
    return JSON.parse(json);
  }

  // toString method to return a string representation of the object
  toString(): string {
    return this.toJson();
  }
}

// Export class for the "meetingCategories" field
export class MeetingCategory {
  id: number;
  meetingEventId: number;
  memberCategoryId: MemberCategoryId | null;
  updatedBy: number;
  updateDate: string;
  date: string;

  // toJson method to convert the object to a JSON string
  toJson(): string {
    return JSON.stringify(this);
  }

  // fromJson method to create an object from a JSON string
  static fromJson(json: string): MeetingCategory {
    return JSON.parse(json);
  }

  // toString method to return a string representation of the object
  toString(): string {
    return this.toJson();
  }
}

// Export class for the "dayId" field
export class DayId {
  id: number;
  date: string;

  // toJson method to convert the object to a JSON string
  toJson(): string {
    return JSON.stringify(this);
  }

  // fromJson method to create an object from a JSON string
  static fromJson(json: string): DayId {
    return JSON.parse(json);
  }

  // toString method to return a string representation of the object
  toString(): string {
    return this.toJson();
  }
}

// Export class for the "statusId" field
export class StatusId {
  id: number;
  status: string;

  // toJson method to convert the object to a JSON string
  toJson(): string {
    return JSON.stringify(this);
  }

  // fromJson method to create an object from a JSON string
  static fromJson(json: string): StatusId {
    return JSON.parse(json);
  }

  // toString method to return a string representation of the object
  toString(): string {
    return this.toJson();
  }
}

// Export class for the "memberId" field
export class MemberId {
  id: number;
  meetingEventId: number;
  memberId: number;
  statusId: StatusId;
  meetingCategoryId: any;
  meetingGroupId: any;
  meetingSubgroupId: any;
  updatedBy: number;
  updateDate: string;
  date: string;

  // toJson method to convert the object to a JSON string
  toJson(): string {
    return JSON.stringify(this);
  }

  // fromJson method to create an object from a JSON string
  static fromJson(json: string): MemberId {
    return JSON.parse(json);
  }

  // toString method to return a string representation of the object
  toString(): string {
    return this.toJson();
  }
}

// Export class for the "branchInfo" field
export class BranchInfo {
  id: number;
  name: string;
  accountId: number;
  createdBy: number;
  creationDate: string;
  updatedBy: number;
  updateDate: string;

  // toJson method to convert the object to a JSON string
  toJson(): string {
    return JSON.stringify(this);
  }

  // fromJson method to create an object from a JSON string
  static fromJson(json: string): BranchInfo {
    return JSON.parse(json);
  }

  // toString method to return a string representation of the object
  toString(): string {
    return this.toJson();
  }
}

// Export class for the "categoryInfo" field
export class CategoryInfo {
  id: number;
  clientId: number;
  category: string;
  createdBy: number;
  updatedBy: number;
  updateDate: string;
  date: string;

  // toJson method to convert the object to a JSON string
  toJson(): string {
    return JSON.stringify(this);
  }

  // fromJson method to create an object from a JSON string
  static fromJson(json: string): CategoryInfo {
    return JSON.parse(json);
  }

  // toString method to return a string representation of the object
  toString(): string {
    return this.toJson();
  }
}

// Export class for the "memberInfo" field
export class MemberInfo {
  id: number;
  clientId: number;
  firstname: string;
  middlename: string;
  surname: string;
  gender: number;
  profilePicture: string;
  phone: string;
  email: string;
  dateOfBirth: string;
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
  date: string;
  last_login: string;
  referenceId: string;
  branchId: number;
  editable: boolean;
  profileResume: any;
  profileIdentification: any;
  archived: boolean;
  updatedBy: number;
  updateDate: string;
  updatedByInfo: any;
  branchInfo: BranchInfo;
  categoryInfo: CategoryInfo;

  // toJson method to convert the object to a JSON string
  toJson(): string {
    return JSON.stringify(this);
  }

  // fromJson method to create an object from a JSON string
  static fromJson(json: string): MemberInfo {
    return JSON.parse(json);
  }

  // toString method to return a string representation of the object
  toString(): string {
    return this.toJson();
  }
}
