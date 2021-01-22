import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor() { }
  news: any = [];
  new: any;
  ngOnInit(): void {
    AOS.init();

    this.news = [{
      id: 1,
      title:'Sterling Service Spotlight | Materials Testing',
      data: "Sterling Performance Engines offers many different services that can be found here. Material testing has become more important because the quality of material going into a manufactured product is as important as the reliability of the production process. Materials testing helps to understand and quantify whether a specific material or treatment is suitable for particular requirements",
      img:"../../assets/img/1.jpg"
    },
      {
        id: 2,
        title:'Skater Powerboats with Big Sterling Power',
        data: "Skater Powerboats is on a three- week hiatus due to the COVID - 19 pandemic, but they still have a few big projects that they want to release this year.One of the first projects they will release is the Skater 388 catamaran with eight seats that will be rigged with 1, 100 - hp Sterling Performance engines",
        img: "../../assets/img/2.jpg"
      },
      {
        id: 3,
        title:'Building Smarter Cars with Smarter Factories: AI Industry is Changing the Auto Business',
        data: "Sterling Performance is proud to be a part of the expanding AI industry as it is rapidly changing the auto industry in many different ways, from creating autonomous vehicles to improving the manufacturing of vehicles. The AI industry has advanced to the point that in many developed countries about 30% of activities in almost 60%",
        img: "../../assets/img/3.jpg"
      },
      {
        id: 4,
        title: 'Team Gone Again and Knucklehead Racing Offseason Preparations',
        data: "The Supercat Racing group season is just around the corner and Sterling Performance is proud to announce that Team Gone Again and Knucklehead Racing will be powered by Sterling Performance Engines. Both of these racing teams have been spending time preparing their boats for the upcoming offshore racing season",
        img: "../../assets/img/4.jpg"
      },
      {
        id: 5,
        title: 'Team Gone Again and Knucklehead Racing Offseason Preparations',
        data: "The Supercat Racing group season is just around the corner and Sterling Performance is proud to announce that Team Gone Again and Knucklehead Racing will be powered by Sterling Performance Engines. Both of these racing teams have been spending time preparing their boats for the upcoming offshore racing season",
        img: "../../assets/img/4.jpg"
      },
      {
        id: 6,
        title: 'Team Gone Again and Knucklehead Racing Offseason Preparations',
        data: "The Supercat Racing group season is just around the corner and Sterling Performance is proud to announce that Team Gone Again and Knucklehead Racing will be powered by Sterling Performance Engines. Both of these racing teams have been spending time preparing their boats for the upcoming offshore racing season",
        img: "../../assets/img/4.jpg"
      },
      {
        id: 7,
        title: 'Team Gone Again and Knucklehead Racing Offseason Preparations',
        data: "The Supercat Racing group season is just around the corner and Sterling Performance is proud to announce that Team Gone Again and Knucklehead Racing will be powered by Sterling Performance Engines. Both of these racing teams have been spending time preparing their boats for the upcoming offshore racing season",
        img: "../../assets/img/4.jpg"
      },
      {
        id: 8,
        title: 'Team Gone Again and Knucklehead Racing Offseason Preparations',
        data: "The Supercat Racing group season is just around the corner and Sterling Performance is proud to announce that Team Gone Again and Knucklehead Racing will be powered by Sterling Performance Engines. Both of these racing teams have been spending time preparing their boats for the upcoming offshore racing season",
        img: "../../assets/img/4.jpg"
      },
      {
        id: 9,
        title: 'Team Gone Again and Knucklehead Racing Offseason Preparations',
        data: "The Supercat Racing group season is just around the corner and Sterling Performance is proud to announce that Team Gone Again and Knucklehead Racing will be powered by Sterling Performance Engines. Both of these racing teams have been spending time preparing their boats for the upcoming offshore racing season",
        img: "../../assets/img/4.jpg"
      },
      {
        id: 10,
        title: 'Team Gone Again and Knucklehead Racing Offseason Preparations',
        data: "The Supercat Racing group season is just around the corner and Sterling Performance is proud to announce that Team Gone Again and Knucklehead Racing will be powered by Sterling Performance Engines. Both of these racing teams have been spending time preparing their boats for the upcoming offshore racing season",
        img: "../../assets/img/4.jpg"
      },
    ]
  }

}
