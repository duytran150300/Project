import { HttpClient } from '@angular/common/http';
import {  Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';

interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit  {

  formLogin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[ Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{6,}$')])
  });
  constructor(private http: HttpClient, private router : Router) {}


  get form () {
    return  this.formLogin.controls;
  }
  ngOnInit() {

  }

  async onLogin() {
    const email = this.formLogin.value.email;
    const password = this.formLogin.value.password;

    try {
      const users: User[] | undefined  = await this.http.get<User[]>('http://localhost:3000/user').toPromise();

      if (users) {
        const foundUser = users.find(user => user.email === email && user.password===password);
        if (foundUser) {
          // alert("Login successfully");
          this.router.navigate(['/employee-dashboard']);
        }else{
          alert('Login failed')
        }
      }
    } catch (error) {
      // Xử lý lỗi đăng nhập
      alert('Đăng nhập thất bại');
    }
  }
}

