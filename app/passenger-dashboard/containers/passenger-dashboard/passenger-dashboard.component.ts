import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

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
              (edit)="handleEdit($event)"
              (remove)="handleRemove($event)"
              ></passenger-detail>        

        </div>
    `
})

export class PassengerDashboardComponent  implements OnInit {
    passengers: Passenger[];
    constructor() {}
    ngOnInit() {
        console.log('ngOnInit');
        this.passengers = [ {
            id: 1,
            fullname: 'Stephen',
            checkedIn: true,
            checkedInDate: 1490742000000,
            children: null
          },
          {
            id: 2,
            fullname: 'Rose',
            checkedIn: false,
            checkedInDate: null,
            children: [{ name: 'Jessica', age: 11}, { name: 'Ted', age: 3}]
          },
          {
            id: 3,
            fullname: 'Bobby',
            checkedIn: true,
            checkedInDate: 1491606000000,
            children: null
          },
          {
            id: 4,
            fullname: 'Vishnu',
            checkedIn: true,
            checkedInDate: 1488412800000,
            children: [{ name: 'Helen', age: 5} ]
          }
          ]
    }
    handleEdit(event: Passenger) {
      console.log(event);

      console.log(this.passengers);

      this.passengers = this.passengers.map((passenger: Passenger) => {
        if(passenger.id === event.id) {
          passenger = Object.assign({}, passenger, event);
        }
        return passenger;
      });
      
      console.log(this.passengers);
    }
    handleRemove(event: Passenger) {
      console.log(event);
      this.passengers = this.passengers.filter( (passenger: Passenger) => {
        return passenger.id !== event.id
      });
    }
}