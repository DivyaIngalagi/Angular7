import { Component,DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-table',
  templateUrl: './app-table.component.html',
  styleUrls: ['./app-table.component.css']
})
export class AppTableComponent implements OnInit,DoCheck {
@Input() keyword:string="";
  constructor() { }

  ngOnInit(): void {
    this.refresh();
  }

  ngDoCheck(): void {
    this.refresh();
  }

  data=[
    {name:"Divya",age:"20",post:"Marketing Coordinator"},
    {name:"Sunita",age:"21",post:"Medical Assistant"},
    {name:"Anand",age:"22",post:"President oF Sales"},
    {name:"Manisha",age:"20",post:"Web Designer"},
    {name:"Hina",age:"65",post:"Data Analyst"},
    {name:"Iqra",age:"77",post:"Maintanence Check"},
];

items:any=[];



refresh(){
this.items=[];
this.data.forEach(
item=>{
if(
  item.name.search(this.keyword)!=-1
  ||item.age.search(this.keyword)!=-1
  ||item.post.search(this.keyword)!=-1
){
this.items.push(item);
}
}

)

}

}
