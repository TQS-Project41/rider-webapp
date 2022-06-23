import { NavigationPageComponent } from './pages/navigation-page/navigation-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DeliveriesComponent } from './pages/deliveries/deliveries.component';
import { AllBusinessesComponent } from './pages/all-businesses/all-businesses.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { MyDeliveriesComponent } from './pages/my-deliveries/my-deliveries.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
  { path: '', component: IndexPageComponent },
  { path: 'my_deliveries', component: MyDeliveriesComponent },
  { path: 'all_businesses', component: AllBusinessesComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'deliveries', component: DeliveriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
