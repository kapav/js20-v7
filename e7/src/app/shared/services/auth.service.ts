import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false

  // URL для перенаправления после авторизации
  redirectUrl: string

  constructor() { }

  login(login: string, password: string): Observable<boolean> {
    return
  }

  logout(): void {
    this.isLoggedIn = false
  }

}
