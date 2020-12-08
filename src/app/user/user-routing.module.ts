import {NgModule} from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { UserComponent } from './user.component';
const routes:Routes =[
  {
    path:'',
    component:UserComponent,
    children:[
      {
        path:'',
        redirectTo:'list',
        pathMatch:'full'
      },
      {
        path:'list',
        loadChildren:()=>import('./user-list/user-list.module').then(m=>m.UserListModule)
      }
    ]
  }
]
@NgModule({
declarations:[],
imports:[RouterModule.forChild(routes)],
exports:[RouterModule]
})
export class UserRoutingModule{

}