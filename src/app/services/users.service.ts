import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  customers:any=[
    {
      firstname:'aditya',
      lastname:'bavirisetty',
      username:"aditya",
      password: "@dity@"
    },
    {
      firstname:'premu',
      lastname:'bavirisetty',
      username:"premu",
      password: "premu@123"

    }
  ]

  constructor() { }

  registeruser(data:any){
        this.customers.push(data);
        console.log(this.customers,'ggfgf');

  }
}
