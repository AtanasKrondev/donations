import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: { email: string; password: string } = null;

  get isLogged() {
    return !!this.currentUser;
  }

  constructor(private http: HttpClient) {
    const currentUser = localStorage.getItem('current-user');
    this.currentUser = currentUser ? JSON.parse(currentUser) : null;
  }

  login(email: string, password: string) {
    return this.http.post('http://localhost:9999/api/user/login', { email, password }, { withCredentials: true })
  }

  register(email: string, password: string) {
    return this.http.post('http://localhost:9999/api/user/register', { email, password }, { withCredentials: true })
  }

  logout() {
    return this.http.post('http://localhost:9999/api/user/logout', {}, { withCredentials: true })
  }
}