import { TestBed } from '@angular/core/testing';
import { Bowl } from './bowl.service';

describe('Bowl', () => {
  let service: Bowl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Bowl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
