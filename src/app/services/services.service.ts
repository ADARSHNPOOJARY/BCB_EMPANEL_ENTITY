import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmpanel } from '../empanel';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private _url:string="/assets/empanel.json";
  constructor(private http:HttpClient) { 
  }

  readJsonData():Observable<Array<IEmpanel>>{
    return this.http.get<Array<IEmpanel>>(this._url)
  }
  
}
