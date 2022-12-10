import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { sameValueGroupValidator } from 'src/app/shared/validators/same-value-group-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  registerHandler(){
    console.log(this.form.value); 
  }
    
  
}
