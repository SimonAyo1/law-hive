

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';



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
  casebody: any,
  status: string
}



@Component({
  selector: 'app-card-read',
  templateUrl: './card-read.component.html',
  styleUrls: ['./card-read.component.css']
})

export class CardReadComponent implements OnInit {
  public url: any;
  public datas: any
  public id: any
  width: number = screen.width;
  public isLoading: boolean = true
  view: string = ""
  public status: string = ""
  isCheckingNetwork: boolean = true
  isNetworkBad: boolean = false


  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((e: ParamMap) => {
      var name = e.get('name')
      var idw = e.get('id')
      this.url = name

      this.id = idw
    })
    this.http.get<Data>('https://api.case.law/v1/cases/' + this.id + "/?full_case=true", {
      headers: {
        'Authorization': 'Token 34bc057588ddb2ee7fb21e97bdc7eec97e9c9b7e'
      }
    }).subscribe((e) => {
      this.datas = e
      this.isLoading = (e.casebody.status = "ok") ? false : true

    })




    if (this.width <= 600) {
      this.view = "potrait"
    }
    if (this.width >= 601) {
      this.view = "landscape"
    }


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

  }

}
