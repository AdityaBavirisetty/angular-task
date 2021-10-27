import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
   task:string=''
  //  tasks:string[]=['first'];
   tasks:any[]=[
     {
       content:"first box",
       completed:false
     }
   ];
   addtodo:boolean=true;
  constructor(private router:Router,
    private toast:ToastrService) { }

  ngOnInit(): void {
    const storage=sessionStorage.getItem('dataSource');
    
    if(storage != 'userlogined'){
       this.router.navigate(['/login']);
    }
  }
  
  sub(){
    this.tasks.push({
      content: this.task,
      completed: false
    }
      );
    console.log(this.tasks);
    this.task='';
    // this.addtodo=!this.addtodo;
    this.toast.success('Task added','status');
  }
  logout(){
    sessionStorage.setItem('dataSource', '');
    this.toast.success('logout successfull','status');
    this.router.navigate(['/login']);

  }
  deleteTask (id:number) {
    this.tasks = this.tasks.filter((v, i) => i !== id);
    this.toast.success('Task deleted','status');
  }
  addtask(){
    this.addtodo=!this.addtodo;
    console.log(this.addtodo);
  }
  completed(id:number){
    this.tasks = this.tasks.map((v, i) => {
      if(i==id)v.completed=!v.completed;
      this.toast.success('Task completed','status');
      return v;
    });
    console.log(this.tasks);
    
  }
  
  

}
