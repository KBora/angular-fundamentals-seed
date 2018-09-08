import { Component, Input} from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    template: `
        <div>
           <form #passengerForm="ngForm" novalidate>
            {{ detail | json }}
            <div>
                Passenger name:
                <input 
                    type="text"
                    name="fullname"                    
                    [ngModel]="detail?.fullname">
            </div>
            <div>
                Passenger ID:
                <input 
                    type="number"
                    name="id"                    
                    [ngModel]="detail?.id">
            </div> 

            <div>
                <label>
                    <input
                        type="radio"
                        [value]="true"
                        name="checkedIn"
                        [ngModel]="detail?.checkedIn">
                    Yes
                </label>

                <label>
                    <input
                    type="radio"
                    [value]="false"
                    name="checkedIn"
                    [ngModel]="detail?.checkedIn">
                    No
                </label>
            </div>



            {{ passengerForm.value | json }}       
           </form>
        </div>
    `
})
export class PassengerFormComponent {
    @Input()
    detail: Passenger;
}