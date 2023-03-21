// To parse this data:
//
//   import { Convert } from "./file";
//
//   const meetingAttendanceHistoryModel = Convert.toMeetingAttendanceHistoryModel(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface MeetingAttendanceHistoryModel {
    history?:         MeetingAttendanceHistoryModelHistory;
    status?:          Status;
    onTime?:          string;
    lateness?:        string;
    overtime?:        string;
    undertime?:       string;
    breakOverstay?:   string;
    productiveHours?: string;
    totalAttendance?: string;
}

export interface MeetingAttendanceHistoryModelHistory {
    member?:   Member;
    meetings?: MeetingElement[];
}

export interface MeetingElement {
    meeting?:         MeetingMeeting;
    history?:         HistoryElement[];
    status?:          Status;
    onTime?:          string;
    lateness?:        string;
    overtime?:        string;
    undertime?:       string;
    breakOverstay?:   string;
    productiveHours?: string;
    totalAttendance?: string;
}

export interface HistoryElement {
    id?:                 number;
    meetingEventID?:     number;
    memberID?:           number;
    accountType?:        number;
    inOrOut?:            boolean;
    justification?:      null | string;
    inTime?:             Date | null;
    outTime?:            Date | null;
    startBreak?:         Date | null;
    endBreak?:           Date | null;
    clockedBy?:          number;
    clockedByInfo?:      EdByInfo | null;
    clockingMethod?:     number;
    onlineMeeting?:      boolean;
    validate?:           Status;
    validationDate?:     Date | null;
    validatedBy?:        number;
    validatedByInfo?:    EdByInfo | null;
    date?:               Date;
    clockingMethodName?: string;
}

export interface EdByInfo {
    id?:             number;
    firstname?:      string;
    surname?:        string;
    gender?:         number;
    profilePicture?: string;
    dateOfBirth?:    Date;
    phone?:          string;
    email?:          string;
    role?:           number;
    accountID?:      number;
    branchID?:       number;
    level?:          number;
    status?:         number;
    lastUpdatedBy?:  number;
    date?:           Date;
    lastLogin?:      Date;
}

export interface Status {
    id?:   number;
    name?: string;
}

export interface MeetingMeeting {
    id?:                        number;
    type?:                      number;
    memberType?:                number;
    name?:                      string;
    clientID?:                  number;
    branchID?:                  number;
    memberCategoryID?:          number;
    meetingSpan?:               number;
    startTime?:                 string;
    closeTime?:                 string;
    latenessTime?:              null | string;
    isRecuring?:                boolean;
    hasBreakTime?:              boolean;
    hasDuty?:                   boolean;
    hasOvertime?:               boolean;
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
}

export interface Member {
    id?:                    number;
    clientID?:              number;
    firstname?:             string;
    middlename?:            string;
    surname?:               string;
    gender?:                number;
    profilePicture?:        string;
    phone?:                 string;
    email?:                 string;
    dateOfBirth?:           Date;
    religion?:              number;
    nationality?:           string;
    countryOfResidence?:    string;
    stateProvince?:         string;
    region?:                number;
    district?:              number;
    constituency?:          number;
    electoralArea?:         number;
    community?:             string;
    hometown?:              string;
    houseNoDigitalAddress?: string;
    digitalAddress?:        string;
    level?:                 number;
    status?:                number;
    accountType?:           number;
    memberType?:            number;
    date?:                  Date;
    lastLogin?:             Date;
    referenceID?:           string;
    branchID?:              number;
    editable?:              boolean;
    profileResume?:         string;
    profileIdentification?: null | string;
    archived?:              boolean;
    updatedBy?:             number;
    updateDate?:            Date;
    updatedByInfo?:         EdByInfo;
    branchInfo?:            BranchInfo;
    categoryInfo?:          CategoryInfo;
    countryInfo?:           CountryInfo[];
    regionInfo?:            RegionI;
    districtInfo?:          ConstituencyInfo;
    identification?:        string;
    organizationName?:      string;
    contactPersonName?:     string;
    organizationType?:      CategoryInfo;
    businessRegistered?:    boolean;
    organizationPhone?:     string;
    organizationEmail?:     string;
    contactPersonGender?:   number;
    contactPersonPhoto?:    string;
    dateOfIncorporation?:   Date;
    logo?:                  string;
    contactPersonPhone?:    string;
    contactPersonEmail?:    string;
    countryOfBusiness?:     string;
    constituencyInfo?:      ConstituencyInfo;
    electoralareaInfo?:     ConstituencyInfo;
    certificates?:          Certificate[];
}

