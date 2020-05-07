import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: object;
  newUser: object;
  errors: any = {};
  loginForm: FormGroup;

  constructor(
    private http: HttpService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = {
      username: '',
      email: '',
      password: ''
    };

    this.newUser = {
      username: '',
      email: '',
      password: ''
    };
  }

  login(f: NgForm) {
    this.user = {email: f.value.email, password: f.value.password};
    this.http.login(this.user)
      .subscribe((response: any) => {
        if (response.result === 'success') {
          this.router.navigate(['/user']);
        }
      });
  }

  signUp(form: NgForm) {
    this.newUser = {
      username: form.value.username,
      email: form.value.email,
      password: form.value.password
    };
    this.http.createUser(this.newUser)
      .subscribe((response: any) => {
        if (response.result === 'success') {
          this.router.navigate(['/user']);
        }
      });
  }
}
