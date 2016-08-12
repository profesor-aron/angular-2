import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Router } from '@angular/router';

import { DataService } from './shared/services/data/data.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent implements OnInit {

  title = 'app works!';

  constructor(
    private dataService: DataService,
    private router:Router) {

    //this.router.navigate(['/categories']);

  }

  ngOnInit() {

    this.dataService.getData();

  }

}
