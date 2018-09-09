import { Component, OnInit } from '@angular/core';

import { PassengerDashboardService } from '../../passenger-dashboard.service'

import { Passenger } from '../../models/passenger.interface';
import { Router } from '@angular/router';

@Component({
    selector: 'passenger-dashboard',
    template:  `
        <div>
            <passenger-count
              [items]="passengers"
            ></passenger-count>

            <div *ngFor="let passenger of passengers;">
              {{ passenger.fullname }}
            </div>

            <passenger-detail
              *ngFor="let passenger of passengers;"
              [detail]="passenger"
              (view)="handleView($event)"
              (edit)="handleEdit($event)"
              (remove)="handleRemove($event)"
              ></passenger-detail>        

        </div>
    `
})

export class PassengerDashboardComponent  implements OnInit {
    passengers: Passenger[];

    constructor(
      private router: Router,
      private passengerService: PassengerDashboardService
    ) {}

    ngOnInit() {
        console.log('PassengerDashboardComponent: ngOnInit');
        this.passengerService
          .getPassengers()
          .subscribe((data: Passenger[]) => this.passengers = data);
    }

    handleView(event: Passenger) {
      console.log('handleView');

      // use dynamic imperative routing to go to passenger (params are appended to URL)
      this.router.navigate(['/passengers', event.id])
      
    }

    handleEdit(event: Passenger) {
      console.log('handleEdit');

      this.passengerService
        .updatePassenger(event)
        .subscribe((data: Passenger) => {
          this.passengers = this.passengers.map((passenger: Passenger) => {
            if(passenger.id === event.id) {
              passenger = Object.assign({}, passenger, event);
            }
            return passenger;
          });
        });      
    }

    handleRemove(event: Passenger) {
      console.log('handleRemove');

      this.passengerService
        .removePassenger(event)
        .subscribe((data: Passenger) => {          
          this.passengers = this.passengers.filter( (passenger: Passenger) => {
            return passenger.id !== event.id
          });
      });

     
    }


}