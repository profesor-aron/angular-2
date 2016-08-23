/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ToolService } from './tool.service';

describe('Service: Tool', () => {
  beforeEach(() => {
    addProviders([ToolService]);
  });

  it('should ...',
    inject([ToolService],
      (service: ToolService) => {
        expect(service).toBeTruthy();
      }));
});
