export interface MeetingEventCategoryModel {
    id:               number;
    meetingEventId:   MeetingEventID;
    memberCategoryId: MemberCategoryID;
    updatedBy:        number;
    updateDate:       Date;
    date:             Date;
}

export interface MeetingEventID {
    id:                        number;
    type:                      number;
    memberType:                number;
    name:                      string;
    clientId:                  ClientID;
    branchId:                  BranchID;
    memberCategoryId:          MemberCategoryID;
    meetingSpan:               number;
    startTime:                 string;
    closeTime:                 string;
    latenessTime:              null;
    isRecuring:                boolean;
    hasBreakTime:              boolean;
    hasDuty:                   boolean;
    hasOvertime:               boolean;
    virtualMeetingLink:        string;
    virtualMeetingType:        number;
    meetingLocation:           number;
    expectedMonthlyAttendance: number;
    activeMonthlyAttendance:   number;
    agenda:                    string;
    agendaFile:                string;
    updatedBy:                 number;
    updateDate:                Date;
    date:                      Date;
    meetingCategories:         MeetingCategory[];
}

export interface BranchID {
    id:           number;
    name:         string;
    accountId:    number;
    createdBy:    number;
    creationDate: Date;
    updatedBy:    number;
    updateDate:   Date;
}

export interface ClientID {
    id:                       number;
    name:                     string;
    accountType:              number;
    country:                  string;
    stateProvince:            string;
    applicantFirstname:       string;
    applicantSurname:         string;
    applicantGender:          number;
    applicantPhone:           string;
    applicantEmail:           string;
    applicantDesignationRole: number;
    region:                   number;
    district:                 number;
    constituency:             number;
    community:                string;
    subscriptionDuration:     string;
    subscriptionDate:         Date;
    subscriptionFee:          string;
    logo:                     string;
    status:                   number;
    archive:                  number;
    accountCategory:          MemberCategoryID;
    website:                  string;
    creationDate:             Date;
    updatedBy:                number;
    updateDate:               Date;
    subscriptionInfo:         SubscriptionInfo;
    countryInfo:              CountryInfo[];
}

export interface MemberCategoryID {
    id:         number;
    clientId:   number;
    category:   string;
    createdBy:  number;
    updatedBy:  number;
    updateDate: Date | null;
    date:       Date | null;
}

export interface CountryInfo {
    id:    number;
    name:  string;
    short: string;
    code:  string;
}

export interface SubscriptionInfo {
    id:                 number;
    client:             string;
    client_id:          string;
    subscription_id:    string;
    subscribed_modules: SubscribedModules;
    date_created:       Date;
}

export interface SubscribedModules {
    "Module 1": Module;
    "Module 2": Module;
}

export interface Module {
    module_id:   number;
    module_name: string;
    expires_on:  Date;
    amount_paid: number;
}

export interface MeetingCategory {
    id:               number;
    meetingEventId:   number;
    memberCategoryId: MemberCategoryID;
    updatedBy:        number;
    updateDate:       Date;
    date:             Date;
}
