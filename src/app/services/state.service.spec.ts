import { TestBed } from '@angular/core/testing';
import { State } from './state.service';

describe('State', () => {
  let service: State;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(State);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
