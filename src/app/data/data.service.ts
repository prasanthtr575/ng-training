import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  getEmployees() {
    return [
      {"id": 1001, "name": "Alan", "gender": "Male"},
      {"id": 1002, "name": "Steve", "gender": "Male"},
      {"id": 1001, "name": "Anjana", "gender": "Female"},
      {"id": 1001, "name": "Lisa", "gender": "Female"},
      {"id": 1001, "name": "Mark", "gender": "Male"}
    ]
  }

}
