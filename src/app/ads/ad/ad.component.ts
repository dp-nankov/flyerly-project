import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss']
})
export class AdComponent implements OnInit {

  @Input() title!: string;
  @Input() description!: string;
  @Input() imgUrl!: string;
  @Input() price!: string;
  @Input() customId!: string;
  @Input() cdate!: string;
  @Input() udate!: string;

  user = this.authService.user;

  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
