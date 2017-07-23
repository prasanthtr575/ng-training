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
  error: String;
  constructor(private _data: DataService) {}

  ngOnInit() {
    this._data.getEmployees().subscribe(
      data => this.employees = data.employees,
      error => this.error = error
    );
  }

}
