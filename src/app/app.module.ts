import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import "@angular/compiler";
import { AppRoutingModule  , routes} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { CarouselModule } from 'primeng/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CareersComponent } from './careers/careers.component';
import { CarrerApplyComponent } from './carrer-apply/carrer-apply.component';
import { BlogsComponent } from './blogs/blogs.component';
import { TableModule } from 'primeng/table';
import { RacingEngineModule } from './racing-engine/racing-engine.module';
import { TestingServicesModule } from './testing-services/testing-services.module';
import { RequestQoutaComponent } from './request-qouta/request-qouta.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ContactUsComponent,
    AboutUsComponent,
    ServicesComponent,
    TestimonialsComponent,
    CareersComponent,
    CarrerApplyComponent,
    BlogsComponent,
    RequestQoutaComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule, RacingEngineModule, TestingServicesModule,
    CarouselModule,
    RouterModule.forRoot(routes, { useHash: true }),
    TableModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
