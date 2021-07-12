import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MathexpService {

  constructor(private http: HttpClient) { }

  obtainResult(mathexp:string, presicion:number): Observable<any>{
      return this.http.get(`https://mathexp.herokuapp.com/api/getSolve?expression=${mathexp}&precision=${presicion}`);
  }

}
