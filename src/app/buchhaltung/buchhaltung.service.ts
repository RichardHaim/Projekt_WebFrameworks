import { HttpHeaders, HttpParams, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Buchhaltung } from "../entities/Buchhaltung";

@Injectable({
    providedIn: "root"
})
export class BuchhaltungService {

    constructor(private http: HttpClient) { }

    find():Observable<Buchhaltung[]> {
        const url = 'http://localhost:3000/Buchhaltung';
        const headers = new HttpHeaders()
            .set("Accept", "application/json");
        const params = new HttpParams()
        return this.http.get<Buchhaltung[]>(url, {headers,params});
    }

    remove(Buchhaltung: any):Observable<Buchhaltung> {
        const url = 'http://localhost:3000/Buchhaltung/'+Buchhaltung.id;
        const headers = new HttpHeaders()
            .set("Accept", "application/json");
        return this.http.delete<Buchhaltung>(url, {headers});
    }

    get_einkaufsdaten(): void {
        // Über Verkaufsservice --> Funktion find_all()
        // Ist noch nicht implementiert.
    }

    get_verkaufsdaten():void {
        // Über Einkaufsservice -> Funktion find_all()
    }
    
    post_bilanz():Observable<Buchhaltung[]>{
        // from get_einkauf receive
        //      count of entries
        //      Einkaufspreis
        // from get_verkauf receive
        //      count of entries
        //      Verkaufspreis

        const url = 'http://localhost:3000/Buchhaltung';
        const headers = new HttpHeaders()
            .set("Accept", "application/json");
        const params = new HttpParams()
        return this.http.post<Buchhaltung[]>(url, {headers}, {params});
    }

}