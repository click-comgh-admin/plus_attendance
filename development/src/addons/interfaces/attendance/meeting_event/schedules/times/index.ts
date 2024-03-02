// To parse this data:
//
//   import { Convert, MeetingEventTimeModel } from "./file";
//
//   const meetingEventTimeModel = Convert.toMeetingEventTimeModel(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.


export interface MeetingEventTimeFormModel {
    meetingEventId: string;
    times: Array<MeetingEventTimeOnlyModel>
}

export interface MeetingEventTimeOnlyModel {
    startTime?: string;
    endTime?: string;
}

export interface MeetingEventTimeModel {
    id?: number;
    meetingEventID?: MeetingEventID;
    startTime?: string;
    endTime?: string;
    updatedBy?: number;
    updateDate?: Date;
    date?: Date;
}

export interface MeetingEventID {
    id?: number;
    type?: number;
    memberType?: number;
    name?: string;
    clientID?: ClientID;
    branchID?: BranchID;
    memberCategoryID?: MemberCategoryID;
    meetingSpan?: number;
    startTime?: string;
    closeTime?: string;
    latenessTime?: string;
    isRecuring?: boolean;
    hasBreakTime?: boolean;
    hasDuty?: boolean;
    hasOvertime?: boolean;
    hasMultipleTimes?: boolean;
    virtualMeetingLink?: string;
    virtualMeetingType?: number;
    meetingLocation?: number;
    expectedMonthlyAttendance?: number;
    activeMonthlyAttendance?: number;
    agenda?: string;
    agendaFile?: string;
    updatedBy?: number;
    updateDate?: Date;
    date?: Date;
    meetingCategories?: MeetingCategory[];
}

export interface BranchID {
    id?: number;
    name?: string;
    accountID?: number;
    createdBy?: number;
    creationDate?: Date;
    updatedBy?: number;
    updateDate?: Date;
}

export interface ClientID {
    id?: number;
    name?: string;
    accountType?: number;
    country?: string;
    stateProvince?: string;
    applicantFirstname?: string;
    applicantSurname?: string;
    applicantGender?: number;
    applicantPhone?: string;
    applicantEmail?: string;
    applicantDesignationRole?: number;
    region?: number;
    district?: number;
    constituency?: number;
    community?: string;
    subscriptionDuration?: string;
    subscriptionDate?: Date;
    subscriptionFee?: string;
    logo?: string;
    status?: number;
    archive?: number;
    accountCategory?: MemberCategoryID;
    website?: string;
    creationDate?: Date;
    updatedBy?: number;
    updateDate?: Date;
    subscriptionInfo?: SubscriptionInfo;
    countryInfo?: CountryInfo[];
}

export interface MemberCategoryID {
    id?: number;
    clientID?: number;
    category?: string;
    createdBy?: number;
    updatedBy?: number;
    updateDate?: Date | null;
    date?: Date | null;
}

export interface CountryInfo {
    id?: number;
    name?: string;
    short?: string;
    code?: string;
}

export interface SubscriptionInfo {
    id?: number;
    client?: string;
    clientID?: string;
    subscriptionID?: string;
    subscribedModules?: SubscribedModules;
    dateCreated?: Date;
    membershipSize?: string;
    description?: string;
    duration?: number;
    amountPaid?: number;
    renewingDays?: number;
    remainingDays?: number;
    expiredDays?: number;
    subscriptionFeeGhs?: number;
    paidBy?: string;
    subscriptionFeeUsd?: number;
    expiresOn?: Date;
    confirmed?: boolean;
    expired?: boolean;
    annualMaintenanceFee?: number;
    invoiceCopy?: string;
    nonExpiry?: boolean;
    special?: boolean;
    usercode?: string;
    newExpiresOn?: null;
}

export interface SubscribedModules {
    databaseManager?: Manager;
    attendanceManager?: Manager;
    cashManager?: Manager;
}

