import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class DataService implements OnInit {

  private data;

  constructor(private http: Http) { }

  ngOnInit() {

    this.getData();

  }

  getData() {
// use Observable pattern
	if (this.data === undefined) {

	  console.log('Data is undefined');

      this.http.get('../../../../assets/data/data.json')
        .map((res:Response) => res.json())
        .subscribe(
          data => { this.data = data },
          err => console.error(err),
          () => console.log('done')
        );

	} else {

	  console.log('Data exists');

	}

  }

}
