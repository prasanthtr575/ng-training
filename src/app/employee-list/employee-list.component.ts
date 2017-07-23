import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [DataService]
})
export class EmployeeListComponent implements OnInit {
  employees: any[];
  constructor(private _data: DataService) {}

  ngOnInit() {
    this.employees = this._data.getEmployees();
  }

}
