export class AuthenticatedUser{
    email: string;
    firstName:string;
    lastName: string
    age:number;
    telNumber:string;
   
    constructor(email: string, firstName: string, lastName: string,telNumber: string, age:number){
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.telNumber=telNumber;
        this.age=age;
    }
}