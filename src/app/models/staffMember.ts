export class StaffMember {

  constructor(private _firstName,
              private _lastName,
              private _dateOfBirth) {}

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
  }

  get dateOfBirth() {
    return this._dateOfBirth;
  }

  set dateOfBirth(value) {
    this._dateOfBirth = value;
  }
}
