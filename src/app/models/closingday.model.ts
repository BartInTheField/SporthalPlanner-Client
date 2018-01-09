export class ClosingDay{
  private _reason: string;
  private _date: Date;

  set reason(value: string) {
    this._reason = value;
  }

  set date(value: Date) {
    this._date = value;
  }


  get reason(): string {
    return this._reason;
  }

  get date(): Date {
    return this._date;
  }
}
