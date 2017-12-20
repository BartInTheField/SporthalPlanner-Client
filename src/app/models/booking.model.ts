import { SportsHallField } from './sportsHallField.model';
import { User } from './user.model';

export class Booking {

    constructor(private id: number, private day: Date, private startingTime: string, private endingTime: string,
                private sportsHallField: SportsHallField, private status: number, private user: User) {}

    public get Id(): number {
        return this.id;
    }
    public set Id(v: number) {
        this.id = v;
    }

    public get Day(): Date {
        return this.day;
    }
    public set Day(v: Date) {
        this.day = v;
    }

    public get StartingTime(): string {
        return this.startingTime;
    }
    public set StartingTime(v: string) {
        this.startingTime = v;
    }

    public get EndingTime(): string {
        return this.endingTime;
    }
    public set EndingTime(v: string) {
        this.endingTime = v;
    }

    public get SportsHallField(): SportsHallField {
        return this.sportsHallField;
    }
    public set SportsHallField(v: SportsHallField) {
        this.sportsHallField = v;
    }

    public get Status(): number {
        return this.status;
    }
    public set Status(v: number) {
        this.status = v;
    }

    public get User(): User {
        return this.user;
    }
    public set User(v: User) {
        this.user = v;
    }
}
