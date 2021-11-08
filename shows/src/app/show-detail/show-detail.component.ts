import { Component, OnInit } from '@angular/core';
import { AppHttpService } from './../services/app-http.service';
import { environment } from '../../environments/environment.prod';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements OnInit {
  showDetail : any = [];
  episodes : any = [];
  paginateData : any = [];
  initial_castDetail : any = [];
  enableViewCastButton = true;
  castDetail : any = [];
  page = 1;
  pageSize = 10;
  collectionSize = 0;
  genre: any;
  constructor(private appHttpService: AppHttpService, private router: Router, private routeParam :ActivatedRoute ) {}

  ngOnInit(): void {

    this.getShowData();
    this.getEpisodeList();
    this.getCastingDetails();

  }
/**this function will return the details of the particular show according to the id   */
  getShowData() {
    this.genre = '';
    this.appHttpService
      .getData(environment.SHOWS_API +'/' + this.routeParam.snapshot.params['id'])
      .subscribe((data: any) => {
        this.showDetail = data;
        this.genre = this.showDetail.genres.slice(0, this.showDetail.genres.length - 1).join('| ') + "| " + this.showDetail.genres.slice(-1);
      });
  }

  /**this function will return the details of the episodes of that particular show   */

  getEpisodeList() {
    this.appHttpService
    .getData(environment.SHOWS_API +'/' + this.routeParam.snapshot.params['id'] + '/episodes')
    .subscribe((data: any) => {
      this.episodes = data;

      /**pagination */
      this.collectionSize = this.episodes.length;
      this.getPaginatedData();
    });
  }

  /**pagination function */
  getPaginatedData(){
    this.paginateData =  this.episodes
     .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);

   }

  /**this function will return the casting details the show   */

  getCastingDetails(){
    this.appHttpService
    .getData(environment.SHOWS_API +'/' + this.routeParam.snapshot.params['id'] +'/cast')
    .subscribe((data: any) => {
      this.castDetail = data;
      /**initially it will show only 5 casting */
      this.initial_castDetail = data.slice(0, 5);

    });
  }

  /** function to show the entire casting list in the series */
  viewMoreCast(){

    this.enableViewCastButton = false;
    this.initial_castDetail = [];
    this.initial_castDetail = this.castDetail;
  }

}
