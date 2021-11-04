import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { ShowListComponent } from './show-list.component';
import { AppHttpService } from './../services/app-http.service';

describe('ShowListComponent', () => {
  let component: ShowListComponent;
  let fixture: ComponentFixture<ShowListComponent>;
  let httpTestingController: HttpTestingController;
  let service :AppHttpService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowListComponent ],
      imports: [HttpClientTestingModule],
      providers: [AppHttpService]
    })
    .compileComponents();
    service = TestBed.inject(AppHttpService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 const show = [{
    "id": 1,
    "url": "https://www.tvmaze.com/shows/1/under-the-dome",
    "name": "Under the Dome",
    "type": "Scripted",
    "language": "English",
    "genres": [
      "Drama",
      "Science-Fiction",
      "Thriller"
    ],
    "status": "Ended",
    "runtime": 60,
    "averageRuntime": 60,
    "premiered": "2013-06-24",
    "ended": "2015-09-10",
    "officialSite": "http://www.cbs.com/shows/under-the-dome/",
    "schedule": {
      "time": "22:00",
      "days": [
        "Thursday"
      ]
    },
    "rating": {
      "average": 6.5
    },
    "weight": 98,
    "network": {
      "id": 2,
      "name": "CBS",
      "country": {
        "name": "United States",
        "code": "US",
        "timezone": "America/New_York"
      }
    },
    "webChannel": null,
    "dvdCountry": null,
    "externals": {
      "tvrage": 25988,
      "thetvdb": 264492,
      "imdb": "tt1553656"
    },
    "image": {
      "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
      "original": "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
    },
    "summary": "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
    "updated": 1631010933,
    "_links": {
      "self": {
        "href": "https://api.tvmaze.com/shows/1"
      },
      "previousepisode": {
        "href": "https://api.tvmaze.com/episodes/185054"
      }
    }

  }]
  it('should have getData function', () => {
    const service: AppHttpService = TestBed.get(AppHttpService);
    expect(service.getData).toBeTruthy();
   });


  it('should call getAllBooks and return an array of Books', () => {
    // 1
  service.getData("https://api.tvmaze.com/shows").subscribe((res) => {
        //2
  expect(res).toEqual(show);
});
    //3
const req = httpTestingController.expectOne({
  method: 'GET',
  url: "https://api.tvmaze.com/shows",
});
    //4
req.flush(show);
});


  // httpTestingController = TestBed.get(HttpTestingController);

});

