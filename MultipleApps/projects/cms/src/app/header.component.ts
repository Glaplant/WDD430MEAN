import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./app.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() selectedFeatureEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(selectedEvent:string){
    this.selectedFeatureEvent.emit(selectedEvent);

}

}
