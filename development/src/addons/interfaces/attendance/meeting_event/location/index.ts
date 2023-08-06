import { MeetingEventSchedule_I } from "../schedules"

export interface MeetingEventScheduleLocation_I {
  id?: number,
  meetingEventId?: MeetingEventSchedule_I,
  locationName?: string,
  latitude?: string,
  longitude?: string,
  radius?: number,
  updatedBy?: number,
  updateDate?: Date,
  date?: Date,
}




export class MeetingEventScheduleLocationFormInputModel {
  meetingEventId: number;
  locationName: string;
  latitude: string;
  longitude: string;
  radius: string;

  toJson(): object {
    return {
      meetingEventId: this.meetingEventId,
      locationName: this.locationName,
      latitude: this.latitude,
      longitude: this.longitude,
      radius: this.radius
    };
  }

  static fromJson(json: any): MeetingEventScheduleLocationFormInputModel {
    const model = new MeetingEventScheduleLocationFormInputModel();
    model.meetingEventId = json.meetingEventId;
    model.locationName = json.locationName;
    model.latitude = json.latitude;
    model.longitude = json.longitude;
    model.radius = json.radius;
    return model;
  }

  toString(): string {
    return `MeetingEventScheduleLocationFormInputModel(meetingEventId=${this.meetingEventId}, locationName=${this.locationName}, latitude=${this.latitude}, longitude=${this.longitude}, radius=${this.radius})`;
  }
}
