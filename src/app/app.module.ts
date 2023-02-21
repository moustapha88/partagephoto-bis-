import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }from '@angular/common/http'
import { CoreModule } from './core/core.module';
import { FaceSnapsModule } from './face-snaps/components/face-snaps.module';
import { LandingPageModule } from './landing-page/components/landing-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    FaceSnapsModule,
    LandingPageModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}