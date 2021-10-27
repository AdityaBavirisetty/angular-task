import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-todo';
  constructor(private router:Router){}
  getform(value:string){
    if(value=="register"){
      this.router.navigate(['/register']);
    }
    if(value=="login"){
      this.router.navigate(['/login']);
    }
  }
}
