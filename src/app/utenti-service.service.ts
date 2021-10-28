import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Utente } from 'src/utente';

@Injectable({
  providedIn: 'root'
})
export class UtentiServiceService {

  httpOptions = { 
    headers: new HttpHeaders(
      { 'Content-Type': 'application/json' }
    ),
  };

  constructor(private http: HttpClient) { }
  
  // Ricordare di indicare anche il protocollo http
  // Nella chiamata al server
  // per evitare il CORS 
  getUtenti(): Observable<Utente[]>{
    return this.http.get<Utente[]>("http://localhost:8080/user/all")
  }

  addNewUser(utente: Utente): Observable<Utente> {

    return this.http.post<Utente>("http://localhost:8080/user/add", utente, this.httpOptions);
  }
  
  deleteUser(utente: Utente): Observable<Utente> {
    return this.http.post<Utente>("http://localhost:8080/user/delete", utente, this.httpOptions);
  }

  update(utente: Utente): Observable<Utente> {
    return this.http.post<Utente>("http://localhost:8080/user/update", utente, this.httpOptions);
  }

}
