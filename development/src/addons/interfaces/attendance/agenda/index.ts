// To parse this data:
//
//   import { Convert } from "./file";
//
//   const meetingAgendaModel = Convert.toMeetingAgendaModel(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface MeetingAgendaModel {
    id?:             number;
    meetingEventID?: MeetingEventID;
    agenda?:         string;
    attachment?:     null | string;
    meetingDate?:    Date;
    updatedBy?:      number;
    updateDate?:     Date;
    date?:           Date;
}

export interface MeetingEventID {
    id?:                        number;
    type?:                      number;
    memberType?:                number;
    name?:                      string;
    clientID?:                  ClientID;
    branchID?:                  BranchID;
    memberCategoryID?:          MemberCategoryID;
    meetingSpan?:               number;
    startTime?:                 string;
    closeTime?:                 string;
    latenessTime?:              string;
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

export interface BranchID {
    id?:           number;
    name?:         string;
    accountID?:    number;
    createdBy?:    number;
    creationDate?: Date;
    updatedBy?:    number;
    updateDate?:   Date;
}

export interface ClientID {
    id?:                       number;
    name?:                     string;
    accountType?:              number;
    country?:                  string;
    stateProvince?:            string;
    applicantFirstname?:       string;
    applicantSurname?:         string;
    applicantGender?:          number;
    applicantPhone?:           string;
    applicantEmail?:           string;
    applicantDesignationRole?: number;
    region?:                   number;
    district?:                 number;
    constituency?:             number;
    community?:                string;
    subscriptionDuration?:     string;
    subscriptionDate?:         Date;
    subscriptionFee?:          string;
    logo?:                     string;
    status?:                   number;
    archive?:                  number;
    accountCategory?:          MemberCategoryID;
    website?:                  string;
    creationDate?:             Date;
    updatedBy?:                number;
    updateDate?:               Date;
    subscriptionInfo?:         SubscriptionInfo;
    countryInfo?:              CountryInfo[];
}

export interface MemberCategoryID {
    id?:         number;
    clientID?:   number;
    category?:   string;
    createdBy?:  number;
    updatedBy?:  number;
    updateDate?: Date | null;
    date?:       Date | null;
}

export interface CountryInfo {
    id?:    number;
    name?:  string;
    short?: string;
    code?:  string;
}

export interface SubscriptionInfo {
    id?:                number;
    client?:            string;
    clientID?:          string;
    subscriptionID?:    string;
    subscribedModules?: SubscribedModules;
    dateCreated?:       Date;
}

export interface SubscribedModules {
    module1?: Module;
    module2?: Module;
    module3?: Module;
}

export interface Module {
    moduleName?: string;
    expiresOn?:  string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toMeetingAgendaModel(json: string): MeetingAgendaModel {
        return cast(JSON.parse(json), r("MeetingAgendaModel"));
    }

