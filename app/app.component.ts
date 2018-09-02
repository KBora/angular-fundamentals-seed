import { Component } from '@angular/core';

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkedInDate: number | null
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let p of passengers; let i = index;">
          <span 
            class="status"
            [class.checked-in]="p.checkedIn"
            >
          </span>
            {{ i }}: {{ p.fullname }}
          <p>{{ p | json }} </p>
        </li>
      </ul>
  

    </div>   
  `
})
export class AppComponent {
  passengers: Passenger[] = [ {
    id: 1,
    fullname: 'Stephen',
    checkedIn: true,
    checkedInDate: 1490742000000
  },
  {
    id: 2,
    fullname: 'Rose',
    checkedIn: false,
    checkedInDate: null
  },
  {
    id: 3,
    fullname: 'Bobby',
    checkedIn: true,
    checkedInDate: 1491606000000
  },
  {
    id: 4,
    fullname: 'Vishnu',
    checkedIn: true,
    checkedInDate: 1488412800000
  }
  ]
}
