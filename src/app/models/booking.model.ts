import { SportsHallField } from './sportsHallField.model';
import { User } from './user.model';

export class Booking {

  constructor(private _id: number, private _day: Date, private _startingTime: string, private _endingTime: string,
              private _sportsHallField: SportsHallField, private _status: number, private _user: User) {
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get day(): Date {
    return this._day;
  }

  set day(value: Date) {
    this._day = value;
  }

  get startingTime(): string {
    return this._startingTime;
  }

  set startingTime(value: string) {
    this._startingTime = value;
  }

  get endingTime(): string {
    return this._endingTime;
  }

  set endingTime(value: string) {
    this._endingTime = value;
  }

  get sportsHallField(): SportsHallField {
    return this._sportsHallField;
  }

  set sportsHallField(value: SportsHallField) {
    this._sportsHallField = value;
  }

  get status(): number {
    return this._status;
  }

  set status(value: number) {
    this._status = value;
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }
}
