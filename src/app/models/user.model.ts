export class User {

    constructor(private id: string, private Email: string, private Username: string) {}

    public get Id() : string {
        return this.id;
    }
    public set Id(v : string) {
        this.id = v;
    }

    public get email() : string {
        return this.Email;
    }
    public set email(v : string) {
        this.Email = v;
    }

    public get username() : string {
        return this.Username;
    }
    public set username(v : string) {
        this.Username = v;
    }

}