    public static meetingAgendaModelToJson(value: MeetingAgendaModel): string {
        return JSON.stringify(uncast(value, r("MeetingAgendaModel")), null, 2);
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
    "MeetingAgendaModel": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "meetingEventId", js: "meetingEventID", typ: u(null, r("MeetingEventID")) },
        { json: "agenda", js: "agenda", typ: u(null, "") },
        { json: "attachment", js: "attachment", typ: u(null, u(null, "")) },
        { json: "meetingDate", js: "meetingDate", typ: u(null, Date) },
        { json: "updatedBy", js: "updatedBy", typ: u(null, 0) },
        { json: "updateDate", js: "updateDate", typ: u(null, Date) },
        { json: "date", js: "date", typ: u(null, Date) },
    ], false),
    "MeetingEventID": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "type", js: "type", typ: u(null, 0) },
        { json: "memberType", js: "memberType", typ: u(null, 0) },
        { json: "name", js: "name", typ: u(null, "") },
        { json: "clientId", js: "clientID", typ: u(null, r("ClientID")) },
        { json: "branchId", js: "branchID", typ: u(null, r("BranchID")) },
        { json: "memberCategoryId", js: "memberCategoryID", typ: u(null, r("MemberCategoryID")) },
        { json: "meetingSpan", js: "meetingSpan", typ: u(null, 0) },
        { json: "startTime", js: "startTime", typ: u(null, "") },
        { json: "closeTime", js: "closeTime", typ: u(null, "") },
        { json: "latenessTime", js: "latenessTime", typ: u(null, "") },
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
    "BranchID": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "name", js: "name", typ: u(null, "") },
        { json: "accountId", js: "accountID", typ: u(null, 0) },
        { json: "createdBy", js: "createdBy", typ: u(null, 0) },
        { json: "creationDate", js: "creationDate", typ: u(null, Date) },
        { json: "updatedBy", js: "updatedBy", typ: u(null, 0) },
        { json: "updateDate", js: "updateDate", typ: u(null, Date) },
    ], false),
    "ClientID": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "name", js: "name", typ: u(null, "") },
        { json: "accountType", js: "accountType", typ: u(null, 0) },
        { json: "country", js: "country", typ: u(null, "") },
        { json: "stateProvince", js: "stateProvince", typ: u(null, "") },
        { json: "applicantFirstname", js: "applicantFirstname", typ: u(null, "") },
        { json: "applicantSurname", js: "applicantSurname", typ: u(null, "") },
        { json: "applicantGender", js: "applicantGender", typ: u(null, 0) },
        { json: "applicantPhone", js: "applicantPhone", typ: u(null, "") },
        { json: "applicantEmail", js: "applicantEmail", typ: u(null, "") },
        { json: "applicantDesignationRole", js: "applicantDesignationRole", typ: u(null, 0) },
        { json: "region", js: "region", typ: u(null, 0) },
        { json: "district", js: "district", typ: u(null, 0) },
        { json: "constituency", js: "constituency", typ: u(null, 0) },
        { json: "community", js: "community", typ: u(null, "") },
        { json: "subscriptionDuration", js: "subscriptionDuration", typ: u(null, "") },
        { json: "subscriptionDate", js: "subscriptionDate", typ: u(null, Date) },
        { json: "subscriptionFee", js: "subscriptionFee", typ: u(null, "") },
        { json: "logo", js: "logo", typ: u(null, "") },
        { json: "status", js: "status", typ: u(null, 0) },
        { json: "archive", js: "archive", typ: u(null, 0) },
        { json: "accountCategory", js: "accountCategory", typ: u(null, r("MemberCategoryID")) },
        { json: "website", js: "website", typ: u(null, "") },
        { json: "creationDate", js: "creationDate", typ: u(null, Date) },
        { json: "updatedBy", js: "updatedBy", typ: u(null, 0) },
        { json: "updateDate", js: "updateDate", typ: u(null, Date) },
        { json: "subscriptionInfo", js: "subscriptionInfo", typ: u(null, r("SubscriptionInfo")) },
        { json: "countryInfo", js: "countryInfo", typ: u(null, a(r("CountryInfo"))) },
    ], false),
    "MemberCategoryID": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "clientId", js: "clientID", typ: u(null, 0) },
        { json: "category", js: "category", typ: u(null, "") },
        { json: "createdBy", js: "createdBy", typ: u(null, 0) },
        { json: "updatedBy", js: "updatedBy", typ: u(null, 0) },
        { json: "updateDate", js: "updateDate", typ: u(null, u(Date, null)) },
        { json: "date", js: "date", typ: u(null, u(Date, null)) },
    ], false),
    "CountryInfo": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "name", js: "name", typ: u(null, "") },
        { json: "short", js: "short", typ: u(null, "") },
        { json: "code", js: "code", typ: u(null, "") },
    ], false),
    "SubscriptionInfo": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "client", js: "client", typ: u(null, "") },
        { json: "client_id", js: "clientID", typ: u(null, "") },
        { json: "subscription_id", js: "subscriptionID", typ: u(null, "") },
        { json: "subscribed_modules", js: "subscribedModules", typ: u(null, r("SubscribedModules")) },
        { json: "date_created", js: "dateCreated", typ: u(null, Date) },
    ], false),
    "SubscribedModules": o([
        { json: "Module 1", js: "module1", typ: u(null, r("Module")) },
        { json: "Module 2", js: "module2", typ: u(null, r("Module")) },
        { json: "Module 3", js: "module3", typ: u(null, r("Module")) },
    ], false),
    "Module": o([
        { json: "module name", js: "moduleName", typ: u(null, "") },
        { json: "expires_on", js: "expiresOn", typ: u(null, "") },
    ], false),
};
