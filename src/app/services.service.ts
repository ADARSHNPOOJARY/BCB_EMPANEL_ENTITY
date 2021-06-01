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

  readJsonData():Observable<any>{
    
    return this.http.get(this._url)
  }
  
}
