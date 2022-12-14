import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Third-Assignment';
  parentstring:string="Parent Data";
  getChildMessage(data:string){
    console.log(data);
  }
}
