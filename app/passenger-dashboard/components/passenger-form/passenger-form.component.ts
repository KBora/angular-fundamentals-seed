import { Component, Input, Output, EventEmitter} from '@angular/core';

import { Passenger } from '../../models/passenger.interface';
import { Baggage } from '../../models/baggage.interface';

@Component({
    selector: 'passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    template: `
        <div>
           <form 
                (ngSubmit)="handleSubmit(passengerForm.value, passengerForm.valid)" 
                #passengerForm="ngForm"
                novalidate
            >

            {{ detail | json }}
            <div>
                Passenger name:
                <input 
                    type="text"
                    name="fullname"
                    required="true"
                    #fullname="ngModel"                    
                    [ngModel]="detail?.fullname">
                <div *ngIf="fullname.errors?.required && fullname.dirty" class="error">
                    Passenger name is required
                </div>
                
            </div>
            <div>
                Passenger ID:
                <input 
                    type="number"
                    name="id"     
                    required="true"                    
                    #id="ngModel"              
                    [ngModel]="detail?.id">
                    <div *ngIf="id.errors?.required && id.dirty" class="error">
                    ID is required
                </div>
                
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

            <button
                type="submit"
                [disabled]="passengerForm.invalid">
                Update passenger
            </button>
       
           </form>
        </div>
    `
})
export class PassengerFormComponent {
    @Input()
    detail: Passenger;

    @Output()
    update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

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

    handleSubmit(passenger: Passenger, isValid: boolean) { // the first argument is Passenger because we have structured the form inputs above in the template to match the Passenger interface
        if (isValid) { // additional check, in case user has inpsected DOM and changed button submit disabled property
            this.update.emit(passenger);
        }
    }
}