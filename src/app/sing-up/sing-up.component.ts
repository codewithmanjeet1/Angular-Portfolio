import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.css'
})
export class SingUpComponent {
  constructor(private route: Router) {

  }
  formdata(getformdata: NgForm) {
    console.log(getformdata.value)
    this.route.navigate(['/layout'])
  }


}
