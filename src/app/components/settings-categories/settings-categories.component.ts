import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data/data.service';
import { FaDirective } from 'angular2-fontawesome/directives';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-settings-categories',
  templateUrl: 'settings-categories.component.html',
  styleUrls: [
    'settings-categories.component.css',
    '../../../vendor/angular2-fontawesome/node_modules/font-awesome/css/font-awesome.css'
  ]
})
export class SettingsCategoriesComponent implements OnInit {

  private model;

  private catsCits = null;

  constructor(
    private dataService: DataService,
    private router: Router) { }

  ngOnInit() {

    this.initModel();

  }

  initModel() {

    this.dataService.data.subscribe(data => {

      this.catsCits = data["catsCits"];

      this.initModelSubscribe();

    });

  }

  initModelSubscribe() {

  }

  goToCategories() {

    this.router.navigate(['categories']);

  }

}
