import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userForm;

  ngOnInit () {
    this.userForm = new FormGroup({
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl(""),
      gender: new FormControl("M")
    });
  }

  onSubmit (user) {
    console.log(user);
  }
}
