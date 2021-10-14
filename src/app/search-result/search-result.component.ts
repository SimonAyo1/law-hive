import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router'

interface Data {
  count: number,
  next: string,
  previous: any,
  results: [],
  id: number,
  url: string,
  name: string,
  name_abbreviation: string,
  decision_date: number,
  first_page: number,
  last_page: number,
  volume: object,
  court: object,
  jurisdiction: object,
  frontend_url: string,
  frontend_pdf_url: string,
  last_updated: string,
  casebody: [],
  status: any
}



@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  public query: any
  public searchResult: any = []
  public preview: any = []
  width: number = screen.width;
  isMobile: boolean = false;
  isNotMobile: boolean = false;
  isLarge: boolean = false;
  status = ""
  isLoading: boolean = true
  isCheckingNetwork: boolean = true
  isNetworkBad: boolean = false


  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private routes: Router) {

    if (this.width <= 600) {
      this.isMobile = true
    }
    else if (this.width >= 601) {
      this.isNotMobile = true
    }
    else if (this.width <= 600) {
      this.isLarge = true
    }




  }


  search() {
    this.routes.navigate(['search/' + this.query])

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isCheckingNetwork = false;
    }, 8000);
    setTimeout(() => {
      if (!this.isCheckingNetwork && this.isLoading) {
        this.isNetworkBad = true
      }
    }, 9000);



    this.route.paramMap.subscribe((e: ParamMap) => {
      var query = e.get('query')
      this.query = query
    })
    this.http.get<Data>("https://api.case.law/v1/cases/?search=" + this.query, {

    }

    ).subscribe((e) => {
      this.searchResult = e.results
      this.isLoading = (e.results.length > 0) ? false : true

    })
  }

}


