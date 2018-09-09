import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    // angular modules
    BrowserModule,
    RouterModule.forRoot(routes),
    // custom modules
    PassengerDashboardModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ]
})
export class AppModule {}
