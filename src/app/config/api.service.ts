import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

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
 first_page:number,
 last_page: number,
 volume: object,
 court: object,
 jurisdiction: object,
 frontend_url: string,
 frontend_pdf_url: string,
 last_updated: string,
 casebody: []
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  constructor(private http : HttpClient) { 

   }
  
  

  getData() {
    return this.http.get<Data>('http://localhost:3001/users');
  }
  getApiRoot() {
    return this.http.get<Data>('https://api.case.law/v1/cases/',{
      headers: {
        'Authorization': '34bc057588ddb2ee7fb21e97bdc7eec97e9c9b7e'
      }
     
    })
  }
 
}
