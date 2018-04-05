import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ExpenseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
