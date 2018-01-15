import { Company } from "./company.model";
import { OpeningHours } from "./openingHours.model";
import { User } from "./user.model";
import { ClosingDay } from "./closingday.model";

export class SportsFacility {

    constructor(private id: string, private Address: string, private City: string, private Company: Company,
                private Email: string, private Name: string, private OpeningHours: OpeningHours, private Phone: string,
                private User: User) {}

    public get _id() : string {
      return this.id;
    }
    public set _id(v : string) {
        this.id = v;
      }

    public get address() : string {
        return this.Address;
      }
    public set address(v : string) {
        this.Address = v;
      }

    public get city() : string {
        return this.City;
      }
    public set city(v : string) {
        this.City = v;
      }

    public get company() : Company {
        return this.Company;
      }
    public set company(v : Company) {
        this.Company = v;
      }

    public get email() : string {
        return this.Email;
      }
    public set email(v : string) {
        this.Email = v;
      }

    public get name() : string {
        return this.Name;
      }
    public set name(v : string) {
        this.Name = v;
      }

    public get openingHours() : OpeningHours {
        return this.OpeningHours;
      }
    public set openingHours(v : OpeningHours) {
        this.OpeningHours = v;
      }

    public get phone() : string {
        return this.Phone;
      }
    public set phone(v : string) {
        this.Phone = v;
      }

    public get user() : User {
        return this.User;
    }
    public set user(v : User) {
        this.User = v;
    }

}
