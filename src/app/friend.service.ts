import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  hamsterImages:string[] = [];

  hamsterDescriptions:string[] = [];

  hamsterNames:string[] = [];

  constructor() { }

  addFriend (name:string, description:string, image:string) {
    this.hamsterNames.push(name);
    this.hamsterDescriptions.push(description);
    this.hamsterImages.push(image);
  }
}
