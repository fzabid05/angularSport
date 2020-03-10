import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: Post;
  constructor( private route: ActivatedRoute ,
               private postService : PostService 
              ) { }

  ngOnInit(): void {
    this.getPost();
  }
  getPost():void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id)
    .subscribe(post => this.post = post);
  }
}
