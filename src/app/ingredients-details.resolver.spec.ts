import { TestBed } from '@angular/core/testing';

import { IngredientsDetailsResolver } from './ingredients-details.resolver';

describe('IngredientsDetailsResolver', () => {
  let resolver: IngredientsDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(IngredientsDetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
