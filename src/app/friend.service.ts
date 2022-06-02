import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  hamsterImages = [
    'assets/img/hamster/hamster_2.jpg',
    'assets/img/hamster/hamster_3.jpg',
    'assets/img/hamster/hamster_4.jpg',
    'assets/img/hamster/hamster_5.jpg',
    'assets/img/hamster/hamster_6.jpg',
    'assets/img/hamster/hamster_7.jpg',
    'assets/img/hamster/hamster_8.jpg',
  ];

  hamsterDescriptions = [
    'Hamstert gerne Kekse',
    'Nett anzusehen',
    'Feiner Max',
    'Wuschelig anzufassen',
    'Flauschig wie ein Fell',
    'Nagt sehr gerne',
    'Der schnellste Läufer',
  ];

  hamsterNames = [
    'Hamsti',
    'Nicy',
    'Max',
    'Wuschel',
    'Flauschi',
    'Nagi',
    'Runny',
  ];

  constructor() { }

  addFriend (name:string, description:string, image:string) {
    this.hamsterNames.push(name);
    this.hamsterDescriptions.push(description);
    this.hamsterImages.push(image);
  }
}
