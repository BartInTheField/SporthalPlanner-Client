import {SportsFacility} from "./sportsFacility.model";
export class Maintenance {
  private id: string;
  private _Days: Date[];
  private _Subject: string;
  private _Materials: string;
  private _Reason: string;
  private _SportsFacility: string;


  get _id(): string {
    return this.id;
  }

  set _id(value: string) {
    this.id = value;
  }

  get days(): Date[] {
    return this._Days;
  }

  set days(value: Date[]) {
    this._Days = value;
  }

  get subject(): string {
    return this._Subject;
  }

  set subject(value: string) {
    this._Subject = value;
  }

  get materials(): string {
    return this._Materials;
  }

  set materials(value: string) {
    this._Materials = value;
  }

  get reason(): string {
    return this._Reason;
  }

  set reason(value: string) {
    this._Reason = value;
  }

  get sportsFacility(): string {
    return this._SportsFacility;
  }

  set sportsFacility(value: string) {
    this._SportsFacility = value;
  }
}
