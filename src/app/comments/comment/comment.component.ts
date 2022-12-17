import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() userId!: string;
  @Input() text!: string;
  username!: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUser(this.userId).subscribe({
      next: (value) => {
        this.username = value.username;
      }
  })
  }

}
