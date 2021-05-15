import { TestBed } from '@angular/core/testing';

import { StockHomeService } from './stock-home.service';

describe('StockHomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockHomeService = TestBed.get(StockHomeService);
    expect(service).toBeTruthy();
  });
});
