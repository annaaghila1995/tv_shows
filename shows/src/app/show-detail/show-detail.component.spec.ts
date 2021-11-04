import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailComponent } from './show-detail.component';
import { AppHttpService } from './../services/app-http.service';

describe('ShowDetailComponent', () => {
  let component: ShowDetailComponent;
  let fixture: ComponentFixture<ShowDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDetailComponent ],
      providers: [AppHttpService]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should have getData function', () => {
    const service: AppHttpService = TestBed.get(AppHttpService);
    expect(service.getData).toBeTruthy();
   });
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
