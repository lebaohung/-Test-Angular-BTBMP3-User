import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Users} from '../model/users';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly API_REGISTRATION_USER = 'http://localhost:8080/registration';

  constructor(private http: HttpClient) { }

  registration(user: any): Observable<Users>{
    return this.http.post<Users>(this.API_REGISTRATION_USER, user);
  }
}
