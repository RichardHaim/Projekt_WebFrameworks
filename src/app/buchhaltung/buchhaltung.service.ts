import { HttpHeaders, HttpParams, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Buchhaltung } from "../entities/Buchhaltung";
import { BuchhaltungCardComponent } from "./buchhaltung-card/buchhaltung-card.component";
import { BuchhaltungComponent } from "./buchhaltungsmanagement/buchhaltung.component";

@Injectable({
    providedIn: "root"
})
export class BuchhaltungService {

    constructor(private http: HttpClient) { }
    
    url: string = 'http://localhost:3000/Buchhaltung';

    find():Observable<Buchhaltung[]> {
        const headers = new HttpHeaders()
            .set("Accept", "application/json");
        const params = new HttpParams()
        return this.http.get<Buchhaltung[]>(this.url, {headers,params});
    }

    remove(Buchhaltung: any):Observable<Buchhaltung> {
        const headers = new HttpHeaders()
            .set("Accept", "application/json");
        return this.http.delete<Buchhaltung>(this.url+"/"+Buchhaltung.id, {headers});
    }

    change(selection: any): Observable<BuchhaltungCardComponent> {
        const headers = new HttpHeaders()
            .set("Accept", "application/json");
        return this.http.put<BuchhaltungCardComponent>(this.url+"/"+selection.id, selection, {headers});
    }


    /*
    get_einkaufsdaten(): void {
        // Über Verkaufsservice --> Funktion find_all()
        // Ist noch nicht implementiert.
    }

    get_verkaufsdaten():void {
        // Über Einkaufsservice -> Funktion find_all()
    }
*/
    post_bilanz(selection:any):Observable<BuchhaltungComponent>{
        // from get_einkauf receive
        //      count of entries
        //      Einkaufspreis
        // from get_verkauf receive
        //      count of entries
        //      Verkaufspreis

        const headers = new HttpHeaders()
            .set("Accept", "application/json");
        const params = new HttpParams()
        return this.http.post<BuchhaltungComponent>(this.url, selection);
    }
}