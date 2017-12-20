import { SportsFacility } from "./sportsFacility.model";

export class SportsHall {

    constructor(private id: number, private description: string, private location: string, private name: string, 
            private sportsFacility: SportsFacility) {}

    public get Id() : number {
        return this.id;
    }
    public set Id(v : number) {
        this.id = v;
    }
    
    public get Description() : string {
        return this.description;
    }
    public set Description(v : string) {
        this.description = v;
    }
    
    public get Location() : string {
        return this.location;
    }
    public set Location(v : string) {
        this.location = v;
    }
    
    public get Name() : string {
        return this.name;
    }
    public set Name(v : string) {
        this.name = v;
    }
    
    public get SportsFacility() : SportsFacility {
        return this.sportsFacility;
    }
    public set SportsFacility(v : SportsFacility) {
        this.sportsFacility = v;
    }
}