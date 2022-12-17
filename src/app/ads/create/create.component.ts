import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { AdsService } from '../ads.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  errorMsg!:string | undefined;

  form = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
    imgUrl: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private adsService: AdsService, private router: Router) { }

  ngOnInit(): void {
  }

  formHandler(){
    this.errorMsg = undefined;    
    if (this.form.invalid) { return; }
    const {title, description, price, imgUrl} = this.form.value;
    this.adsService.create(title!, description!, price!, imgUrl!)
    .pipe(
      catchError(error => {
          this.errorMsg = "Invalid data!"
          return of([]);
      }))
    .subscribe(ads => {
      if(!this.errorMsg){
      this.router.navigate(['/ads'])
      }
    }
    )
  }

}
