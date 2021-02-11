import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  hello: Object

  constructor(private http: HttpClient) { }

  getHello(){
    this.http.get('http://localhost:8080/api/hello').subscribe(data => this.hello = data);
    return this.hello;
  }
}
