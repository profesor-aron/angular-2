import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data/data.service';
import { ToolService } from '../../shared/services/tool/tool.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FaDirective } from 'angular2-fontawesome/directives';

@Component({
  moduleId: module.id,
  selector: 'app-citation',
  templateUrl: 'citation.component.html',
  styleUrls: [
    'citation.component.css',
    '../../../vendor/angular2-fontawesome/node_modules/font-awesome/css/font-awesome.css'
  ],
  directives: [FaDirective]
})
export class CitationComponent implements OnInit {

  private model;

  private catsCits = null;
  private indexCurrentCategory: number = 0;
  private indexCurrentCitation: number = 0;

  private paramsSub;

  constructor(
    private dataService: DataService,
    private toolService: ToolService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit() {

    this.initModel();

  }

  ngOnDestroy() {

    this.paramsSub.unsubscribe();

  }

  initModel() {

    this.dataService.data.subscribe(data => {

      this.catsCits = data["catsCits"];

      this.updateIndexCategoryAndCitation();

      this.generateCitationInfo();

    });

  }

  updateIndexCategoryAndCitation() {

    this.paramsSub = this.route.params.subscribe(params => {

      let idCategory = +params['idCategory'];

      this.updateIndexCategoryAndCitationSubscribe(idCategory);

    });

  }

  updateIndexCategoryAndCitationSubscribe(idCategory) {

    if (!isNaN(idCategory)) {

     var self = this;

      self.catsCits.forEach(function(category, index) {

        if (category.id === idCategory) {
          self.indexCurrentCategory = index;
          self.indexCurrentCitation = 0;
        }

      });

      //$state.params.idCategory = null;

    }

  }

  generateCitationInfo() {

    let category = this.catsCits[this.indexCurrentCategory];
    let citation = category.citations[this.indexCurrentCitation];

    this.model = {};
    this.model.idCitation = citation.id;
    this.model.nameCategory = category.name; 
    this.model.rangeCitation = (this.indexCurrentCitation + 1) + "/" +
      category.citations.length;
    this.model.contentCitation = citation.content;
    this.model.authorCitation = citation.author;

    this.model.imageIsLoved = citation.is_loved;

    this.generateCitationImageLoved();

  }

  generateCitationImageLoved() {

    let pathImageLoved = "assets/img/thumbs/";

    if (this.model.imageIsLoved) {
      this.model.imageLoved = pathImageLoved + "green-thumb.png";
    } else {
      this.model.imageLoved = pathImageLoved + "white-thumb.png";
    }

  }

  goToNextCitation() {

    let category = this.catsCits[this.indexCurrentCategory];

    if (this.indexCurrentCitation < category.citations.length - 1) {

      this.indexCurrentCitation += 1;

    } else {

      this.indexCurrentCitation = 0;

      if (this.indexCurrentCategory < this.catsCits.length - 1) {

        this.indexCurrentCategory += 1;

      } else {

        this.indexCurrentCategory = 0;

      }

    }

    this.generateCitationInfo();

  }

  goToPrecedentCitation() {

    if (this.indexCurrentCitation > 0) {

      this.indexCurrentCitation -= 1;

    } else {

      if (this.indexCurrentCategory > 0) {

        this.indexCurrentCategory -= 1;

      } else {

        this.indexCurrentCategory = this.catsCits.length - 1;

      }

      let category = this.catsCits[this.indexCurrentCategory];

      this.indexCurrentCitation = category.citations.length - 1;

    }

    this.generateCitationInfo();

  }

  goToCategories() {

    this.router.navigate(['/categories']);

  }

  updateCitationImageIsLoved() {

    this.model.imageIsLoved = this.toolService.changeIsVisible(this.isImageLoved());

    this.generateCitationImageLoved();

    this.updateCatsCitsByImageIsLove();

    this.updateNbCitationsLoved();
/*
    updateCitationDB();
*/
  }

  isImageLoved() {
    return this.model.imageIsLoved;
  }

  updateCatsCitsByImageIsLove() {

    let category = this.catsCits[this.indexCurrentCategory];
    let citation = category.citations[this.indexCurrentCitation];

    citation.is_loved = this.isImageLoved();

  }

  updateNbCitationsLoved() {

    this.catsCits.forEach(function(category) {

      var count = 0;

      category.citations.forEach(function(citation) {
        count += citation.is_loved;
      });

      category.nbCitationsLoved = count;

    });

  }

}
