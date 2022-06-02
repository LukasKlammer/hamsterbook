import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  postText = [
    'Hallo, mein Name ist Frederick! Ich bin hier, um neue Hamster-Freunde kennenzulernen.', 
    'Hallo, mein Name ist Hamsti! Ich bin hier, um mich über neueste HamsterApps auszutauschen.', 
    'Hi Leute! Ich bin neu hier und freue mich über eure Likes.', 
    'Top Seite! Freue mich, dabei zu sein!', 
    'Hi! Ich bin Wuschel! Der coolste Hamster aller Zeiten.'
  ];

  hamsterImages = [
    'assets/img/hamster/hamster_1.jpg',
    'assets/img/hamster/hamster_2.jpg',
    'assets/img/hamster/hamster_3.jpg',
    'assets/img/hamster/hamster_4.jpg',
    'assets/img/hamster/hamster_5.jpg',
    'assets/img/hamster/hamster_6.jpg',
    'assets/img/hamster/hamster_7.jpg',
    'assets/img/hamster/hamster_8.jpg',
  ];

  hamsterDescriptions = [
    '3 Jahre alt',
    'Hamstert gerne Kekse',
    'Nett anzusehen',
    'Feiner Max',
    'Wuschelig anzufassen',
    'Flauschig wie ein Fell',
    'Nagt sehr gerne',
    'Der schnellste Läufer',
  ];

  hamsterNames = [
    'Frederick',
    'Hamsti',
    'Nicy',
    'Max',
    'Wuschel',
    'Flauschi',
    'Nagi',
    'Runny',
  ];

  buyHamster() {
    alert('Hamster bestellt!');
  }
}
