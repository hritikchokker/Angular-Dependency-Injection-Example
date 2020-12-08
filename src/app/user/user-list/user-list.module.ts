import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user-list.component';
@NgModule({
declarations:[UserListComponent],
imports:[RouterModule.forChild([{path:'',component:UserListComponent}])]
})
export class UserListModule{

}