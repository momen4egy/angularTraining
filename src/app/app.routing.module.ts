import {NgModule} from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {MyCustomPreloader} from './app.routing.loader';

// Note: no import from the various components. Only references to
// the modules, containing the components
const routes: Routes = [
    {path: '', redirectTo: 'clients', pathMatch: 'full'},
    {
        path: 'clients',
        loadChildren: './client/client.module#ClientModule',
        data: { preloading: true }
    },
    {
        path: 'products',
        loadChildren: './product/product.module#ProductModule'
    }
];

const config: ExtraOptions = {
    useHash: false,
    enableTracing: false, // turn on for console.logging of routing events
    preloadingStrategy: MyCustomPreloader // uncomment to load all modules lazily
};

@NgModule({
    imports  : [RouterModule.forRoot(routes, config)],
    exports  : [RouterModule],
    providers: [MyCustomPreloader]
})
export class AppRoutingModule {
}
