import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isLoading: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.http
      .post<{name: string}>(
        'https://angular-max-58b55-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts(){
    this.isLoading = true;
    this.http.get<{[key: string]: Post}>('https://angular-max-58b55-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
    .pipe(
      map(( responseData ) => {
      const postArray: Post[] = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          postArray.push({ ...responseData[key], id: key});
        }
      }
      return postArray;
      })
    )
    .subscribe(posts => {
      this.isLoading = false;
      this.loadedPosts = posts;
    })
  }

}
