import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() parentData: any;
  @Output() sendData = new EventEmitter<Person>();
  person1: Person = new Person();

  constructor() { }

  ngOnInit(): void {
  }

  SendData2Parent(){
    this.person1.name = "Person 1";
    this.person1.age = 10;
    this.sendData.emit(this.person1);
  }

}
