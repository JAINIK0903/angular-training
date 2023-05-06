import { TestBed } from '@angular/core/testing';

import { CanDeactivateComponentService } from './can-deactivate-component.service';

describe('CanDeactivateComponentService', () => {
  let service: CanDeactivateComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanDeactivateComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
