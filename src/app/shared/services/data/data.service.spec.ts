/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { DataService } from './data.service';

describe('Service: DataService', () => {
  beforeEach(() => {
    addProviders([DataService]);
  });

  it('should ...',
    inject([DataService],
      (service: DataService) => {
        expect(service).toBeTruthy();
      }));
});
