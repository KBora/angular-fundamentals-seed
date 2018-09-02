import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <input
        type="text"
        [value]="name"
        (input)="handleChange($event.target.value)"
      >

  <div>{{ name }}</div>
    </div>   
  `
})
export class AppComponent {
  name: string = 'Todd';

  handleChange(value: string) {
    console.log(value);
    this.name = value;
  }
}
