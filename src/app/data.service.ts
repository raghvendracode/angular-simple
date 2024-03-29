import { Injectable } from '@angular/core';
import {HttpClient} from   '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  
  getUser(userId1){
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+ userId1);
  }
  
  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }


}
