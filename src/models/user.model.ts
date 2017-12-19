export class User {

    constructor(private id: string, private email: string, private userName: string) {}

    public get Id() : string {
        return this.id;
    }
    public set Id(v : string) {
        this.id = v;
    }
    
    public get Email() : string {
        return this.email;
    }
    public set Email(v : string) {
        this.email = v;
    }
    
    public get UserName() : string {
        return this.userName;
    }
    public set UserName(v : string) {
        this.userName = v;
    }
        
}