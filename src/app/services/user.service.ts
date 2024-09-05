import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userData: any = null;

  constructor() { }

  setUser(data: any) {
    this.userData = data;
  }

  getUser() {
    return this.userData;
  }

  clearUser() {
    this.userData = null;
  }
}