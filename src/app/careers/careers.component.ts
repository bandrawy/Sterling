import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
  Showdiv: boolean = false;
  flag: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    AOS.init();
  }
  onClickShowMoreJob() {
    
      if (this.flag == false) {
        this.Showdiv = true;
        this.flag = true;
      }
      else {
        this.Showdiv = false;
        this.flag = false;
      }
   
  }
  routeToApplyCarrer() {
    this.router.navigate(['/ApplyForJob']);
  }
}
