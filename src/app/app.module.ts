import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MathexpComponent } from './pages/mathexp/mathexp.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MathexpComponent,
    NavbarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
