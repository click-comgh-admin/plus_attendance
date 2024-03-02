// To parse this data:
//
//   import { Convert, MemberCreditEarnedModel } from "./file";
//
//   const memberCreditEarnedModel = Convert.toMemberCreditEarnedModel(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

import { CreditEarnedModel, Convert as cemTypeMap } from "..";

export interface MemberCreditEarnedModel {
    memberInfo?:  MemberInfo;
    meetingInfo?: MeetingInfo;
    creditInfo?:  CreditInfo[];
}

export interface CreditInfo {
    credit?:         CreditEarnedModel;
    attendanceInfo?: any[];
    earned?:         number;
}

export interface BranchI {
    id?:           number;
    name?:         BranchIDName;
    accountID?:    number;
    createdBy?:    number;
    creationDate?: Date;
    updatedBy?:    number;
    updateDate?:   Date;
}

export type BranchIDName = "Main Branch" | "Hearts Today";

export interface ClientID {
    id?:                       number;
    name?:                     ClientEnum;
    accountType?:              number;
    country?:                  CountryOfResidence;
    stateProvince?:            ClientIDStateProvince;
    applicantFirstname?:       ApplicantFirstname;
    applicantSurname?:         ApplicantSurname;
    applicantGender?:          number;
    applicantPhone?:           string;
    applicantEmail?:           Email;
    applicantDesignationRole?: number;
    region?:                   number;
    district?:                 number;
    constituency?:             number;
    community?:                ClientIDCommunity;
    subscriptionDuration?:     string;
    subscriptionDate?:         Date;
    subscriptionFee?:          string;
    logo?:                     string;
    status?:                   number;
    archive?:                  number;
    accountCategory?:          CategoryInfo;
    website?:                  string;
    creationDate?:             Date;
    updatedBy?:                number;
    updateDate?:               Date;
    subscriptionInfo?:         SubscriptionInfo;
    countryInfo?:              CountryInfo[];
}

export interface CategoryInfo {
    id?:         number;
    clientID?:   number;
    category?:   Category;
    createdBy?:  number;
    updatedBy?:  number;
    updateDate?: Date | null;
    date?:       Date | null;
}

export type Category = "Non-Profit" | "Membership" | "Connections";

export type Email = "a@b.c" | "1@2.3" | "12@2.3";

export type ApplicantFirstname = "Test";

export type ApplicantSurname = "Group";

export type ClientIDCommunity = "Com";

export type CountryOfResidence = "Ghana";

export interface CountryInfo {
    id?:    number;
    name?:  CountryOfResidence;
    short?: Short;
    code?:  string;
}

export type Short = "GH";

export type ClientEnum = "Original Group";

export type ClientIDStateProvince = "George County";

export interface SubscriptionInfo {
    id?:                   number;
    client?:               ClientEnum;
    clientID?:             string;
    subscriptionID?:       string;
    subscribedModules?:    SubscribedModules;
    dateCreated?:          Date;
    membershipSize?:       MembershipSize;
    description?:          Description;
    duration?:             number;
    amountPaid?:           number;
    renewingDays?:         number;
    remainingDays?:        number;
    expiredDays?:          number;
    subscriptionFeeGhs?:   number;
    paidBy?:               PaidBy;
    subscriptionFeeUsd?:   number;
    expiresOn?:            Date;
    confirmed?:            boolean;
    expired?:              boolean;
    annualMaintenanceFee?: number;
    invoiceCopy?:          InvoiceCopy;
    nonExpiry?:            boolean;
    special?:              boolean;
    usercode?:             Usercode;
    newExpiresOn?:         null;
}

export type Description = "Subscription";

export type InvoiceCopy = "ASL0003";

export type MembershipSize = "51-100";

export type PaidBy = "Admin";

export interface SubscribedModules {
    databaseManager?:   Manager;
    attendanceManager?: Manager;
    cashManager?:       Manager;
}

export interface Manager {
    moduleID?:   number;
    moduleName?: ModuleName;
    expiresOn?:  Date | ExpiresOnEnum;
    amountPaid?: number;
}

export type ExpiresOnEnum = "27-03-2028" | "02-04-2027";

