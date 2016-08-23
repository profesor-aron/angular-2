import { Injectable } from '@angular/core';

@Injectable()
export class ToolService {

  constructor() { }

  getRowsByFunctionAndLength(func, nb) {

    var rows = [];

    for (var index = 0; index < nb; index++) {
        rows.push(func(index));
    }

    return rows;
  }

  changeIsVisible(value) {
    return (value ? 0 : 1);
  }

}
