export class Field {

    constructor(private id: number, private sport: string) { }

    public get Id() : number {
        return this.id;
    }
    
    public set Id(v : number) {
        this.id = v;
    }
    
    public get Sport() : string {
        return this.sport;
    }

    public set Sport(v : string) {
        this.sport = v;
    }
}