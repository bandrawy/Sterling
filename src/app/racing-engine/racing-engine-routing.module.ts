import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynoTestingComponent } from './dyno-testing/dyno-testing.component';
import { LearnAboutRacingComponent } from './learn-about-racing/learn-about-racing.component';
import { NewEngineSaleComponent } from './new-engine-sale/new-engine-sale.component';
import { RebuildsComponent } from './rebuilds/rebuilds.component';
import { RacingEngineComponent } from './racing-engine/racing-engine.component';
import { RacingComponentComponent } from './racing-component.component';

export const routes: Routes = [

  { path: 'racing-engine', component: RacingEngineComponent },
  { path: 'HighPerformanceEngine', component: NewEngineSaleComponent },
  { path: 'Rebuilds', component: RebuildsComponent },
  { path: 'Dyno-Testing', component: DynoTestingComponent },
  { path: 'Learn-About-Racing', component: LearnAboutRacingComponent },
  { path: '', redirectTo: 'racing-engine', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RacingEngineRoutingModule { }
