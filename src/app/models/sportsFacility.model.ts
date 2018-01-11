import { Company } from "./company.model";
import { OpeningHours } from "./openingHours.model";
import { User } from "./user.model";
import { ClosingDay } from "./closingday.model";

export class SportsFacility {

    constructor(private id: number, private address: string, private city: string, private company: Company,
                private email: string, private name: string, private openingHours: OpeningHours, private phone: string,
                private user: User) {}

    public get Id() : number {
        return this.id;
    }
    public set Id(v : number) {
        this.id = v;
    }

    public get Address() : string {
        return this.address;
    }
    public set Address(v : string) {
        this.address = v;
    }

    public get City() : string {
        return this.city;
    }
    public set City(v : string) {
        this.city = v;
    }

    public get Company() : Company {
        return this.company;
    }
    public set Company(v : Company) {
        this.company = v;
    }

    public get Email() : string {
        return this.email;
    }
    public set Email(v : string) {
        this.email = v;
    }

    public get Name() : string {
        return this.name;
    }
    public set Name(v : string) {
        this.name = v;
    }

    public get OpeningHours() : OpeningHours {
        return this.openingHours;
    }
    public set OpeningHours(v : OpeningHours) {
        this.openingHours = v;
    }

    public get Phone() : string {
        return this.phone;
    }
    public set Phone(v : string) {
        this.phone = v;
    }

    public get User() : User {
        return this.user;
    }
    public set User(v : User) {
        this.user = v;
    }

}
