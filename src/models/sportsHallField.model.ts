import { Field } from "./field.model";
import { SportsHall } from "./sportsHall.model";

export class SportsHallField {
    
    constructor(private id: number, private amountOfFields: number, private price: number, private field: Field,
                private sportsHall: SportsHall) {}

    public get Id() : number {
        return this.id;
    }
    public set Id(v : number) {
        this.id = v;
    }
    
    public get AmountOfFields() : number {
        return this.amountOfFields;
    }
    public set AmountOfFields(v : number) {
        this.amountOfFields = v;
    }
    
    public get Price() : number {
        return this.price;
    }
    public set Price(v : number) {
        this.price = v;
    }
    
    public get Field() : Field {
        return this.field;
    }
    public set Field(v : Field) {
        this.field = v;
    }
    
    public get SportsHall() : SportsHall {
        return this.sportsHall;
    }
    public set SportsHall(v : SportsHall) {
        this.sportsHall = v;
    }
}