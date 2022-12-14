import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.css']
})
export class AppSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Output() emitter:EventEmitter<string>=new EventEmitter();
  emit(keyword:string){
      this.emitter.emit(keyword);
  }

}
