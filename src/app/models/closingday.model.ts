export class ClosingDay{
  private _reason: string;
  private _date: Date;
  private id: string;
  private _sportsFacility

  get reason(): string {
    return this._reason;
  }
  set reason(value: string) {
    this._reason = value;
  }

  get date(): Date {
    return this._date;
  }
  set date(value: Date) {
    this._date = value;
  }

  get _id(): string {
    return this.id;
  }
  set _id(value: string) {
    this.id = value;
  }

  get sportsFacility(): string {
    return this._sportsFacility;
  }
  set sportsFacility(value: string) {
    this._sportsFacility = value;
  }
}
