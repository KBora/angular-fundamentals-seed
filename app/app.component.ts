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
}
