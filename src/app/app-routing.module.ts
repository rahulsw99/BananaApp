import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BanalyticsIndividualComponent } from './banalytics-individual/banalytics-individual.component';
import { BanalyticsComponent } from './banalytics/banalytics.component';

const routes: Routes = [
  { path: "banalytics", component: BanalyticsComponent },
  { path: "banalytics/individual/:name", component: BanalyticsIndividualComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
