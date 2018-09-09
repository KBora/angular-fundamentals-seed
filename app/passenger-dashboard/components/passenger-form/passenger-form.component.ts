import { Component, Input} from '@angular/core';

import { Passenger } from '../../models/passenger.interface';
import { Baggage } from '../../models/baggage.interface';

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
                    required="true"
                    #fullname="ngModel"                    
                    [ngModel]="detail?.fullname">
                <div *ngIf="fullname.errors?.required" class="error">
                    Passenger name is required
                </div>
                {{ fullname.errors | json }}
            </div>
            <div>
                Passenger ID:
                <input 
                    type="number"
                    name="id"     
                    required="true"
                    #id="ngModel"              
                    [ngModel]="detail?.id">
                {{ id.errors | json }}
                
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
           
            <div>
                Luggage:
                <select
                    name="baggage"
                    [ngModel]="detail?.baggage">
                    <option
                        *ngFor="let item of baggage"
                        [value]="item.key"
                        [selected]="item.key === detail?.baggage">
                        {{ item.value }}
                    </option>
                </select>

            </div>

            <div>{{ passengerForm.value | json }}</div>
            <div>Valid: {{ passengerForm.valid | json }}</div>
            <div>Invalid: {{ passengerForm.invalid | json }}</div>
       
           </form>
        </div>
    `
})
export class PassengerFormComponent {
    @Input()
    detail: Passenger;

    baggage: Baggage[] = [{
        key: 'none',
        value: 'No baggage'
    },{
        key: 'hand-only',
        value: 'Hand baggage'
    },{
        key: 'hold-only',
        value: 'Hold baggage'
    },{
        key: 'hand-hold',
        value: 'Hand and hold baggage'
    }];

    toggleCheckIn(checkedIn: boolean) {
        if (checkedIn) {
            this.detail.checkedInDate = Date.now(); // milliseconds
        }
    }
}