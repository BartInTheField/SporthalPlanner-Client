export class ClosingDay{
  private _reason: string;
  private _date: Date;
  private id: string;
  private _sportsFacility;
  private _weekNumber: number;

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

  get sportsFacility(): string {
    return this._sportsFacility;
  }
  set sportsFacility(value: string) {
    this._sportsFacility = value;
  }

  get weekNumber(): number {
    return this._weekNumber;
  }

  set weekNumber(value: number) {
    this._weekNumber = value;
  }
}
