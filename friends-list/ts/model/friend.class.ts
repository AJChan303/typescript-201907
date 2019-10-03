export class Friend{
    Name:string;
    Age:number;
    Email: string;
    Best: string;

    constructor(name:string ='', age:number=0, email:string='', best:string = 'n'){
        this.Name =name;
        this.Age =age;
        this.Email = email;
        this.Best = best;
    }
    About(f:Friend):string{
        return this.Name +' '+  this.Age+ ' '+ this.Email
    }
}