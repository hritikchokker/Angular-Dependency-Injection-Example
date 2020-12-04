import { Injectable } from '@angular/core';


export interface UserModel{
  shortName:string,
  location?:string,
  countryCode?:number,
  highestDegree?:boolean,
  fullName?:string
}


@Injectable()
export class StorageService {
  usersBasicDetails:UserModel;

  get userBasicDetails():UserModel{
    return this.usersBasicDetails
  }

  set userBasicDetails(userDetails:UserModel){
    this.usersBasicDetails = userDetails;
  }

  resetDetails(){
    this.usersBasicDetails = null;
  }

  constructor() { }

}