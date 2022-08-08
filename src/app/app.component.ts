import { AfterViewInit, ChangeDetectorRef, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Child2Component } from './child2/child2.component';
import { Person } from './person';
import { RowComponent } from './row/row.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  title = 'ParentChildDataTransfer';
  Test = "From Parent";
  Test2 = "From Parent";
  childData: Person = new Person();
  childData2!: any;
  isRight: boolean = true;
  arr: any[10] = [1,2,3,4,5,6,7,8,9,10]

  @ViewChild(Child2Component) child2Component!: Child2Component;
  @ViewChildren("row") rows! : QueryList<RowComponent>;

  constructor(private cd:ChangeDetectorRef){}

  ngAfterViewInit(): void {
    this.rows.forEach(r => {r.data = r.data + ">"});
    this.isRight = this.child2Component.isRight;
    this.cd.detectChanges();
  }

  FromChild(value: any){
    this.childData = value;
  }

  FromChild2(value: any){
    this.childData2 = value;
  }

  ChangeCheck(){
    this.child2Component.isRight = !this.child2Component.isRight;
  }
}
