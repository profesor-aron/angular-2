import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/Rx';
import { asObservable } from '../commun/asObservable';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  private _data: BehaviorSubject<Object>;

  constructor(private http: Http) {

    this._data = new BehaviorSubject(Object);

    this.loadInitialData();
  }

  loadInitialData() {

    this.http.get('../../../../assets/data/data.json')
        .map((res:Response) => res.json())
        .subscribe(
          data => {
            this._data.next(data);
            //this._data.complete();
          },
          err => console.error('Error in loadInitialData(): ' + err),
          () => console.log('Done loadInitialData()')
        );

  }

  get data() {
    return asObservable(this._data);
  }

  upp(data2) {
    this._data.next(data2);
  }

}
