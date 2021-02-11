import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent {




  hello:String = "Czesc Marcin";
  //hello : Object = this.homeservice.getHello();


  getHello():string{
    return "hello Marcin";
  }




}
