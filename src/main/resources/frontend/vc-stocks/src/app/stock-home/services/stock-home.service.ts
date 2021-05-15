import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable()
export class StockHomeService {

  loadingIcon$: BehaviorSubject<any>;
  userName;
  userRole;
  userRole$: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.loadingIcon$ = new BehaviorSubject(undefined);
    this.userRole$ = new BehaviorSubject(this.userRole);
  }

  getBands(): Observable<any> {
    const url = '/api/getData';
    return this.http.get(url);
  }

  getHistory(): Observable<any> {
    const url = '/api/getHistoryData';
    return this.http.get(url);
  }

  getHistoryByName(name): Observable<any> {
    const url = '/api/getHistoryDataByName/' + name;
    return this.http.get(url);
  }

  addBand(req): Observable<any> {
    const url = '/api/band/add/';
    return this.http.post(url, req);
  }

  updateBandData(req): Observable<any> {
    const url = '/api/band/update/';
    return this.http.post(url, req);
  }

  getDistinctbands(): Observable<any> {
    const url = '/api/getDistinctBands';
    return this.http.get(url);
  }

  downloadreport(): Observable<any> {
    const url = '/api/download';
    return this.http.get(url);
  }

  getUserName(): Observable<any>{
    const url = '/api/myusername';
    return this.http.get(url, {responseType: 'text'});
  }

  addUser(req): Observable<any>{
    const url = '/api/user/add';
    return this.http.post(url, req);
  }

  setUserRole(role){
    this.userRole = role;
    this.userRole$.next(role);
  }
}
