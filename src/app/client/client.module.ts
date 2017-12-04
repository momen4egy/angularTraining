import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from '@angular/router';

import { ClientListComponent } from './client-list/client-list.component';
import { ClientImageComponent } from './client-image/client-image.component';

const clientRoutes: Routes = [
  {path: '', component: ClientListComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(clientRoutes)
  ],
  declarations: [ClientListComponent, ClientImageComponent],
  exports: [ClientListComponent]
})
export class ClientModule { }
