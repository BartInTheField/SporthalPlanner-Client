export class Maintenancee {
  private days: Date[];
  private subject: string;
  private materials: string[];
  private reason: string;
  private sportsFacility: string;


  get Days(): Date[] {
    return this.days;
  }

  set Days(value: Date[]) {
    this.days = value;
  }

  get Subject(): string {
    return this.subject;
  }

  set Subject(value: string) {
    this.subject = value;
  }

  get Materials(): string[] {
    return this.materials;
  }

  set Materials(value: string[]) {
    this.materials = value;
  }

  get Reason(): string {
    return this.reason;
  }

  set Reason(value: string) {
    this.reason = value;
  }

  get SportsFacility(): string {
    return this.sportsFacility;
  }

  set SportsFacility(value: string) {
    this.sportsFacility = value;
  }
}
