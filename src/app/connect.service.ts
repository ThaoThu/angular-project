import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ConnectService {
 

  constructor(private http: HttpClient) { }
  getConfig(){
    //return this.http.get(this.apiUrl)
  }


}
