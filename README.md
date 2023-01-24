# Projet Overview - Fahrzeugbazar
Gruppenarbeit zur LV Web Frameworks, WS 2022, Studiengang Business Data Science<br>
**Gruppe D**: Haim, Kakici, Roßmann

## Aufteilung
* Haim: Buchhaltung, Navigationsmenü, Routing, Einrichtung JSON-Datenbank
* Kakici: Verkauf
* Roßmann: Einkauf, Homepageverschönerung 

## Informationen zum Projekt
__Roßmann__: Bzgl CRUD: Update funktioniert nicht, ist auskommentiert im html. Mussten wir machen, da der Rest sonst nicht funktioniert hat.
__Kakici__:


## Funktion
Die Anwendung besteht aus den oben genannten Anwendungen Buchhaltung, Verkauf und Einkauf. Der Einkauf managed die Einkaufsdaten, der Verkauf managed die Verkaufsdaten, die Buchhaltung speichert die Anzahl der Einkäufe, der Verkäufe, und die Bilanz in EUR. Die Daten sind in einem JSON-File im Ordner `src/app/db` gespeichert.

## Setup Anwendung
* Download der Files
* Installation via `npm install`
* Start via `npm start`

## Setup JSON-Server
* Installation via `npm install -g json-server`
* JSON-server start via `json-server --watch src/db/datenbank.json` (gem. Anleitung auf [github](https://github.com/typicode/json-server))

## zusätzliche Informationen Buchhaltung
CRUD-Funktionalitäten sind gegeben, nur konnte ich es nicht schaffen, dass neue Einträge `newEntry` vom `buchhaltung.component.html` richtig in die Datenbank übertragen werden (`http.post` via Funktion `post_bilanz` in `buchhaltung.service.ts`)



# Starter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
