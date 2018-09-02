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
  }

  ]
}
