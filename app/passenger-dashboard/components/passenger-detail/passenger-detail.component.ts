import { Component, Input, Output, EventEmitter, OnChanges, OnInit} from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    template: `
        <div>
            <span 
            class="status"
            [class.checked-in]="detail.checkedIn"
            >
            </span>
            <div *ngIf="editing">
                <input 
                    type="text" 
                    [value]="detail.fullname"
                    (input)="onNameChange(name.value)"
                    #name
                    >
            </div>
            <div *ngIf="!editing">
                {{ detail.fullname }}
            </div>

        <div class="date">
            Check in date: 
            {{ detail.checkedIn ? (detail.checkedInDate | date: 'yMMMMd' | uppercase )  : 'Not checked in' }}
        </div> 
                
        <button (click)="toggleEdit()">
            {{ editing ? 'Done' : 'Edit' }}
        </button>
        
        <button (click)="onRemove()">
            Remove
        </button>

        </div>
    `

   
})

export class PassengerDetailComponent implements OnChanges, OnInit {
    @Input()
    detail: Passenger;

    @Output()
    edit: EventEmitter<any> = new EventEmitter();

    @Output()
    remove: EventEmitter<any> = new EventEmitter();

    editing: boolean = false;

    constructor() {}

    ngOnChanges( changes ) {
        console.log(changes);
        if (changes.detail) {
            this.detail = Object.assign({}, changes.detail.currentValue);
        }
        console.log('passenger-detail.compoment - ngOnChanges')
    }

    ngOnInit() {
        console.log('passenger-detail.compoment - ngOnInit')
    }

    onNameChange(value: string) {
        this.detail.fullname = value;
    }

    toggleEdit() {
        if (this.editing) {
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing;
    }

    onRemove() {
        // cannot remove the passenger via this component as it is dumb
        // have to send a message back to parent
        this.remove.emit(this.detail); // this.detail is the passenger we have locally edited/removed
    }
}