export type ModuleName = "Attendance Manager" | "Cash Manager" | "Database Manager";

export type Usercode = "none";

export interface Duration {
    id?:   number;
    name?: DurationName;
}

export type DurationName = "Hour" | "+" | "Present";

export interface MemberID {
    id?:         number;
    memberID?:   number;
    memberInfo?: MemberInfo;
}

export interface MemberInfo {
    id?:                    number;
    clientID?:              number;
    firstname?:             Firstname;
    middlename?:            Middlename;
    surname?:               Surname;
    gender?:                number;
    profilePicture?:        string;
    phone?:                 string;
    email?:                 Email;
    dateOfBirth?:           Date;
    religion?:              number;
    nationality?:           Nationality;
    countryOfResidence?:    CountryOfResidence;
    stateProvince?:         MemberInfoStateProvince;
    region?:                number;
    district?:              number;
    constituency?:          number;
    electoralArea?:         number;
    community?:             MemberInfoCommunity;
    hometown?:              Hometown;
    houseNoDigitalAddress?: HouseNoDigitalAddress;
    digitalAddress?:        DigitalAddress;
    level?:                 number;
    status?:                number;
    accountType?:           number;
    memberType?:            number;
    date?:                  Date;
    lastLogin?:             Date;
    referenceID?:           string;
    branchID?:              number;
    editable?:              boolean;
    profileResume?:         null;
    profileIdentification?: null;
    archived?:              boolean;
    updatedBy?:             number;
    updateDate?:            Date;
    updatedByInfo?:         UpdatedByInfo | null;
    branchInfo?:            BranchI;
    categoryInfo?:          CategoryInfo;
}

export type MemberInfoCommunity = "Home com" | "Mystic Falls";

export type DigitalAddress = "Digital Address" | "French Quarters, New Orleans" | "New Orleans";

export type Firstname = "Matthew - 1" | "Hope" | "Sarah";

export type Hometown = "There" | "Virginia falls" | "Virginia";

export type HouseNoDigitalAddress = "House Address" | "jkjkjkj";

export type Middlename = "Grantham - 2" | "";

export type Nationality = "Albania" | "United States";

export type MemberInfoStateProvince = "Sisily" | "";

export type Surname = "Crawley - 3" | "Test-user" | "Winchester";

export interface UpdatedByInfo {
    id?:             number;
    firstname?:      Firstname;
    surname?:        Surname;
    gender?:         number;
    profilePicture?: string;
    dateOfBirth?:    Date;
    phone?:          string;
    email?:          Email;
    role?:           number;
    accountID?:      number;
    branchID?:       number;
    level?:          number;
    status?:         number;
    lastUpdatedBy?:  number;
    date?:           Date;
    lastLogin?:      Date;
}

export interface MeetingInfo {
    id?:                        number;
    type?:                      number;
    memberType?:                number;
    name?:                      string;
    clientID?:                  ClientID;
    branchID?:                  BranchI;
    memberCategoryID?:          CategoryInfo | null;
    meetingSpan?:               number;
    startTime?:                 string;
    closeTime?:                 string;
    latenessTime?:              string;
    isRecuring?:                boolean;
    hasBreakTime?:              boolean;
    hasDuty?:                   boolean;
    hasOvertime?:               boolean;
    hasMultipleTimes?:          boolean;
    virtualMeetingLink?:        string;
    virtualMeetingType?:        number;
    meetingLocation?:           number;
    expectedMonthlyAttendance?: number;
    activeMonthlyAttendance?:   number;
    agenda?:                    string;
    agendaFile?:                string;
    updatedBy?:                 number;
    updateDate?:                Date;
    date?:                      Date;
    meetingCategories?:         MeetingCategory[];
}

export interface MeetingCategory {
    id?:               number;
    meetingEventID?:   number;
    memberCategoryID?: CategoryInfo;
    updatedBy?:        number;
    updateDate?:       Date;
    date?:             Date;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toMemberCreditEarnedModel(json: string): MemberCreditEarnedModel {
        return cast(JSON.parse(json), r("MemberCreditEarnedModel"));
    }

