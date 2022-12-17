import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() userId!: string;
  @Input() text!: string;
  @Input() commentId!: string;
  @Input() adId!: string;

  deleted: boolean = false;

  username!: string;
  isOwner: boolean = false;

  constructor(private authService: AuthService, private commentService: CommentsService) { }

  ngOnInit(): void {
    this.authService.getUser(this.userId).subscribe({
      next: (value) => {
        this.username = value.username;
        const owner = this.userId;
        const current =String( this.authService.user?._id);
        if(owner === current){
          this.isOwner = true;
        }
        console.log(this.isOwner);
        
      }
  })
  }

  onDelete(){
    this.commentService.delete(this.adId[0], this.commentId).subscribe({
      next: () => {
        this.deleted = true;
      }
  })

}
}
