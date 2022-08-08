import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  person1: Person = new Person();
  @Input() 
    set parentData(value: Person){this.person1= {...value}};
    get parentData():Person{return this.person1};
  @Output() sendData = new EventEmitter<Person>();

  constructor() { }

  ngOnInit(): void {
  }

  SendData2Parent(){
    this.person1.name = "Person 1";
    this.person1.age = 10;
    this.sendData.emit(this.person1);
  }

}
