import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { IAd } from 'src/app/shared/interfaces/ad';
import { AdsService } from '../ads.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  

  constructor(private fb: FormBuilder, private adsService: AdsService, private router: Router, private activatedRoute: ActivatedRoute) { }
  errorMsg!:string | undefined;

  public customId!: string | null;
  ad!: IAd[];
  imgUrl!: string | null;
  title!: string | null;
  description!: string | null;
  price!: string | null;
  created_at!: string | null;
  updatedAt!: string | null;
  userId!: string | null;
  _id!:string;

  form = this.fb.group({
    title: ["", Validators.required],
    description: ["", Validators.required],
    price: ["", Validators.required],
    imgUrl: ["", Validators.required],
  });


  ngOnInit(): void {
    this.customId = this.activatedRoute.snapshot.paramMap.get('adId');
    this.adsService.getAdCustom(this.customId).subscribe({
      next: (value) => {
        this.ad = value;
        this.imgUrl = value[0].imgUrl;
        this.title = value[0].title;
        this.description = value[0].description;
        this.price = value[0].price;
        this.created_at = value[0].created_at.split('T')[0];
        this.updatedAt = value[0].updatedAt.split('T')[0];
        this.userId = value[0].userId;
        this._id = value[0]._id;  
        
        this.form.setValue({title: this.title, description: this.description, price: this.price, imgUrl:this.imgUrl})
        
      }
    });
  }

  formHandler(){
    this.errorMsg = undefined;    
    if (this.form.invalid) { return; }
    const {title, description, price, imgUrl} = this.form.value;
    const adId = this._id;
    this.adsService.edit(title!, description!, price!, imgUrl!, adId!)
    .pipe(
      catchError(error => {
          this.errorMsg = "Invalid data!"
          return of([]);
      }))
    .subscribe(ads => {
      if(!this.errorMsg){
      this.router.navigate(['/ads/details/' + this.customId])
      }
    }
    )
  }

}
