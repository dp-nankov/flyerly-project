import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdsService } from '../ads.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

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
    if (this.form.invalid) { return; }
    const {title, description, price, imgUrl} = this.form.value;
    this.adsService.create(title!, description!, price!, imgUrl!)
    .subscribe(ads => {
      this.router.navigate(['/ads'])
    }
    )
  }

}
