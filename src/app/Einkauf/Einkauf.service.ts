import { Injectable } from '@angular/core';
import { Cars } from '../entities/Cars_Einkauf';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EinkaufService {

  constructor(private http: HttpClient) { }


find(Marke: string, Modell: string): Observable<Cars[]> {
  const url = 'http://localhost:3000/cars_einkauf';

  const headers = new HttpHeaders()
    .set('Accept', 'application/json');

  const params = new HttpParams()
    .set('Marke', Marke)
    .set('Modell', Modell);

  return this.http.get<Cars[]>(url, { headers, params });
}

save(Cars: Cars): Observable<Cars> {
  const url = 'http://localhost:3000/cars_verkauf';

  const headers = new HttpHeaders()
    .set('Accept', 'application/json');

  return this.http.post<Cars>(url, Cars, { headers });
  }
}