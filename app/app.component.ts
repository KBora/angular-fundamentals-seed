import { Component } from '@angular/core';

interface Child {
  name: string,
  age: number
}

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkedInDate: number | null,
  children: Child[] | null
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">  
      <passenger-dashboard></passenger-dashboard>
    </div>   
  `
})
export class AppComponent {
  passengers: Passenger[] = [ {
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
