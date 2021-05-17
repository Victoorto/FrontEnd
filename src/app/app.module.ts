import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CarService } from './services/car.service';
import {Routes, RouterModule} from '@angular/router';

// From more specific to generic 
const routes: Routes = [
  {path: 'car_type/:type', component: CarListComponent},
  {path: 'car_type', component: CarListComponent},
  {path: 'cars', component: CarListComponent},
  {path: '', redirectTo: '/car', pathMatch: 'full' },
  {path: '**',  redirectTo: '/car', pathMatch: 'full'},
  
];


@NgModule({
  declarations: [
    AppComponent,
    CarListComponent

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
