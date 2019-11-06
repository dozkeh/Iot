import { TestBed } from '@angular/core/testing';

import { SensordataService } from './sensordata.service';

describe('SensordataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SensordataService = TestBed.get(SensordataService);
    expect(service).toBeTruthy();
  });
});
