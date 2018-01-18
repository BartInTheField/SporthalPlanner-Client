import {SportsFacility} from "./sportsFacility.model";
export class Maintenance {
  private id: string;
  private _Days: Date[];
  private _Subject: string;
  private _Materials: string;
  private _Reason: string;
  private _SportsFacility: SportsFacility;


  get _id(): string {
    return this.id;
  }

  set _id(value: string) {
    this.id = value;
  }

  get Days(): Date[] {
    return this._Days;
  }

  set Days(value: Date[]) {
    this._Days = value;
  }

  get Subject(): string {
    return this._Subject;
  }

  set Subject(value: string) {
    this._Subject = value;
  }

  get Materials(): string {
    return this._Materials;
  }

  set Materials(value: string) {
    this._Materials = value;
  }

  get Reason(): string {
    return this._Reason;
  }

  set Reason(value: string) {
    this._Reason = value;
  }

  get SportsFacility(): SportsFacility {
    return this._SportsFacility;
  }

  set SportsFacility(value: SportsFacility) {
    this._SportsFacility = value;
  }
}