export interface BranchInfo {
    id?:           number;
    name?:         string;
    accountID?:    number;
    createdBy?:    number;
    creationDate?: Date;
    updatedBy?:    number;
    updateDate?:   Date;
}

export interface CategoryInfo {
    id?:         number;
    clientID?:   number;
    category?:   string;
    createdBy?:  number;
    updatedBy?:  number;
    updateDate?: Date;
    date?:       Date;
    memberID?:   number;
    type?:       string;
}

export interface Certificate {
    id?:         number;
    memberID?:   number;
    attachment?: Attachment;
    date?:       Date;
}

export interface Attachment {
    id?:              number;
    clientID?:        number;
    attachment?:      string;
    filename?:        string;
    source?:          string;
    size?:            string;
    folderID?:        FolderID;
    fileDescription?: string;
    createdBy?:       number;
    updatedBy?:       number;
    updateDate?:      Date;
    archived?:        boolean;
    archivedBy?:      number;
    archivedDate?:    Date;
    date?:            Date;
}

export interface FolderID {
    id?:           number;
    parentFolder?: number | null;
    clientID?:     number;
    branchID?:     number;
    folder?:       string;
    folderType?:   number;
    createdBy?:    number;
    updatedBy?:    number;
    updateDate?:   Date;
    date?:         Date;
}

export interface ConstituencyInfo {
    id?:         number;
    regionID?:   RegionI;
    districtID?: ConstituencyInfo;
    location?:   string;
}

export interface RegionI {
    id?:       number;
    location?: string;
}

export interface CountryInfo {
    id?:    number;
    name?:  string;
    short?: string;
    code?:  string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toMeetingAttendanceHistoryModel(json: string): MeetingAttendanceHistoryModel {
        return cast(JSON.parse(json), r("MeetingAttendanceHistoryModel"));
    }

