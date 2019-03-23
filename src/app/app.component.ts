import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bookingForm: FormGroup;
  state = 1;
  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      id: [],
      dest: [],
      vType: [],
      members: [],
      dur: [],
      email: [],
      name: [],
      contact: [],
    });
  }
}
