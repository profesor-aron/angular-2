import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data/data.service';
import { ToolService } from '../../shared/services/tool/tool.service';
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
    private toolService: ToolService,
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

    this.model = {};
    this.model.categories = this.catsCits;

    this.updateSelectAllCategories();

  }

  updateSelectAllCategories() {

    var categories = this.getCategories();

    var count = 0;
    let nbCategories = categories.length;

    categories.forEach(function(category) {
      count += category.is_visible;
    });

    if (count === nbCategories) {
      this.model.selectAllCategories = 1; // true
    } else {
      this.model.selectAllCategories = 0; // false
    }

  }

  getCategories() {
    return this.model.categories;
  }

  goToCategories() {

    this.router.navigate(['categories']);

  }

  updateCategoryByIsVisible(category) {

    category.is_visible = this.toolService.changeIsVisible(category.is_visible);

    this.updateSelectAllCategories();

  }

  updateCategoriesBySelectAll() {

    var self = this;

    var categories = self.getCategories();

    self.model.selectAllCategories = self.toolService.changeIsVisible(self.model.selectAllCategories);

    categories.forEach(function(category) {
      category.is_visible = self.model.selectAllCategories;
    });

  }

}
