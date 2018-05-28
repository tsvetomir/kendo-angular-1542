import { Component, OnInit } from '@angular/core';
import { products } from './products';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public products: any[] = products;

  constructor() { }

  ngOnInit() {
  }

}
