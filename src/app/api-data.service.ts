import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private http: HttpClient) { }
  
  getUserData(){
    let apiurl = "https://1.api.fy23ey05.careers.ifelsecloud.com/";
  
    return this.http.get(apiurl);
  }
}
