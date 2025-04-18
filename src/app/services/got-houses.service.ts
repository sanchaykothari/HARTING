import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class GotHousesService {

  pendingReq: boolean = false;
  apiUrl: string = 'https://www.anapioficeandfire.com/api/houses';

  constructor(private http: HttpClient) { }

  getUser(page : any, limit: any): Observable<any> {
    const url = `${this.apiUrl}?page=${page}&pageSize=${limit}`;
    return this.http.get<any>(url);
  }

  getHouse(houseNO: any): Observable<any>{
    const url = this.apiUrl + "/" + houseNO;
    return this.http.get<any>(url);
  }
  getMembers(membersUrlArr: string[]): Observable<any[]>{
    const requests = membersUrlArr.map(url => this.http.get<any>(url));
    return forkJoin(requests);
  }
}
