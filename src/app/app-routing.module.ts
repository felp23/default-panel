import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomePageComponent } from './home-page/home-page.component';
// import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
    { 
        path: '', 
        component: DashboardComponent 
    },
//   { path: '404', component: NotFoundPageComponent },
//   { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
