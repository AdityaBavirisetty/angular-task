import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string='';
  password:string='';
  users:any;

  constructor(private user:UsersService,
              private route:Router,
              private toastr:ToastrService) { }

  ngOnInit(): void {
    this.users=this.user.customers;
    
  }
  sub(){
    console.log('out')
     const data = this.users.filter((obj:any)=>obj.username == this.username && obj.password==this.password);
     if(data.length>=1){
      sessionStorage.setItem('dataSource', 'userlogined');
      this.toastr.success('Login successfull');
       this.route.navigate(['/task']);
     }else{
       console.log(this.password,this.username);
       this.toastr.error('Invalid Creditionals/user not registered','status');
       this.route.navigate(['/login']);
     }
    
  }
  navigate(){
    this.route.navigate(['/register']);
  }
  


}
