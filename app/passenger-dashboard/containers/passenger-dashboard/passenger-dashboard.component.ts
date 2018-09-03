import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template:  `
        <div>
            <passenger-count></passenger-count>
            <passenger-detail></passenger-detail>
        <h3>Airline Passengers</h3>
        <ul>
          <li *ngFor="let passenger of passengers; let i = index;">
            <span 
              class="status"
              [class.checked-in]="passenger.checkedIn"
              >
            </span>
              {{ i }}: {{ passenger.fullname }}
            <p>{{ passenger | json }} </p>
            <div class="date">
              Check in date: 
              {{ passenger.checkedIn ? (passenger.checkedInDate | date: 'yMMMMd' | uppercase )  : 'Not checked in' }}
            </div> 
            <div class="children">
              Children: {{ passenger.children?.length || 0 }}
            </div>
          </li>
        </ul>
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
}