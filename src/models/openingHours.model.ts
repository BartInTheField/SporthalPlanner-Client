export class OpeningHours {
    
    constructor(private id: number, private monday: string, private tuesday: string, private wednesday: string,
                private thursday: string, private friday: string, private saturday: string, private sunday: string) {}

    public get Id() : number {
        return this.id;
    }
    public set Id(v : number) {
        this.id = v;
    }       
    
    public get Monday() : string {
        return this.monday;
    }
    public set Monday(v : string) {
        this.monday = v;
    }
    
    public get Tuesday() : string {
        return this.tuesday;
    }
    public set Tuesday(v : string) {
        this.tuesday = v;
    }
    
    public get Wednesday() : string {
        return this.wednesday;
    }
    public set Wednesday(v : string) {
        this.wednesday = v;
    }
    
    public get Thursday() : string {
        return this.thursday;
    }
    public set Thursday(v : string) {
        this.thursday = v;
    }
    
    public get Friday() : string {
        return this.friday;
    }
    public set Friday(v : string) {
        this.friday = v;
    }
    
    public get Saturday() : string {
        return this.saturday;
    }
    public set Saturday(v : string) {
        this.saturday = v;
    }
    
    public get Sunday() : string {
        return this.sunday;
    }
    public set Sunday(v : string) {
        this.sunday = v;
    }
    
}