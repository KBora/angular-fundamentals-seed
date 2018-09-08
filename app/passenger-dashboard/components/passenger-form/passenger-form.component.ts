import { Component, Input} from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    template: `
        <div>
           <form>
            Form!
            <div>
                {{ detail | json }}
            </div>           
           </form>
        </div>
    `
})
export class PassengerFormComponent {
    @Input()
    detail: Passenger;
}