import { Component, VERSION,OnInit } from '@angular/core';

@customdecorator
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  custom:string;
  name = 'Angular ' + VERSION.major;
  constructor(){
    
  }
  ngOnInit(){

  }
}

function customdecorator(target,...args){
  target.ngOnDestroy = {hritik:'hello'}
  console.log(target)
}
