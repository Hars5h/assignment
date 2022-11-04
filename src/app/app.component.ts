import { Component } from '@angular/core';
import { Student } from './interface/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'evevt';
  Counter!:number;
  stuList!:Student[];

  getChildUsers:any = [];
  stuData:Student[] = [
    {
      id: 1,
      fname: 'Kunal',
      lname: 'Gupta',
      age: 22,
      stream: 'Trainer'
    },
    {
      id: 2,
      fname: 'Priya ',
      lname: 'Soni',
      age: 28,
      stream: 'HR'
    },
    {
      id: 3,
      fname: 'Shakti',
      lname: 'Singh',
      age: 24,
      stream: 'frontend'
    },
    {
      id: 4,
      fname: 'Harsh',
      lname: 'Srivastava',
      age: 25,
      stream: 'frontend'
    },
    {
      id: 5,
      fname: 'Sandeep',
      lname: 'Yadav',
      age: 28,
      stream: 'Backend'
    },
  ]
  sendData(){
    this.stuList = this.stuData;
  }
  eventHandler(item:any){
    console.log(item);
    this.getChildUsers.push(item);
  }
  countHandle(count:number){
    this.Counter=count;
  }

}
