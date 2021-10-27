import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstname:string='';
  lastname:string='';
  username:string='';
  password:string='';

  constructor(private user:UsersService,private router:Router,
    private toast:ToastrService) { }

  ngOnInit(): void {
  }
    register(){
      const data ={
        firstname: this.firstname,
        lastname: this.lastname,
        username: this.username,
        password: this.password,
      }
       this.user.registeruser(data);
       console.log(data,'success');
       this.toast.success('Registration success','status');
    }
    navigate(){
      this.router.navigate(['/login']);
    }
}
