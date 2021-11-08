import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ShowDetailComponent } from './show-detail.component';
import { AppHttpService } from './../services/app-http.service';
import { Observable, of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute,RouterOutlet } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';

describe('ShowDetailComponent', () => {
  let component: ShowDetailComponent;
  let fixture: ComponentFixture<ShowDetailComponent>;
  let service: AppHttpService;
  let httpTestingController: HttpTestingController;
  let route: ActivatedRoute;
  let httpClient: HttpClient;

  let baseUrl = 'https://api.tvmaze.com/shows/1';
  let show = {
    id: 1,
    url: 'https://www.tvmaze.com/shows/1/under-the-dome',
    name: 'Under the Dome',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Science-Fiction', 'Thriller'],
    status: 'Ended',
    runtime: 60,
    averageRuntime: 60,
    premiered: '2013-06-24',
    ended: '2015-09-10',
    officialSite: 'http://www.cbs.com/shows/under-the-dome/',
    schedule: {
      time: '22:00',
      days: ['Thursday'],
    },
    rating: {
      average: 6.5,
    },
    weight: 98,
    network: {
      id: 2,
      name: 'CBS',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 25988,
      thetvdb: 264492,
      imdb: 'tt1553656',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg',
    },
    summary:
      "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
    updated: 1631010933,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/1',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/185054',
      },
    },
  };

  // const appHttpServiceMock: Partial<AppHttpService> = {
  //   getData(url: string) {
  //     const show = [
  //       {
  //         id: 1,
  //         url: 'https://www.tvmaze.com/shows/1/under-the-dome',
  //         name: 'Under the Dome',
  //         type: 'Scripted',
  //         language: 'English',
  //         genres: ['Drama', 'Science-Fiction', 'Thriller'],
  //         status: 'Ended',
  //         runtime: 60,
  //         averageRuntime: 60,
  //         premiered: '2013-06-24',
  //         ended: '2015-09-10',
  //         officialSite: 'http://www.cbs.com/shows/under-the-dome/',
  //         schedule: {
  //           time: '22:00',
  //           days: ['Thursday'],
  //         },
  //         rating: {
  //           average: 6.5,
  //         },
  //         weight: 98,
  //         network: {
  //           id: 2,
  //           name: 'CBS',
  //           country: {
  //             name: 'United States',
  //             code: 'US',
  //             timezone: 'America/New_York',
  //           },
  //         },
  //         webChannel: null,
  //         dvdCountry: null,
  //         externals: {
  //           tvrage: 25988,
  //           thetvdb: 264492,
  //           imdb: 'tt1553656',
  //         },
  //         image: {
  //           medium:
  //             'https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg',
  //           original:
  //             'https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg',
  //         },
  //         summary:
  //           "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
  //         updated: 1631010933,
  //         _links: {
  //           self: {
  //             href: 'https://api.tvmaze.com/shows/1',
  //           },
  //           previousepisode: {
  //             href: 'https://api.tvmaze.com/episodes/185054',
  //           },
  //         },
  //       },
  //     ];
  //     return of(show);
  //   },
  // };
  const activatedRouteMock: { snapshot: { params: Observable<any> } } = {
    snapshot: {
      params: of({
        id: '1',
      }),
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowDetailComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      imports: [HttpClientTestingModule, RouterTestingModule, NgbModule],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteMock },
        RouterOutlet],
    }).compileComponents();
    service = TestBed.inject(AppHttpService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailComponent);
    route = TestBed.inject(ActivatedRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should test number of elements', () => {
    // given
    const restService = TestBed.inject(AppHttpService);
    spyOn(restService, 'getData').and.returnValue(of(show));

    // when
    component.getShowData();
    console.log(show, component.showDetail);
    // then
    expect(component.showDetail).toEqual(show);
  });
  // it('getDataByID test case ', () => {
  //   const service: AppHttpService =
  //     fixture.debugElement.injector.get(AppHttpService);
  //   spyOn(service, 'getData').and.callThrough();
  //   component.ngOnInit();
  //   expect(service.getData).toHaveBeenCalled();
  //   console.log(show, component.showDetail);

  //   expect(component.showDetail).toBe(show);
  // });
  // it('ngOnInit should make expected calls', () => {
  //   spyOn(component, 'getShowData').and.callThrough();
  //   component.ngOnInit();
  //   expect(component.getShowData).toHaveBeenCalled();
  // });


  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

});
