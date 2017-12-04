import { Component, OnInit } from '@angular/core';

/* services */
import { ClientDataService } from './../../shared/services/client-data.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  constructor(private clientDataService: ClientDataService) { }

  ngOnInit() {
    this.showTest('client name from data liist');
  }

  showTest(data) {
    //console.log('test from parent + ' + data);
    this.clientDataService.Stream.next(data);
  }

}
console.log('lazy load client');
