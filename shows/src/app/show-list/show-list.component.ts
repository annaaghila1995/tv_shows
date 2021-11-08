import { Component, OnInit } from '@angular/core';
import { AppHttpService } from './../services/app-http.service';
import { environment } from '../../environments/environment.prod';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css'],
})
export class ShowListComponent implements OnInit {
  isCollapsed = true;
  isCollapsed_family = true;
  isCollapsed_romance = true;
  isCollapsed_legal = true;
  isCollapsed_fantasy = true;
  isCollapsed_crime = true;
  isCollapsed_medical = true;
  isCollapsed_comedy = true;

  shows: any = [];
  searchShows : any =[];
  Drama_shows: any = [];
  searchText: any;
  enableFilterData = false;
  Family_shows: any = [];
  Romance_shows: any = [];
  Comedy_shows: any = [];
  Fantasy_shows: any = [];
  Crime_shows: any = [];
  Medical_shows: any = [];
  Legal_shows: any = [];

  constructor(private appHttpService: AppHttpService, private router: Router) {}

  ngOnInit(): void {
    this.getFullShowData();
  }

  /**fetching all shows */
  getFullShowData() {
    this.appHttpService
      .getData(environment.SHOWS_API)
      .subscribe((data: any) => {
        this.shows = data;
      });
  }

  /**filtering shows according to genres */

  getDramaShows() {
    this.Drama_shows = this.shows.filter((show: any) =>
      show.genres.includes('Drama')
    );
  }

  getFamilyShows() {
    this.Family_shows = this.shows.filter((show: any) =>
      show.genres.includes('Family')
    );
  }

  getRomanceShows() {
    this.Romance_shows = this.shows.filter((show: any) =>
      show.genres.includes('Romance')
    );
  }

  getComedyShows() {
    this.Comedy_shows = this.shows.filter((show: any) =>
      show.genres.includes('Comedy')
    );
  }

  getFantasyShows() {
    this.Fantasy_shows = this.shows.filter((show: any) =>
      show.genres.includes('Fantasy')
    );
  }

  getCrimeShows() {
    this.Crime_shows = this.shows.filter((show: any) =>
      show.genres.includes('Crime')
    );
  }

  getMedicalShows() {
    this.Medical_shows = this.shows.filter((show: any) =>
      show.genres.includes('Medical')
    );
  }

  getLegalShows() {
    this.Legal_shows = this.shows.filter((show: any) =>
      show.genres.includes('Legal')
    );
  }

  /**navigation to detail page */
  detailNav(id: any) {
    this.router.navigate(['show/' + id]);
  }

   /**get api call with query parameters */
  searchResult(event: any) {
    if (event.target.value) {

      this.appHttpService
        .getData(environment.SEARCH_SHOW_API + '?q=' + event.target.value)
        .subscribe((data: any) => {
          if(this.searchShows.length){
            this.searchShows = data;
            this.enableFilterData = true;
          } else {
            this.searchShows[0] = data;
            this.enableFilterData = true;
          }


        });
    } else {
      this.enableFilterData = false;
      this.getFullShowData();
    }
  }


}
