import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

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

        // switchMap reacts to values being emitted form the outer observable (change in URL)
        // upon which it will trigger the inner observable () and emit the results of the inner one
        // in other words, it 'switches' them
        // it also cancels all previous events.  common use case: type aheads
        this.route.params
        .switchMap((data: Passenger) => this.passengerService.getPassenger(data.id))
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