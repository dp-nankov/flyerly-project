import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IAd } from 'src/app/shared/interfaces/ad';
import { IUser } from 'src/app/shared/interfaces/user';
import { AdsService } from '../ads.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

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


  constructor(private adsService: AdsService, private activatedRoute: ActivatedRoute, private authService:AuthService) { }

  async ngOnInit(): Promise<void> {
    this.customId = this.activatedRoute.snapshot.paramMap.get('detailId');
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
        
        this.authService.getUser(this.userId).subscribe({
          next: (value) => {
            this.user = value;
            this.username = value.username;
          }
      })
      
      }
    });

}
}