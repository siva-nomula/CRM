import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
