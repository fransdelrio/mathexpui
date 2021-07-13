import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MathexpService {

  result2 = 0;
  errorMessage = '';

  constructor(private http: HttpClient) { }

  obtainResultGet(mathexp:string, presicion:number): Observable<any>{
      var encodedExp = mathexp.replaceAll("+", "%2B"); //we can't send '+' in url
      return this.http.get(`https://mathexp.herokuapp.com/api/getSolve?expression=${encodedExp}&precision=${presicion}`);
  }

  obtainResultPost(myJson:any): any {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<any>('https://mathexp.herokuapp.com/api/postSolve', myJson, {headers})
  }
}
