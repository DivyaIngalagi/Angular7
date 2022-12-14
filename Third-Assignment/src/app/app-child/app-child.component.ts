import { Component,  EventEmitter,  Input,  OnInit, Output } from '@angular/core';
import { ChildActivationEnd } from '@angular/router';

@Component({
  selector: 'app-app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.css']
})
export class AppChildComponent implements OnInit {
  @Input() childinput:string;
  @Output() childoutput:EventEmitter<string>=new EventEmitter();
  childmessage:string="Child Message";
  constructor() {
    this.childinput="";
   }

  ngOnInit(): void {
    console.log(this.childinput);
  }

  childEvent(){
    this.childoutput.emit(this.childmessage);
  }

}
