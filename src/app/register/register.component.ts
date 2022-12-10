import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleFormSubmit(value: {firstName: string, lastName: string, email: string, username: string, pass: string, repass: string}){
    console.log(value);
    
  }
}
