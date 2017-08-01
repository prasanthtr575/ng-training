import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  childData: string;

  constructor() { }

  ngOnInit() {
  }

  onChildEmits(event) {
    this.childData = event;
  }

}
