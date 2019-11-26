import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  constructor(){ }


  // getTopics () {
  //   return this.http.get("http://localhost:3000/topics");
  // }

  // setPlayers (name,score) {
  //   return this.http
  // .post("http://localhost:3000/topics", {
  //   name,score
  // })
  // .subscribe(console.log);

  // }
}
