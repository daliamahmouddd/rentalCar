import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  car_type=[
    {
      name:'سيارات متسوطه',
      img:'https://cdn2.rcstatic.com/images/car_images/web/skoda/rapid_lrg.jpg',
    },
    {
      name:'سيارات كبره',
      img:'https://cdn2.rcstatic.com/images/car_images/web/skoda/rapid_lrg.jpg',
    },
    {
      name:'سيارات ستاشين',
      img:'https://cdn2.rcstatic.com/images/car_images/web/skoda/rapid_lrg.jpg',
    }
  ]
  active2 = false;
  active3 = true;
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 70,
    // navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: true,
    navText: [
      "<div class='prev'><img src='../../../assets/NEXT.gif'  class='img-fluid'></div>",
      "<div class='nex'><img src='../../../assets/NEXT.gif' class='img-fluid' ></div>",
    ],
  };
}
