export class Message {
    message? : string;
    sender :User;
    receiver?:User;
    constructor(
  
    ){
  
      this.sender=new User();
      this.receiver=new User();
    }
  }
  
  export class User{
      id?:string
      nom?: string
      prenom?: string
      gender?: string
      soldeAux?: Number
      passwordHash?:string
      profession?:string
      ville?:string
      image?: string;
  }