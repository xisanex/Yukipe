import { TestBed } from '@angular/core/testing';

import { ListOfProductsService } from './list-of-products.service';

describe('ListOfProductsService', () => {
  let service: ListOfProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListOfProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
