import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { sameValueGroupValidator } from 'src/app/shared/validators/same-value-group-validator';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  errorMsg!:string | undefined;


  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, Validators.minLength(6)]],
    pass: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      repass: []
    }, {
      validators: [sameValueGroupValidator('password', 'repass')]
    })
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  registerHandler() {
    this.errorMsg = undefined;    
    if (this.form.invalid) { return; }
    const {firstName, lastName, email, username, pass: {password} = {}} = this.form.value;
    this.authService.register(firstName!, lastName!, email!, username!, password!)
    .pipe(
      catchError(error => {
          this.errorMsg = "Invalid data!"
          return of([]);
      }))
    .subscribe(user => {
      if(!this.errorMsg){
      this.router.navigate(['/ads'])
      }
    }
    )
  }


  }
