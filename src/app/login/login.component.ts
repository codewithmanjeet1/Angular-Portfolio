import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isSubmit: boolean = false;

  reactform: FormGroup = new FormGroup({
    username: new FormGroup(''),
    password: new FormGroup(''),
  })

  constructor(private fb: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.reactform = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.reactform.controls;
  }

  formdata() {
    if (this.reactform.invalid) {
      this.isSubmit = true;
      return;
    } else {
      this.isSubmit = false;
      console.log(this.reactform.value);
      this.route.navigate(['/layout'])
    }

  }

}
