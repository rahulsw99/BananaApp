import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BanalyticsIndividualComponent } from './banalytics-individual/banalytics-individual.component';
import { BanalyticsSelectedOptionComponent } from './banalytics-selected-option/banalytics-selected-option.component';
import { BanalyticsComponent } from './banalytics/banalytics.component';

const routes: Routes = [
  { path: "banalytics", component: BanalyticsComponent },
  { path: "banalytics/individual/:name", component: BanalyticsIndividualComponent},
  { path: "banalytics/selected/option/:chosenDropDown", component:BanalyticsSelectedOptionComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