    public static meetingAttendanceHistoryModelToJson(value: MeetingAttendanceHistoryModel): string {
        return JSON.stringify(uncast(value, r("MeetingAttendanceHistoryModel")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = '') {
    if (key) {
        console.error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    console.error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
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

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
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
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
    }
    if (typ === false) return;
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
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
    "MeetingAttendanceHistoryModel": o([
        { json: "history", js: "history", typ: u(null, r("MeetingAttendanceHistoryModelHistory")) },
        { json: "status", js: "status", typ: u(null, r("Status")) },
        { json: "onTime", js: "onTime", typ: u(null, "") },
        { json: "lateness", js: "lateness", typ: u(null, "") },
        { json: "overtime", js: "overtime", typ: u(null, "") },
        { json: "undertime", js: "undertime", typ: u(null, "") },
        { json: "breakOverstay", js: "breakOverstay", typ: u(null, "") },
        { json: "productiveHours", js: "productiveHours", typ: u(null, "") },
        { json: "totalAttendance", js: "totalAttendance", typ: u(null, "") },
    ], false),
    "MeetingAttendanceHistoryModelHistory": o([
        { json: "member", js: "member", typ: u(null, r("Member")) },
        { json: "meetings", js: "meetings", typ: u(null, a(r("MeetingElement"))) },
    ], false),
    "MeetingElement": o([
        { json: "meeting", js: "meeting", typ: u(null, r("MeetingMeeting")) },
        { json: "history", js: "history", typ: u(null, a(r("HistoryElement"))) },
        { json: "status", js: "status", typ: u(null, r("Status")) },
        { json: "onTime", js: "onTime", typ: u(null, "") },
        { json: "lateness", js: "lateness", typ: u(null, "") },
        { json: "overtime", js: "overtime", typ: u(null, "") },
        { json: "undertime", js: "undertime", typ: u(null, "") },
        { json: "breakOverstay", js: "breakOverstay", typ: u(null, "") },
        { json: "productiveHours", js: "productiveHours", typ: u(null, "") },
        { json: "totalAttendance", js: "totalAttendance", typ: u(null, "") },
    ], false),
    "HistoryElement": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "meetingEventId", js: "meetingEventID", typ: u(null, 0) },
        { json: "memberId", js: "memberID", typ: u(null, 0) },
        { json: "accountType", js: "accountType", typ: u(null, 0) },
        { json: "inOrOut", js: "inOrOut", typ: u(null, true) },
        { json: "justification", js: "justification", typ: u(null, u(null, "")) },
        { json: "inTime", js: "inTime", typ: u(null, u(Date, null)) },
        { json: "outTime", js: "outTime", typ: u(null, u(Date, null)) },
        { json: "startBreak", js: "startBreak", typ: u(null, u(Date, null)) },
        { json: "endBreak", js: "endBreak", typ: u(null, u(Date, null)) },
        { json: "clockedBy", js: "clockedBy", typ: u(null, 0) },
        { json: "clockedByInfo", js: "clockedByInfo", typ: u(null, u(r("EdByInfo"), null)) },
        { json: "clockingMethod", js: "clockingMethod", typ: u(null, 0) },
        { json: "onlineMeeting", js: "onlineMeeting", typ: u(null, true) },
        { json: "validate", js: "validate", typ: u(null, r("Status")) },
        { json: "validationDate", js: "validationDate", typ: u(null, u(Date, null)) },
        { json: "validatedBy", js: "validatedBy", typ: u(null, 0) },
        { json: "validatedByInfo", js: "validatedByInfo", typ: u(null, u(r("EdByInfo"), null)) },
        { json: "date", js: "date", typ: u(null, Date) },
        { json: "clockingMethodName", js: "clockingMethodName", typ: u(null, "") },
    ], false),
    "EdByInfo": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "firstname", js: "firstname", typ: u(null, "") },
        { json: "surname", js: "surname", typ: u(null, "") },
        { json: "gender", js: "gender", typ: u(null, 0) },
        { json: "profilePicture", js: "profilePicture", typ: u(null, "") },
        { json: "dateOfBirth", js: "dateOfBirth", typ: u(null, Date) },
        { json: "phone", js: "phone", typ: u(null, "") },
        { json: "email", js: "email", typ: u(null, "") },
        { json: "role", js: "role", typ: u(null, 0) },
        { json: "accountId", js: "accountID", typ: u(null, 0) },
        { json: "branchId", js: "branchID", typ: u(null, 0) },
        { json: "level", js: "level", typ: u(null, 0) },
        { json: "status", js: "status", typ: u(null, 0) },
        { json: "lastUpdatedBy", js: "lastUpdatedBy", typ: u(null, 0) },
        { json: "date", js: "date", typ: u(null, Date) },
        { json: "last_login", js: "lastLogin", typ: u(null, Date) },
    ], false),
    "Status": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "name", js: "name", typ: u(null, "") },
    ], false),
    "MeetingMeeting": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "type", js: "type", typ: u(null, 0) },
        { json: "memberType", js: "memberType", typ: u(null, 0) },
        { json: "name", js: "name", typ: u(null, "") },
        { json: "clientId", js: "clientID", typ: u(null, 0) },
        { json: "branchId", js: "branchID", typ: u(null, 0) },
        { json: "memberCategoryId", js: "memberCategoryID", typ: u(null, 0) },
        { json: "meetingSpan", js: "meetingSpan", typ: u(null, 0) },
        { json: "startTime", js: "startTime", typ: u(null, "") },
        { json: "closeTime", js: "closeTime", typ: u(null, "") },
        { json: "latenessTime", js: "latenessTime", typ: u(null, u(null, "")) },
        { json: "isRecuring", js: "isRecuring", typ: u(null, true) },
        { json: "hasBreakTime", js: "hasBreakTime", typ: u(null, true) },
        { json: "hasDuty", js: "hasDuty", typ: u(null, true) },
        { json: "hasOvertime", js: "hasOvertime", typ: u(null, true) },
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
    ], false),
    "Member": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "clientId", js: "clientID", typ: u(null, 0) },
        { json: "firstname", js: "firstname", typ: u(null, "") },
        { json: "middlename", js: "middlename", typ: u(null, "") },
        { json: "surname", js: "surname", typ: u(null, "") },
        { json: "gender", js: "gender", typ: u(null, 0) },
        { json: "profilePicture", js: "profilePicture", typ: u(null, "") },
        { json: "phone", js: "phone", typ: u(null, "") },
        { json: "email", js: "email", typ: u(null, "") },
        { json: "dateOfBirth", js: "dateOfBirth", typ: u(null, Date) },
        { json: "religion", js: "religion", typ: u(null, 0) },
        { json: "nationality", js: "nationality", typ: u(null, "") },
        { json: "countryOfResidence", js: "countryOfResidence", typ: u(null, "") },
        { json: "stateProvince", js: "stateProvince", typ: u(null, "") },
        { json: "region", js: "region", typ: u(null, 0) },
        { json: "district", js: "district", typ: u(null, 0) },
        { json: "constituency", js: "constituency", typ: u(null, 0) },
        { json: "electoralArea", js: "electoralArea", typ: u(null, 0) },
        { json: "community", js: "community", typ: u(null, "") },
        { json: "hometown", js: "hometown", typ: u(null, "") },
        { json: "houseNoDigitalAddress", js: "houseNoDigitalAddress", typ: u(null, "") },
        { json: "digitalAddress", js: "digitalAddress", typ: u(null, "") },
        { json: "level", js: "level", typ: u(null, 0) },
        { json: "status", js: "status", typ: u(null, 0) },
        { json: "accountType", js: "accountType", typ: u(null, 0) },
        { json: "memberType", js: "memberType", typ: u(null, 0) },
        { json: "date", js: "date", typ: u(null, Date) },
        { json: "last_login", js: "lastLogin", typ: u(null, Date) },
        { json: "referenceId", js: "referenceID", typ: u(null, "") },
        { json: "branchId", js: "branchID", typ: u(null, 0) },
        { json: "editable", js: "editable", typ: u(null, true) },
        { json: "profileResume", js: "profileResume", typ: u(null, "") },
        { json: "profileIdentification", js: "profileIdentification", typ: u(null, u(null, "")) },
        { json: "archived", js: "archived", typ: u(null, true) },
        { json: "updatedBy", js: "updatedBy", typ: u(null, 0) },
        { json: "updateDate", js: "updateDate", typ: u(null, Date) },
        { json: "updatedByInfo", js: "updatedByInfo", typ: u(null, r("EdByInfo")) },
        { json: "branchInfo", js: "branchInfo", typ: u(null, r("BranchInfo")) },
        { json: "categoryInfo", js: "categoryInfo", typ: u(null, r("CategoryInfo")) },
        { json: "countryInfo", js: "countryInfo", typ: u(null, a(r("CountryInfo"))) },
        { json: "regionInfo", js: "regionInfo", typ: u(null, r("RegionI")) },
        { json: "districtInfo", js: "districtInfo", typ: u(null, r("ConstituencyInfo")) },
        { json: "identification", js: "identification", typ: u(null, "") },
        { json: "organizationName", js: "organizationName", typ: u(null, "") },
        { json: "contactPersonName", js: "contactPersonName", typ: u(null, "") },
        { json: "organizationType", js: "organizationType", typ: u(null, r("CategoryInfo")) },
        { json: "businessRegistered", js: "businessRegistered", typ: u(null, true) },
        { json: "organizationPhone", js: "organizationPhone", typ: u(null, "") },
        { json: "organizationEmail", js: "organizationEmail", typ: u(null, "") },
        { json: "contactPersonGender", js: "contactPersonGender", typ: u(null, 0) },
        { json: "contactPersonPhoto", js: "contactPersonPhoto", typ: u(null, "") },
        { json: "dateOfIncorporation", js: "dateOfIncorporation", typ: u(null, Date) },
        { json: "logo", js: "logo", typ: u(null, "") },
        { json: "contactPersonPhone", js: "contactPersonPhone", typ: u(null, "") },
        { json: "contactPersonEmail", js: "contactPersonEmail", typ: u(null, "") },
        { json: "countryOfBusiness", js: "countryOfBusiness", typ: u(null, "") },
        { json: "constituencyInfo", js: "constituencyInfo", typ: u(null, r("ConstituencyInfo")) },
        { json: "electoralareaInfo", js: "electoralareaInfo", typ: u(null, r("ConstituencyInfo")) },
        { json: "certificates", js: "certificates", typ: u(null, a(r("Certificate"))) },
    ], false),
    "BranchInfo": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "name", js: "name", typ: u(null, "") },
        { json: "accountId", js: "accountID", typ: u(null, 0) },
        { json: "createdBy", js: "createdBy", typ: u(null, 0) },
        { json: "creationDate", js: "creationDate", typ: u(null, Date) },
        { json: "updatedBy", js: "updatedBy", typ: u(null, 0) },
        { json: "updateDate", js: "updateDate", typ: u(null, Date) },
    ], false),
    "CategoryInfo": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "clientId", js: "clientID", typ: u(null, 0) },
        { json: "category", js: "category", typ: u(null, "") },
        { json: "createdBy", js: "createdBy", typ: u(null, 0) },
        { json: "updatedBy", js: "updatedBy", typ: u(null, 0) },
        { json: "updateDate", js: "updateDate", typ: u(null, Date) },
        { json: "date", js: "date", typ: u(null, Date) },
        { json: "memberId", js: "memberID", typ: u(null, 0) },
        { json: "type", js: "type", typ: u(null, "") },
    ], false),
    "Certificate": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "memberId", js: "memberID", typ: u(null, 0) },
        { json: "attachment", js: "attachment", typ: u(null, r("Attachment")) },
        { json: "date", js: "date", typ: u(null, Date) },
    ], false),
    "Attachment": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "clientId", js: "clientID", typ: u(null, 0) },
        { json: "attachment", js: "attachment", typ: u(null, "") },
        { json: "filename", js: "filename", typ: u(null, "") },
        { json: "source", js: "source", typ: u(null, "") },
        { json: "size", js: "size", typ: u(null, "") },
        { json: "folderId", js: "folderID", typ: u(null, r("FolderID")) },
        { json: "fileDescription", js: "fileDescription", typ: u(null, "") },
        { json: "createdBy", js: "createdBy", typ: u(null, 0) },
        { json: "updatedBy", js: "updatedBy", typ: u(null, 0) },
        { json: "updateDate", js: "updateDate", typ: u(null, Date) },
        { json: "archived", js: "archived", typ: u(null, true) },
        { json: "archivedBy", js: "archivedBy", typ: u(null, 0) },
        { json: "archivedDate", js: "archivedDate", typ: u(null, Date) },
        { json: "date", js: "date", typ: u(null, Date) },
    ], false),
    "FolderID": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "parentFolder", js: "parentFolder", typ: u(null, u(0, null)) },
        { json: "clientId", js: "clientID", typ: u(null, 0) },
        { json: "branchId", js: "branchID", typ: u(null, 0) },
        { json: "folder", js: "folder", typ: u(null, "") },
        { json: "folderType", js: "folderType", typ: u(null, 0) },
        { json: "createdBy", js: "createdBy", typ: u(null, 0) },
        { json: "updatedBy", js: "updatedBy", typ: u(null, 0) },
        { json: "updateDate", js: "updateDate", typ: u(null, Date) },
        { json: "date", js: "date", typ: u(null, Date) },
    ], false),
    "ConstituencyInfo": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "regionId", js: "regionID", typ: u(null, r("RegionI")) },
        { json: "districtId", js: "districtID", typ: u(null, r("ConstituencyInfo")) },
        { json: "location", js: "location", typ: u(null, "") },
    ], false),
    "RegionI": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "location", js: "location", typ: u(null, "") },
    ], false),
    "CountryInfo": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "name", js: "name", typ: u(null, "") },
        { json: "short", js: "short", typ: u(null, "") },
        { json: "code", js: "code", typ: u(null, "") },
    ], false),
};
