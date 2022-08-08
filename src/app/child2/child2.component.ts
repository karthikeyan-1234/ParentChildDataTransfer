import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Input() parentData:any;
  @Output() pushDataToParent= new EventEmitter<string>();
  isRight: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  SendData2Parent(){
    this.pushDataToParent.emit("From Child 2");
  }

}
