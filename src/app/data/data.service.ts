import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {
  private _url = 'assets/api/data.json';

  constructor (private _http: Http) {}

  getEmployees() {
    return this._http.get(this._url)
            .map((response: Response) => response.json())
            .catch(this._handleError)
  }

  _handleError (error: Error) {
    return Observable.throw(error || "Service Error");
  } 

}
