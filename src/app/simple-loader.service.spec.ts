/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SimpleLoaderService } from './simple-loader.service';

describe('Service: SimpleLoader', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpleLoaderService]
    });
  });

  it('should ...', inject([SimpleLoaderService], (service: SimpleLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
