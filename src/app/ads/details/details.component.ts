import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { CommentsService } from 'src/app/comments/comments.service';
import { IAd } from 'src/app/shared/interfaces/ad';
import { IComment } from 'src/app/shared/interfaces/comment';
import { IUser } from 'src/app/shared/interfaces/user';
import { AdsService } from '../ads.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
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
  user!: IUser;
  username!:string;
  _id!:string;
  comments!:IComment[];
  isOwner: boolean = false;

  form2 = this.fb.group({
    text: ['', Validators.required],
  });

  constructor(private router: Router, private commentsService: CommentsService, private adsService: AdsService, private activatedRoute: ActivatedRoute, private authService:AuthService,private fb: FormBuilder) { }

  async ngOnInit(): Promise<void> {
    
    this.customId = this.activatedRoute.snapshot.paramMap.get('detailId');
    this.adsService.getAdCustom(this.customId)
    .pipe(
      catchError(error => {
          this.errorMsg = error.message;
          return of([]);
      }))  
    .subscribe({
      next: (value) => {
        if(value.length === 0){
          this.router.navigate(['/404'])
          return;
        }
        this.ad = value;
        this.imgUrl = value[0].imgUrl;
        this.title = value[0].title;
        this.description = value[0].description;
        this.price = value[0].price;
        this.created_at = value[0].created_at.split('T')[0];
        this.updatedAt = value[0].updatedAt.split('T')[0];
        this.userId = value[0].userId;
        this._id = value[0]._id;        
        
        this.authService.getUser(this.userId)
          .subscribe({
          next: (value) => {
            this.user = value;
            this.username = value.username;
            if(this.authService.user?._id === this.user._id){
              this.isOwner = true;
            }
            
          }
      })
      
      this.commentsService.get(this._id)
      .pipe(
        catchError(error => {
            this.errorMsg = error.message;
            return of([]);
        }))
        .subscribe({
        next: (value) => {
          this.comments = value.reverse()
          ;
        }
    })
      }
    });

}

formHandler(){
  if (this.form2.invalid) { return; }
    const {text} = this.form2.value;
    const adId = this._id;
    this.commentsService.create(text!, adId!)
    .pipe(
      catchError(error => {
          this.errorMsg = error.message;
          return of([]);
      })) 
    .subscribe(() => {
      this.ngOnInit()
      this.form2.reset()
    }
    )
    
}

deleteAd(){
  if(confirm("Deleting "+ this.title)) {
    this.adsService.delete(this._id)
  .pipe(
    catchError(error => {
        this.errorMsg = error.message;
        return of([]);
    })) 
  .subscribe({
    next: () => {
      this.router.navigate(['/ads'])
    }
})
  }
  
}
}