    public static memberCreditEarnedModelToJson(value: MemberCreditEarnedModel): string {
        return JSON.stringify(uncast(value, r("MemberCreditEarnedModel")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = '') {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    console.error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object") {
        return "";
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        
    }
    if (typ === false) return;
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    // @ts-ignore
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

export const typeMap: any = {
    "MemberCreditEarnedModel": o([
        { json: "memberInfo", js: "memberInfo", typ: u(null, r("MemberInfo")) },
        { json: "meetingInfo", js: "meetingInfo", typ: u(null, r("MeetingInfo")) },
        { json: "creditInfo", js: "creditInfo", typ: u(null, a(r("CreditInfo"))) },
    ], false),
    "CreditInfo": o([
        { json: "credit", js: "credit", typ: u(null, r("CreditEarnedModel")) },
        { json: "attendanceInfo", js: "attendanceInfo", typ: u(null, a("any")) },
        { json: "earned", js: "earned", typ: u(null, 0) },
    ], false),
    "CreditEarnedModel": cemTypeMap['CreditEarnedModel'],
    "BranchI": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "name", js: "name", typ: u(null, r("BranchIDName")) },
        { json: "accountId", js: "accountID", typ: u(null, 0) },
        { json: "createdBy", js: "createdBy", typ: u(null, 0) },
        { json: "creationDate", js: "creationDate", typ: u(null, Date) },
        { json: "updatedBy", js: "updatedBy", typ: u(null, 0) },
        { json: "updateDate", js: "updateDate", typ: u(null, Date) },
    ], false),
    "ClientID": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "name", js: "name", typ: u(null, r("ClientEnum")) },
        { json: "accountType", js: "accountType", typ: u(null, 0) },
        { json: "country", js: "country", typ: u(null, r("CountryOfResidence")) },
        { json: "stateProvince", js: "stateProvince", typ: u(null, r("ClientIDStateProvince")) },
        { json: "applicantFirstname", js: "applicantFirstname", typ: u(null, r("ApplicantFirstname")) },
        { json: "applicantSurname", js: "applicantSurname", typ: u(null, r("ApplicantSurname")) },
        { json: "applicantGender", js: "applicantGender", typ: u(null, 0) },
        { json: "applicantPhone", js: "applicantPhone", typ: u(null, "") },
        { json: "applicantEmail", js: "applicantEmail", typ: u(null, r("Email")) },
        { json: "applicantDesignationRole", js: "applicantDesignationRole", typ: u(null, 0) },
        { json: "region", js: "region", typ: u(null, 0) },
        { json: "district", js: "district", typ: u(null, 0) },
        { json: "constituency", js: "constituency", typ: u(null, 0) },
        { json: "community", js: "community", typ: u(null, r("ClientIDCommunity")) },
        { json: "subscriptionDuration", js: "subscriptionDuration", typ: u(null, "") },
        { json: "subscriptionDate", js: "subscriptionDate", typ: u(null, Date) },
        { json: "subscriptionFee", js: "subscriptionFee", typ: u(null, "") },
        { json: "logo", js: "logo", typ: u(null, "") },
        { json: "status", js: "status", typ: u(null, 0) },
        { json: "archive", js: "archive", typ: u(null, 0) },
        { json: "accountCategory", js: "accountCategory", typ: u(null, r("CategoryInfo")) },
        { json: "website", js: "website", typ: u(null, "") },
        { json: "creationDate", js: "creationDate", typ: u(null, Date) },
        { json: "updatedBy", js: "updatedBy", typ: u(null, 0) },
        { json: "updateDate", js: "updateDate", typ: u(null, Date) },
        { json: "subscriptionInfo", js: "subscriptionInfo", typ: u(null, r("SubscriptionInfo")) },
        { json: "countryInfo", js: "countryInfo", typ: u(null, a(r("CountryInfo"))) },
    ], false),
    "CategoryInfo": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "clientId", js: "clientID", typ: u(null, 0) },
        { json: "category", js: "category", typ: u(null, r("Category")) },
        { json: "createdBy", js: "createdBy", typ: u(null, 0) },
        { json: "updatedBy", js: "updatedBy", typ: u(null, 0) },
        { json: "updateDate", js: "updateDate", typ: u(null, u(Date, null)) },
        { json: "date", js: "date", typ: u(null, u(Date, null)) },
    ], false),
    "CountryInfo": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "name", js: "name", typ: u(null, r("CountryOfResidence")) },
        { json: "short", js: "short", typ: u(null, r("Short")) },
        { json: "code", js: "code", typ: u(null, "") },
    ], false),
    "SubscriptionInfo": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "client", js: "client", typ: u(null, r("ClientEnum")) },
        { json: "client_id", js: "clientID", typ: u(null, "") },
        { json: "subscription_id", js: "subscriptionID", typ: u(null, "") },
        { json: "subscribed_modules", js: "subscribedModules", typ: u(null, r("SubscribedModules")) },
        { json: "date_created", js: "dateCreated", typ: u(null, Date) },
        { json: "membership_size", js: "membershipSize", typ: u(null, r("MembershipSize")) },
        { json: "description", js: "description", typ: u(null, r("Description")) },
        { json: "duration", js: "duration", typ: u(null, 0) },
        { json: "amount_paid", js: "amountPaid", typ: u(null, 0) },
        { json: "renewing_days", js: "renewingDays", typ: u(null, 0) },
        { json: "remaining_days", js: "remainingDays", typ: u(null, 0) },
        { json: "expired_days", js: "expiredDays", typ: u(null, 0) },
        { json: "subscription_fee_ghs", js: "subscriptionFeeGhs", typ: u(null, 3.14) },
        { json: "paid_by", js: "paidBy", typ: u(null, r("PaidBy")) },
        { json: "subscription_fee_usd", js: "subscriptionFeeUsd", typ: u(null, 3.14) },
        { json: "expires_on", js: "expiresOn", typ: u(null, Date) },
        { json: "confirmed", js: "confirmed", typ: u(null, true) },
        { json: "expired", js: "expired", typ: u(null, true) },
        { json: "annual_maintenance_fee", js: "annualMaintenanceFee", typ: u(null, 3.14) },
        { json: "invoice_copy", js: "invoiceCopy", typ: u(null, r("InvoiceCopy")) },
        { json: "non_expiry", js: "nonExpiry", typ: u(null, true) },
        { json: "special", js: "special", typ: u(null, true) },
        { json: "usercode", js: "usercode", typ: u(null, r("Usercode")) },
        { json: "new_expires_on", js: "newExpiresOn", typ: u(null, null) },
    ], false),
    "SubscribedModules": o([
        { json: "Database Manager", js: "databaseManager", typ: u(null, r("Manager")) },
        { json: "Attendance Manager", js: "attendanceManager", typ: u(null, r("Manager")) },
        { json: "Cash Manager", js: "cashManager", typ: u(null, r("Manager")) },
    ], false),
    "Manager": o([
        { json: "module_id", js: "moduleID", typ: u(null, 0) },
        { json: "module_name", js: "moduleName", typ: u(null, r("ModuleName")) },
        { json: "expires_on", js: "expiresOn", typ: u(null, u(Date, r("ExpiresOnEnum"))) },
        { json: "amount_paid", js: "amountPaid", typ: u(null, 3.14) },
    ], false),
    "Duration": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "name", js: "name", typ: u(null, r("DurationName")) },
    ], false),
    "MemberID": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "memberId", js: "memberID", typ: u(null, 0) },
        { json: "memberInfo", js: "memberInfo", typ: u(null, r("MemberInfo")) },
    ], false),
    "MemberInfo": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "clientId", js: "clientID", typ: u(null, 0) },
        { json: "firstname", js: "firstname", typ: u(null, r("Firstname")) },
        { json: "middlename", js: "middlename", typ: u(null, r("Middlename")) },
        { json: "surname", js: "surname", typ: u(null, r("Surname")) },
        { json: "gender", js: "gender", typ: u(null, 0) },
        { json: "profilePicture", js: "profilePicture", typ: u(null, "") },
        { json: "phone", js: "phone", typ: u(null, "") },
        { json: "email", js: "email", typ: u(null, r("Email")) },
        { json: "dateOfBirth", js: "dateOfBirth", typ: u(null, Date) },
        { json: "religion", js: "religion", typ: u(null, 0) },
        { json: "nationality", js: "nationality", typ: u(null, r("Nationality")) },
        { json: "countryOfResidence", js: "countryOfResidence", typ: u(null, r("CountryOfResidence")) },
        { json: "stateProvince", js: "stateProvince", typ: u(null, r("MemberInfoStateProvince")) },
        { json: "region", js: "region", typ: u(null, 0) },
        { json: "district", js: "district", typ: u(null, 0) },
        { json: "constituency", js: "constituency", typ: u(null, 0) },
        { json: "electoralArea", js: "electoralArea", typ: u(null, 0) },
        { json: "community", js: "community", typ: u(null, r("MemberInfoCommunity")) },
        { json: "hometown", js: "hometown", typ: u(null, r("Hometown")) },
        { json: "houseNoDigitalAddress", js: "houseNoDigitalAddress", typ: u(null, r("HouseNoDigitalAddress")) },
        { json: "digitalAddress", js: "digitalAddress", typ: u(null, r("DigitalAddress")) },
        { json: "level", js: "level", typ: u(null, 0) },
        { json: "status", js: "status", typ: u(null, 0) },
        { json: "accountType", js: "accountType", typ: u(null, 0) },
        { json: "memberType", js: "memberType", typ: u(null, 0) },
        { json: "date", js: "date", typ: u(null, Date) },
        { json: "last_login", js: "lastLogin", typ: u(null, Date) },
        { json: "referenceId", js: "referenceID", typ: u(null, "") },
        { json: "branchId", js: "branchID", typ: u(null, 0) },
        { json: "editable", js: "editable", typ: u(null, true) },
        { json: "profileResume", js: "profileResume", typ: u(null, null) },
        { json: "profileIdentification", js: "profileIdentification", typ: u(null, null) },
        { json: "archived", js: "archived", typ: u(null, true) },
        { json: "updatedBy", js: "updatedBy", typ: u(null, 0) },
        { json: "updateDate", js: "updateDate", typ: u(null, Date) },
        { json: "updatedByInfo", js: "updatedByInfo", typ: u(null, u(r("UpdatedByInfo"), null)) },
        { json: "branchInfo", js: "branchInfo", typ: u(null, r("BranchI")) },
        { json: "categoryInfo", js: "categoryInfo", typ: u(null, r("CategoryInfo")) },
    ], false),
    "UpdatedByInfo": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "firstname", js: "firstname", typ: u(null, r("Firstname")) },
        { json: "surname", js: "surname", typ: u(null, r("Surname")) },
        { json: "gender", js: "gender", typ: u(null, 0) },
        { json: "profilePicture", js: "profilePicture", typ: u(null, "") },
        { json: "dateOfBirth", js: "dateOfBirth", typ: u(null, Date) },
        { json: "phone", js: "phone", typ: u(null, "") },
        { json: "email", js: "email", typ: u(null, r("Email")) },
        { json: "role", js: "role", typ: u(null, 0) },
        { json: "accountId", js: "accountID", typ: u(null, 0) },
        { json: "branchId", js: "branchID", typ: u(null, 0) },
        { json: "level", js: "level", typ: u(null, 0) },
        { json: "status", js: "status", typ: u(null, 0) },
        { json: "lastUpdatedBy", js: "lastUpdatedBy", typ: u(null, 0) },
        { json: "date", js: "date", typ: u(null, Date) },
        { json: "last_login", js: "lastLogin", typ: u(null, Date) },
    ], false),
    "MeetingInfo": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "type", js: "type", typ: u(null, 0) },
        { json: "memberType", js: "memberType", typ: u(null, 0) },
        { json: "name", js: "name", typ: u(null, "") },
        { json: "clientId", js: "clientID", typ: u(null, r("ClientID")) },
        { json: "branchId", js: "branchID", typ: u(null, r("BranchI")) },
        { json: "memberCategoryId", js: "memberCategoryID", typ: u(null, u(r("CategoryInfo"), null)) },
        { json: "meetingSpan", js: "meetingSpan", typ: u(null, 0) },
        { json: "startTime", js: "startTime", typ: u(null, "") },
        { json: "closeTime", js: "closeTime", typ: u(null, "") },
        { json: "latenessTime", js: "latenessTime", typ: u(null, "") },
        { json: "isRecuring", js: "isRecuring", typ: u(null, true) },
        { json: "hasBreakTime", js: "hasBreakTime", typ: u(null, true) },
        { json: "hasDuty", js: "hasDuty", typ: u(null, true) },
        { json: "hasOvertime", js: "hasOvertime", typ: u(null, true) },
        { json: "hasMultipleTimes", js: "hasMultipleTimes", typ: u(null, true) },
        { json: "virtualMeetingLink", js: "virtualMeetingLink", typ: u(null, "") },
        { json: "virtualMeetingType", js: "virtualMeetingType", typ: u(null, 0) },
        { json: "meetingLocation", js: "meetingLocation", typ: u(null, 0) },
        { json: "expectedMonthlyAttendance", js: "expectedMonthlyAttendance", typ: u(null, 0) },
        { json: "activeMonthlyAttendance", js: "activeMonthlyAttendance", typ: u(null, 0) },
        { json: "agenda", js: "agenda", typ: u(null, "") },
        { json: "agendaFile", js: "agendaFile", typ: u(null, "") },
        { json: "updatedBy", js: "updatedBy", typ: u(null, 0) },
        { json: "updateDate", js: "updateDate", typ: u(null, Date) },
        { json: "date", js: "date", typ: u(null, Date) },
        { json: "meetingCategories", js: "meetingCategories", typ: u(null, a(r("MeetingCategory"))) },
    ], false),
    "MeetingCategory": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "meetingEventId", js: "meetingEventID", typ: u(null, 0) },
        { json: "memberCategoryId", js: "memberCategoryID", typ: u(null, r("CategoryInfo")) },
        { json: "updatedBy", js: "updatedBy", typ: u(null, 0) },
        { json: "updateDate", js: "updateDate", typ: u(null, Date) },
        { json: "date", js: "date", typ: u(null, Date) },
    ], false),
    "BranchIDName": [
        "Hearts Today",
        "Main Branch",
    ],
    "Category": [
        "Connections",
        "Membership",
        "Non-Profit",
    ],
    "Email": [
        "a@b.c",
        "12@2.3",
        "1@2.3",
    ],
    "ApplicantFirstname": [
        "Test",
    ],
    "ApplicantSurname": [
        "Group",
    ],
    "ClientIDCommunity": [
        "Com",
    ],
    "CountryOfResidence": [
        "Ghana",
    ],
    "Short": [
        "GH",
    ],
    "ClientEnum": [
        "Original Group",
    ],
    "ClientIDStateProvince": [
        "George County",
    ],
    "Description": [
        "Subscription",
    ],
    "InvoiceCopy": [
        "ASL0003",
    ],
    "MembershipSize": [
        "51-100",
    ],
    "PaidBy": [
        "Admin",
    ],
    "ExpiresOnEnum": [
        "02-04-2027",
        "27-03-2028",
    ],
    "ModuleName": [
        "Attendance Manager",
        "Cash Manager",
        "Database Manager",
    ],
    "Usercode": [
        "none",
    ],
    "DurationName": [
        "+",
        "Hour",
        "Present",
    ],
    "MemberInfoCommunity": [
        "Home com",
        "Mystic Falls",
    ],
    "DigitalAddress": [
        "Digital Address",
        "French Quarters, New Orleans",
        "New Orleans",
    ],
    "Firstname": [
        "Hope",
        "Matthew - 1",
        "Sarah",
    ],
    "Hometown": [
        "There",
        "Virginia",
        "Virginia falls",
    ],
    "HouseNoDigitalAddress": [
        "House Address",
        "jkjkjkj",
    ],
    "Middlename": [
        "",
        "Grantham - 2",
    ],
    "Nationality": [
        "Albania",
        "United States",
    ],
    "MemberInfoStateProvince": [
        "",
        "Sisily",
    ],
    "Surname": [
        "Crawley - 3",
        "Test-user",
        "Winchester",
    ],
};
