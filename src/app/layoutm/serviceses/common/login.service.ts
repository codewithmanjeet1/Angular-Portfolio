import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private route: Router) { }
  getlocalStoreg(id: any) {
    const setdata: any = localStorage.getItem(id);
    if (setdata) {
      const parsedata = JSON.parse(setdata);
      return parsedata;
    } else {
      return [];
    }
  }

  setLocalStroge(keyname: any, data: any) {
    localStorage.setItem(keyname, JSON.stringify(data));
  }
}
