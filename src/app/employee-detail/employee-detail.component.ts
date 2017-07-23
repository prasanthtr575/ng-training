import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';

@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
  providers: [DataService]
})
export class EmployeeDetailComponent implements OnInit {
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
