import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private _url:string="/assets/empanel.json";
  constructor(private http:HttpClient) { 
  }
  // testMethod(){
  //   return 'Hi again from services..'
  // }
  readJsonData():Observable<any>{
    // return this.http.get("./assets/empanel.json")
    return this.http.get(this._url)
  }
  
}
