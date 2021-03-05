import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ConnectService {
  a= 'aaa'


  constructor() { }

  showDate = () =>{
    return new Date()
  }
}
