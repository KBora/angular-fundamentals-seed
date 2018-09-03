import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  
    selector: 'passenger-count',
    template: `
        <div>
           <h3>Airline Passengers</h3>
           <div>
            Total passengers: {{ items.length }}
           </div>
        </div>
    `

   
})

export class PassengerCountComponent {
    @Input()
    items: Passenger[];
    constructor() {}
}
