/*
Zugriff auf Einkauf
    einlesen:
        Anzahl der Fahrzeuge gekauft
        Summe Einkaufspreis

Zugriff auf Verkauf
    einlesen:
        Anzahl der Fahrzeuge verkauft
        Summe Verkaufspreis

Berechnung Differenz EURin vs EURout
Farbliche Darstellung + und - (Pipe?)

Datum: kommt vom aktuellen Tagesdatum
id: automatisch generiert als +1 vom letzten Eintrag

C: Neuen Bilanzeintrag erstellen durch Bilanzberechnung
R: Auslesen der Bilanzdaten
U: Update von Bilanzdaten
D: Löschen von Bilanzdaten
*/

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


}