import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MathexpService {

  constructor(private http: HttpClient) { }

  obtainResult(mathexp:string, presicion:number): Observable<any>{
      var encodedExp = mathexp.replaceAll("+", "%2B"); //we can't send '+' in url
      return this.http.get(`https://mathexp.herokuapp.com/api/getSolve?expression=${encodedExp}&precision=${presicion}`);
  }

}
