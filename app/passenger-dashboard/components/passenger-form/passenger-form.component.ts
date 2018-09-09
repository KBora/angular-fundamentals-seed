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
                        type="checkbox"
                        name="checkedIn"
                        [ngModel]="detail?.checkedIn"
                        (ngModelChange)="toggleCheckIn($event)">
                    Yes
                </label>

            </div>

     
            <div *ngIf="passengerForm.value.checkedIn">
                Check in date:
                <input 
                    type="number"
                    name="checkedInDate"
                    [ngModel]="detail?.checkedInDate">
            </div>
           
            {{ passengerForm.value | json }}       

           </form>
        </div>
    `
})
export class PassengerFormComponent {
    @Input()
    detail: Passenger;

    toggleCheckIn(checkedIn: boolean) {
        if (checkedIn) {
            this.detail.checkedInDate = Date.now(); // milliseconds
        }
    }
}