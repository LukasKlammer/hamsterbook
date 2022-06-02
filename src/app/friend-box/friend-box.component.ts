import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend-box',
  templateUrl: './friend-box.component.html',
  styleUrls: ['./friend-box.component.scss']
})
export class FriendBoxComponent implements OnInit {

  @Input() hamsterImages:any = [];
  @Input() hamsterNames:any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
