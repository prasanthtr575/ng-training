import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userForm: FormGroup;

  constructor (private _formBuilder: FormBuilder) {}

  ngOnInit () {
    this.userForm = this._formBuilder.group({
      name: ['Qwerty', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
      email: [],
      address: this._formBuilder.group({
        street: [],
        city: [],
        postalCode: []
      })
    })
  }

  onSubmit () {
    console.log(this.userForm.value);
  }
}
