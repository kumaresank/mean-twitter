/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TwitsService } from './twits.service';

describe('TwitsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwitsService]
    });
  });

  it('should ...', inject([TwitsService], (service: TwitsService) => {
    expect(service).toBeTruthy();
  }));
});
