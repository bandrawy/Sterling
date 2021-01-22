import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-testing-services',
  templateUrl: './header-testing-services.component.html',
  styleUrls: ['./header-testing-services.component.css']
})
export class HeaderTestingServicesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigatetoPage(pagename: string) {
    this.router.navigate(['/' + pagename]);
  }
}
