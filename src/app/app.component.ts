import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http
      .post(
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
    this.http.get('https://angular-max-58b55-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
    .pipe(
      map((responseData: any) => {
      const postArray = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          postArray.push({ ...responseData[key], id: key});
        }
      }
      return postArray;
      })
    )
    .subscribe(posts => {
      console.log(posts)
    })
  }

}
