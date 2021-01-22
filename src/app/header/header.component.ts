import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const CollapseNavBar: any; 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  RouteToPage(routeName: string) {
    this.router.navigate(["/"+routeName]);
    CollapseNavBar();
  }
 
}
