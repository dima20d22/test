import { inject, Injectable } from '@angular/core';
import { RegisterRequestinterface } from '../types/registerRequest.interface';
import { map, Observable } from 'rxjs';
import { CurrentUserinterface } from '../../shared/types/currentUser.interface';
import { HttpClient } from '@angular/common/http';
import { AuthResponseinterface } from '../types/authResponse.interface';
import { baseUrl } from '../../shared/service/urlServise';

@Injectable({
  providedIn: 'root',
})
export class AuthServise {
  private http = inject(HttpClient);
  register(data: RegisterRequestinterface): Observable<CurrentUserinterface> {
    const url = baseUrl + '/users';

    return this.http
      .post<AuthResponseinterface>(url, data)
      .pipe(map((response: AuthResponseinterface) => response.user));
  }
}
