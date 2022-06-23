import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { NavigationPageComponent } from './pages/navigation-page/navigation-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HTTPService } from './services/http.service';
import { DeliveriesComponent } from './pages/deliveries/deliveries.component';
import { AllBusinessesComponent } from './pages/all-businesses/all-businesses.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { MyDeliveriesComponent } from './pages/my-deliveries/my-deliveries.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    NavigationPageComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    DeliveriesComponent,
    AllBusinessesComponent,
    ClientsComponent,
    MyDeliveriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HTTPService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
