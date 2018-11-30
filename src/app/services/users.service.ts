import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl: string;

  constructor(public http: HttpClient) {
    this.baseUrl = environment.apiUsers;
   }

  getUsers(): Observable<any> {
    // GET
    return this.http.get(this.baseUrl);
  }

  getUser(id): Observable<any> {
    // GET
    return this.http.get(this.baseUrl + id);
  }

  setUser(id, data): Observable<any> {
    // PUT - PATCH
    if (!id) {return; }
    return this.http.put(this.baseUrl + id, data);
  }

  addUser(data): Observable<any> {
    // POST
    return this.http.post(this.baseUrl, data);
  }

  deleteUser(id): Observable<any> {
    // DELETE
    if (!id) {return; }
    return this.http.delete(this.baseUrl + id);
  }

}
