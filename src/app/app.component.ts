import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isLoading: boolean = false;
  error = null;

  constructor(private http: HttpClient, private service: PostsService) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.service.createPost(postData)
      .subscribe(responseData => {
        console.log(responseData);
        this.loadedPosts.push(postData)
      });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
    this.service.deletePost().subscribe( () => {
      this.loadedPosts = []
    })
  }

  private fetchPosts(){
    this.isLoading = true;
    this.service.fetchPosts()
    .subscribe(posts => {
      this.isLoading = false;
      this.loadedPosts = posts;
    }, error => {
      this.error = error.message;
      this.isLoading = false;
    })
  }

}