export interface Manager {
    moduleID?: number;
    moduleName?: string;
    expiresOn?: string;
    amountPaid?: number;
}

export interface MeetingCategory {
    id?: number;
    meetingEventID?: number;
    memberCategoryID?: MemberCategoryID;
    updatedBy?: number;
    updateDate?: Date;
    date?: Date;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toMeetingEventTimeModel(json: string): MeetingEventTimeModel {
        console.log({"json--json": json, "JSON.parse(json)": JSON.parse(json)})
        return cast(JSON.parse(json), r("MeetingEventTimeModel"));
    }

    public static meetingEventTimeModelToJson(value: MeetingEventTimeModel): string {
        return JSON.stringify(uncast(value, r("MeetingEventTimeModel")), null, 2);
    }
}

// @ts-ignore
function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
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
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
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
            } catch (_) { }
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
    // if (typ === false) return;
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems") ? transformArray(typ.arrayItems, val)
                : typ.hasOwnProperty("props") ? transformObject(getProps(typ), typ.additional, val)
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
    "MeetingEventTimeModel": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "meetingEventId", js: "meetingEventID", typ: u(null, r("MeetingEventID")) },
        { json: "startTime", js: "startTime", typ: u(null, "") },
        { json: "endTime", js: "endTime", typ: u(null, "") },
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
        { json: "membership_size", js: "membershipSize", typ: u(null, "") },
        { json: "description", js: "description", typ: u(null, "") },
        { json: "duration", js: "duration", typ: u(null, 0) },
        { json: "amount_paid", js: "amountPaid", typ: u(null, 0) },
        { json: "renewing_days", js: "renewingDays", typ: u(null, 0) },
        { json: "remaining_days", js: "remainingDays", typ: u(null, 0) },
        { json: "expired_days", js: "expiredDays", typ: u(null, 0) },
        { json: "subscription_fee_ghs", js: "subscriptionFeeGhs", typ: u(null, 3.14) },
        { json: "paid_by", js: "paidBy", typ: u(null, "") },
        { json: "subscription_fee_usd", js: "subscriptionFeeUsd", typ: u(null, 3.14) },
        { json: "expires_on", js: "expiresOn", typ: u(null, Date) },
        { json: "confirmed", js: "confirmed", typ: u(null, true) },
        { json: "expired", js: "expired", typ: u(null, true) },
        { json: "annual_maintenance_fee", js: "annualMaintenanceFee", typ: u(null, 3.14) },
        { json: "invoice_copy", js: "invoiceCopy", typ: u(null, "") },
        { json: "non_expiry", js: "nonExpiry", typ: u(null, true) },
        { json: "special", js: "special", typ: u(null, true) },
        { json: "usercode", js: "usercode", typ: u(null, "") },
        { json: "new_expires_on", js: "newExpiresOn", typ: u(null, null) },
    ], false),
    "SubscribedModules": o([
        { json: "Database Manager", js: "databaseManager", typ: u(null, r("Manager")) },
        { json: "Attendance Manager", js: "attendanceManager", typ: u(null, r("Manager")) },
        { json: "Cash Manager", js: "cashManager", typ: u(null, r("Manager")) },
    ], false),
    "Manager": o([
        { json: "module_id", js: "moduleID", typ: u(null, 0) },
        { json: "module_name", js: "moduleName", typ: u(null, "") },
        { json: "expires_on", js: "expiresOn", typ: u(null, "") },
        { json: "amount_paid", js: "amountPaid", typ: u(null, 3.14) },
    ], false),
    "MeetingCategory": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "meetingEventId", js: "meetingEventID", typ: u(null, 0) },
        { json: "memberCategoryId", js: "memberCategoryID", typ: u(null, r("MemberCategoryID")) },
        { json: "updatedBy", js: "updatedBy", typ: u(null, 0) },
        { json: "updateDate", js: "updateDate", typ: u(null, Date) },
        { json: "date", js: "date", typ: u(null, Date) },
    ], false),
};
