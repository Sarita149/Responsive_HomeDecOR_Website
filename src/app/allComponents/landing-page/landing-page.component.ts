import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  bestItem=[
    {'id':1,'img':'../../../assets/sec2_img1.png','title':'Decor','small':'Shop Now'},
    {'id':2,'img':'../../../assets/sec3_img3.png','title':'WALL DECOR','small':'Shop Now'},
    {'id':3,'img':'../../../assets/sec2_img4.png','title':'HARDWARE','small':'Shop Now'},
    {'id':4,'img':'../../../assets/sec2_img5.png','title':'SPIRITUALITY','small':'Shop Now'},
    {'id':5,'img':'../../../assets/sec2_img6.png','title':'BELLS & CHIMES','small':'Shop Now'},
    {'id':6,'img':'../../../assets/sec2_img2.png','title':'LANTERNS','small':'Shop Now'},
    {'id':7,'img':'../../../assets/sec2_img7.png','title':'URLI DECOR','small':'Shop Now'},
    {'id':8,'img':'../../../assets/sec2_img8.png','title':'NEW ARRIVALS','small':'Shop Now'},
  ]

  itemsPerSlide = 3;
  singleSlideOffset = true;
  noWrap = true;
 
  slides = [
    {image: "../../../assets/Best_Item1.jpg"},
    {image: "../../../assets/Best_Item2.jpg"},
    {image: "../../../assets/Best_Item3.jpg"},
    {image: "../../../assets/Best_Item4.jpg"},
    {image: "../../../assets/Best_Item5.jpg"},
    {image: "../../../assets/Best_Item6.jpg"},
    {image: "../../../assets/Best_Item7.jpg"},
    {image: "../../../assets/Best_Item8.jpg"},
    {image: "../../../assets/Best_Item1.jpg"},
  ];

}
