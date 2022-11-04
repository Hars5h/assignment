import { Component, OnInit ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  count=0;
  @Output() countChange: EventEmitter<number>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  incrementNumber(){
    this.count++;
    this.countChange.emit(this.count)
  }
  decrementNumber(){
    this.count--;
    this.countChange.emit(this.count);
  }
}
