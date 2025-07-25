import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  private baseURL : string;
  constructor(private http: HttpClient) { 
    this.baseURL = 'http://localhost:5400/'
  }

  getDashBoardData(){
    return this.http.get(this.baseURL);
  }
}
