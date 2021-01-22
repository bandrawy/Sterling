import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-racing-engine',
  templateUrl: './header-racing-engine.component.html',
  styleUrls: ['./header-racing-engine.component.css']
})
export class HeaderRacingEngineComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  GoToNewEngine() {
    this.router.navigate(['/HighPerformanceEngine']);
  }
  GoToRebuilds() {
    this.router.navigate(['/Rebuilds']);
  }
  DynoTesting() {
    this.router.navigate(['/Dyno-Testing']);
  }
  learnMoreAboutRacing() {
    this.router.navigate(['/Learn-About-Racing']);
  }
}
