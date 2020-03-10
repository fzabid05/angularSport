import { Injectable } from '@angular/core';
import { Post } from './post';
import { Observable, of } from 'rxjs';
import { POSTS } from './mock-posts';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }
  getPosts(): Post[]{
    return  POSTS;
  }
  getPost(id: number): Observable<Post> {
    return of(POSTS.find(coach => coach.id === id));
  }
}
