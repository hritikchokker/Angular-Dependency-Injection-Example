import { Component, VERSION,OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  custom:string;
   toggle:boolean = true;
  name = 'Angular ' + VERSION.major;
  constructor(){
    
  }
  ngOnInit(){

  }

    toggleFunc():void{
    this.toggle = !this.toggle;
  }
}
