import { Injectable } from '@angular/core';
import { RegisterRequestinterface } from '../types/registerRequest.interface';
import { map, Observable } from 'rxjs';
import { CurrentUserinterface } from '../../shared/types/currentUser.interface';
import { HttpClient } from '@angular/common/http';
import { AuthResponseinterface } from '../types/authResponse.interface';

@Injectable()
export class AuthServise {
  constructor(private http: HttpClient) {}
  register(data: RegisterRequestinterface): Observable<CurrentUserinterface> {
    const url = 'https://conduit.productionready.io/api/users';

    return this.http
      .post<AuthResponseinterface>(url, data)
      .pipe(map((response: AuthResponseinterface) => response.user));
  }
}
