export class Customer {

  private _id: string;

  private _sporthalUsername: string;
  private _sporthalHurenId: string;

  private _firstName: string;
  private _lastName: string;

  private _isSporthalHurenCustomer: boolean;

  constructor(id: string, isSportHalHurenCustomer: boolean = false) {
    this.id = id;
    this._isSporthalHurenCustomer = isSportHalHurenCustomer;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get sporthalHurenId(): string {
    return this._sporthalHurenId;
  }

  set sporthalHurenId(value: string) {
    this._sporthalHurenId = value;
  }

  get sporthalHurenUsername(): string {
    return this._sporthalUsername;
  }

  set sporthalHurenUsername(value: string) {
    this._sporthalUsername = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get isSporthalHurenCustomer(): boolean {
    return this._isSporthalHurenCustomer;
  }

}

export class CustomerMaker {
  public static makeNonSporthalHuren (id: string, firstName: string, lastName: string) : Customer {
    const customer: Customer = new Customer(id);
    customer.firstName = firstName;
    customer.lastName = lastName;
    return customer;
  }

  public static makeSporthalHuren (id: string, sporthalHurenUsername: string, sporthalHurenId: string) : Customer {
    const customer: Customer = new Customer(id, true);
    customer.sporthalHurenUsername = sporthalHurenUsername;
    customer.sporthalHurenId = sporthalHurenId;
    return customer;
  }
}
