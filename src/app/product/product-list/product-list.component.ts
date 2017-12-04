import { Component, OnInit } from '@angular/core';

/* services */
import { ClientDataService } from './../../shared/services/client-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private clientDataService: ClientDataService) { }

  ngOnInit() {

      // waarom wordt de console alleen getoond als je van products naar clients switched??
      this.clientDataService.Stream.subscribe(
        (data) => console.log('in product list ' + data),
        (error) => console.log(error)
      );
  }

}
console.log('lazy load product');
