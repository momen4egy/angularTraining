import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-client-image',
  templateUrl: './client-image.component.html',
  styleUrls: ['./client-image.component.css']
})
export class ClientImageComponent implements OnInit {

  @Output() customEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClick(data) {
    this.customEvent.emit(data);
  }

}
