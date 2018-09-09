import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { PassengerDashboardService } from '../../passenger-dashboard.service';

import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-viewer',
    styleUrls: ['passenger-viewer.component.scss'],
    template: `
        <div>
            <passenger-form
                [detail]="passenger"
                (update)="onUpdatePassenger($event)"
            >
            </passenger-form>
        </div>
    `
})
export class PassengerViewerComponent implements OnInit {

    passenger: Passenger;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private passengerService: PassengerDashboardService
    ) {}

    ngOnInit() {
        this.route.params
        .subscribe((data: Params) => {
            console.log(data);
        })
        this.passengerService
            .getPassenger(1)
            .subscribe((data: Passenger) => this.passenger = data )
    }

    onUpdatePassenger(event: Passenger) {
        console.log('onUpdatePassenger, passenger-view.component')
        console.log(event);
        this.passengerService
            .updatePassenger(event)
            .subscribe((data: Passenger) => {
                this.passenger = Object.assign({}, this.passenger, event);
            })
    }

}