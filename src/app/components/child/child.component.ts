import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';
import { Student } from 'src/app/interface/student';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() stuInfo!:Student[];
  @Output() clickStudent:EventEmitter<any>=new EventEmitter();
  studentClicked:any = [];
  constructor() { }

  ngOnInit(): void {
  }

  getClass(e:boolean){
    if(e){
      return 'even';
    }else{
      return 'odd';
    }
  }
  deleteData(deleteUser:any){
    this.stuInfo.splice(deleteUser,1);

  }
  getUser(index:number){
    this.studentClicked.push(this.stuInfo[index]); 
    this.clickStudent.emit(this.studentClicked)
  }
}
