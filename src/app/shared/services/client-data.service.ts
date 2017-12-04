import {Subject} from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class ClientDataService {

  Stream: Subject<String>;

  constructor() {
    this.Stream = new Subject<String>();
  }

}
