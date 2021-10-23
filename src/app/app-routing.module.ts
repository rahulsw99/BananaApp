import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BanalyticsComponent } from './banalytics/banalytics.component';

const routes: Routes = [
  { path: "banalytics", component: BanalyticsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
