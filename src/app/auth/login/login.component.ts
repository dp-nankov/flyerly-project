import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }
  form = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  ngOnInit(): void {
  }

  loginHandler(){
      if (this.form.invalid) { return; }
      const {email, password} = this.form.value;
      this.authService.login(email!, password!)
      .subscribe(user => {
        console.log(user);
        this.router.navigate(['/home'])
      }
      )
    }
    
  }


