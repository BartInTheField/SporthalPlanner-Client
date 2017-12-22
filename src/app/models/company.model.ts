export class Company {

    constructor(private id: number, private name: string) {}

    public get Id(): number{
        return this.id;
    }

    public set Id(v: number){
        this.id = v;
    }

    public get Name() : string {
        return this.name;
    }
    
    public set Name(v : string) {
        this.name = v;
    }
}