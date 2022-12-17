import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IComment } from '../shared/interfaces/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private httpClient: HttpClient) { }

  create(text: string, adId: string) {
    return this.httpClient.post<IComment>(`/api/comments/` + adId, {text})
  }

  get(_id: string) {
    return this.httpClient.get<IComment[]>(`/api/comments/` + _id)
  }

  delete(adId: string, commentId:string){
    return this.httpClient.delete(`/api/ads/${adId}/comments/${commentId}`)
  }
}
