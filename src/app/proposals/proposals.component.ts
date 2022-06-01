import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent implements OnInit {

  @Input() hamsterImages:any = [];

  names = ['Marius', 'Franziska'];
  texts = ['Hallo Welt', 'Hallo Welt 2'];

  constructor() { }

  ngOnInit(): void {
  }

}
