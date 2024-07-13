import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.css'
})
export class SingUpComponent implements OnInit {
  isSubmit: boolean = false;
  pushformdata: any[] = [];
  setdata: any[] = [];

  singupform: FormGroup = new FormGroup({
    username: new FormGroup(''),
    password: new FormGroup(''),
    Conformpassword: new FormGroup('')
  })

  constructor(private fb: FormBuilder, private route: Router) {
    const getdata: any = localStorage.getItem("token")
    this.setdata = JSON.parse(getdata)
    console.log(this.setdata);
  }

  ngOnInit() {
    this.singupform = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      Conformpassword: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.singupform.controls;
  }

  singupfun() {
    if (this.singupform.invalid) {
      this.isSubmit = true;
      return;
    }

    if (this.singupform.valid) {
      this.isSubmit = false;
      this.pushformdata.push(this.singupform.value)
      localStorage.setItem("token", JSON.stringify(this.pushformdata))
      this.route.navigate(['/login'])
    }

  }

  


}
