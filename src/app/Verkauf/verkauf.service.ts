import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cars_Verkauf } from 'src/app/entities/Cars_Verkauf';


@Injectable({
  providedIn: 'root'
})
export class VerkaufService {

  constructor(private http: HttpClient) { }


find(Marke: string, Modell: string): Observable<Cars_Verkauf[]> {
  const url = 'http://localhost:3000/cars_verkauf';

  const headers = new HttpHeaders()
    .set('Accept', 'application/json');

  const params = new HttpParams()
    .set('Marke', Marke)
    .set('Modell', Modell);

  return this.http.get<Cars_Verkauf[]>(url, { headers, params });
}


find_all(): Observable<Cars_Verkauf[]> {
  const url = 'http://localhost:3000/cars_verkauf';
  const headers = new HttpHeaders()
    .set('Accept', 'application/json');
  const params = new HttpParams()
  return this.http.get<Cars_Verkauf[]>(url, { headers, params });
}

// Modify for needs
save(Cars_Verkauf: Cars_Verkauf): Observable<Cars_Verkauf> {
  const url = 'http://localhost:3000/cars_verkauf';

  const headers = new HttpHeaders()
    .set('Accept', 'application/json');

  return this.http.post<Cars_Verkauf>(url, Cars_Verkauf, { headers });
  }


update(Verkaufspreis: any): Observable<Cars_Verkauf> {
  const url = 'http://localhost:3000/cars_verkauf'

  const headers = new HttpHeaders()
    .set('Accept', 'application/json');
  
    return this.http.put<Cars_Verkauf>(url+"/"+Verkaufspreis.id, Verkaufspreis,{ headers });


}
remove(value: any): Observable<Cars_Verkauf> {
  const url = 'http://localhost:3000/cars_verkauf'
  
  const headers = new HttpHeaders()
      .set("Accept", "application/json");
  return this.http.delete<Cars_Verkauf>(url+"/"+value.id, { headers });
}


post_new_Eintrag(value:any): Observable<Cars_Verkauf>{
  const url= 'http://localhost:3000/cars_verkauf'
  
  const headers = new HttpHeaders()
      .set("Accept", "application/json");
  const params = new HttpParams()
  return this.http.post<Cars_Verkauf>(url, value, { headers } );
}
}

