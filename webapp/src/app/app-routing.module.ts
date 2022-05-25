import { NavigationPageComponent } from './pages/navigation-page/navigation-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPageComponent } from './pages/index-page/index-page.component';

const routes: Routes = [
  { path: '', component: IndexPageComponent },
  { path: 'navigation', component: NavigationPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
