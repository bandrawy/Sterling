import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RacingEngineRoutingModule, routes } from './racing-engine-routing.module';
import { RacingEngineComponent } from './racing-engine/racing-engine.component';
import { HeaderRacingEngineComponent } from './header-racing-engine/header-racing-engine.component';
import { NewEngineSaleComponent } from './new-engine-sale/new-engine-sale.component';
import { RebuildsComponent } from './rebuilds/rebuilds.component';
import { DynoTestingComponent } from './dyno-testing/dyno-testing.component';
import { LearnAboutRacingComponent } from './learn-about-racing/learn-about-racing.component';
import { RacingComponentComponent } from './racing-component.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RacingComponentComponent,
    RacingEngineComponent,
    HeaderRacingEngineComponent,
    NewEngineSaleComponent, RebuildsComponent,
    DynoTestingComponent,
    LearnAboutRacingComponent],
  imports: [
    CommonModule,
    RacingEngineRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [RacingComponentComponent]

})
export class RacingEngineModule { }
