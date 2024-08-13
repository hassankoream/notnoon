import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
    {path: '', redirectTo: "home", pathMatch: 'full'},
    {path: 'home', component: ProductsComponent, title: 'Home'},   
    {path: '**', component: NotfoundComponent, title: '404'},
];
