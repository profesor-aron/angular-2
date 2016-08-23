import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data/data.service';
import { FaDirective } from 'angular2-fontawesome/directives';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-categories',
  templateUrl: 'categories.component.html',
  styleUrls: [
    'categories.component.css',
    '../../../vendor/angular2-fontawesome/node_modules/font-awesome/css/font-awesome.css'
  ],
  directives: [FaDirective]
})
export class CategoriesComponent implements OnInit {

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

    var categories = this.filterCategoriesByIsVisible();

    this.model = {};
    this.model.rows = [];
    this.model.rows.push([]);

    var count = 0;
    let nbColumns = 2;
    let nbCategories = categories.length;

    for (var index = 0; index < nbCategories; index++) {
      var cols = this.model.rows[this.model.rows.length - 1];
      if (count < nbColumns) {
        cols.push(categories[index]);
        count++;
      } else {
        this.model.rows.push([categories[index]]);
        count = 1;
      }
    }

    console.log(this.model.rows);

  }

  filterCategoriesByIsVisible() {

    var categories = [];

    this.catsCits.forEach(function(category) {
      if (category.is_visible) {
        categories.push(category);
      }
    });

    return categories;
  }

  goToCitation(idCategory) {

    this.router.navigate(['/citation/' + idCategory]);

  }

  goToSettingsCategories() {

    this.router.navigate(['settings-categories']);

  }

  goToSettingsLanguage() {

    this.router.navigate(['settings-language']);

  }

}
