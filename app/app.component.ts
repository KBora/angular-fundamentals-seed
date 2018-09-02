import { Component } from '@angular/core';

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean
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
        </li>
      </ul>
      <hr>
      <ul>
        <li *ngFor="let p of passengers; let i = index;">
          <span 
            class="status"
            [ngClass]="{ 
              'checked-in': p.checkedIn,
              'checked-out': !p.checkedIn
            }"
            >
          </span>
            {{ i }}: {{ p.fullname }}
        </li>
      </ul>


    </div>   
  `
})
export class AppComponent {
  passengers: Passenger[] = [ {
    id: 1,
    fullname: 'Stephen',
    checkedIn: true
  },
  {
    id: 2,
    fullname: 'Rose',
    checkedIn: false
  },
  {
    id: 3,
    fullname: 'Bobby',
    checkedIn: true
  },
  {
    id: 4,
    fullname: 'Vishnu',
    checkedIn: true
  }
  ]
}
