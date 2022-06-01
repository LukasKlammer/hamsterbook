import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss']
})
export class ProfileRowComponent implements OnInit {

  @Input() name = 'Frederick';
  @Input() img = 'assets/img/hamster/hamster_1.jpg';
  @Input() description = '3 Jahre alt';

  constructor() { }

  ngOnInit(): void {
  }

}
