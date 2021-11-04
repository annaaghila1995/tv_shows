import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AppHttpService } from './app-http.service';

describe('AppHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [AppHttpService]
  }));
  it('should be created', () => {
    const service: AppHttpService = TestBed.get(AppHttpService);
    expect(service).toBeTruthy();
   });

   it('should have getData function', () => {
    const service: AppHttpService = TestBed.get(AppHttpService);
    expect(service.getData).toBeTruthy();
   });
});
