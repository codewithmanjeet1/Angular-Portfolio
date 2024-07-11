import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.css'
})
export class SingUpComponent {
  isSubmit: boolean = false;

  reactform: FormGroup = new FormGroup({
    username: new FormGroup(''),
    password: new FormGroup(''),
  })

  constructor(private fb: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.reactform = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.reactform.controls;
  }

  formdata() {
    console.log(this.reactform.value);
    if (this.reactform.invalid) {
      this.isSubmit = true;
      return;
    }

    if (this.reactform.valid) {
      this.isSubmit = false;
      console.log(this.reactform.value);
      this.route.navigate(['/login'])
    }

  }


}
