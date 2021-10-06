import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private http: Http) { }

  // submit name
  submitName(name: string): Observable<any> {
    return this.http.post(
      'http://localhost:8080/db/worker' + '/create',
      { company_name: name }
    )
  }

  deleteWorker(name: string): Observable<any> {
    return this.http.delete(
      `http://localhost:8080/db/worker/delete?name=${name}`
    )
  }
}