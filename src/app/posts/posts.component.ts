import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
posts : Post[];
  constructor(private postService : PostService) { }

  ngOnInit() {
    this.getPosts();
  }
  getPosts():void {
    this.posts= this.postService.getPosts();
  }
}
