import { Component, OnInit } from '@angular/core';
import { cars } from '../cars';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  cars = cars;

  constructor() { }

  ngOnInit() {
  }

  onFindMore() {
    window.alert ("This car is on sale");
  }

}