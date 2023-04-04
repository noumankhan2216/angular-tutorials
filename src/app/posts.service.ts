import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Post } from './post.model';

@Injectable({
    providedIn: 'root'
})

export class PostsService {
    constructor(private http: HttpClient){}
    createPost(postData: Post){
        return this.http
        .post<{name: string}>(
          'https://angular-max-58b55-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
          postData 
        )
    }
    fetchPosts(){
        return this.http.get<{[key: string]: Post}>('https://angular-max-58b55-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
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
    }
    deletePost(){
        return this.http.delete('https://angular-max-58b55-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
    }

}