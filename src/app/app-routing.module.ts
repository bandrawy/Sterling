import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CareersComponent } from './careers/careers.component';
import { CarrerApplyComponent } from './carrer-apply/carrer-apply.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RacingComponentComponent } from './racing-engine/racing-component.component';
import { RacingEngineComponent } from './racing-engine/racing-engine/racing-engine.component';
import { RequestQoutaComponent } from './request-qouta/request-qouta.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TestingServicesComponent } from './testing-services/testing-services/testing-services.component';

export const routes: Routes = [
  { path: 'Home', component: HomePageComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'Testimonials', component: TestimonialsComponent },
  { path: 'Careers', component: CareersComponent },
  { path: 'ApplyForJob', component: CarrerApplyComponent },
  { path: 'Blogs', component: BlogsComponent },
  { path: 'Racing-Engine', component: RacingEngineComponent },
  { path: 'Testing-Services', component: TestingServicesComponent },
  { path: 'RequestQouta', component: RequestQoutaComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
