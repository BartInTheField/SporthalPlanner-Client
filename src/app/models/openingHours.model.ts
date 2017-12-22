export class OpeningHours {

    constructor(private _id: number, private _monday: string, private _tuesday: string, private _wednesday: string,
                private _thursday: string, private _friday: string, private _saturday: string, private _sunday: string) {}


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get monday(): string {
    return this._monday;
  }

  set monday(value: string) {
    this._monday = value;
  }

  get tuesday(): string {
    return this._tuesday;
  }

  set tuesday(value: string) {
    this._tuesday = value;
  }

  get wednesday(): string {
    return this._wednesday;
  }

  set wednesday(value: string) {
    this._wednesday = value;
  }

  get thursday(): string {
    return this._thursday;
  }

  set thursday(value: string) {
    this._thursday = value;
  }

  get friday(): string {
    return this._friday;
  }

  set friday(value: string) {
    this._friday = value;
  }

  get saturday(): string {
    return this._saturday;
  }

  set saturday(value: string) {
    this._saturday = value;
  }

  get sunday(): string {
    return this._sunday;
  }

  set sunday(value: string) {
    this._sunday = value;
  }
}
