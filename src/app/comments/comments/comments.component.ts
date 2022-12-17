import { Component, Input, OnInit } from '@angular/core';
import { IComment } from 'src/app/shared/interfaces/comment';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() comments!: IComment[];
  @Input() adId!: string;


  constructor() { }

  ngOnInit(): void {    
  }

  formHandler(){
    
  }

}
