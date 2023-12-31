export class Client {
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public email: string,
        public phone: number,
        public adress: string,
        public created_at: Date,
        public password: string,
        public gerant: boolean
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.adress = adress;
        this.created_at = created_at;
        this.password = password;
        this.gerant = gerant;
    }
}
