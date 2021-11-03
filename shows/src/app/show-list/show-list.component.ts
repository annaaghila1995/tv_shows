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
  Drama_shows: any = [];
  searchText: any;
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
        console.log(this.shows);
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


  detailNav(id:any){
   console.log(id);
   this.router.navigate(['show/'+ id])

  }
}
