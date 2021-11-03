import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from "angular-datatables";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanalyticsComponent } from './banalytics/banalytics.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxPaginationModule } from "ngx-pagination";
import { BanalyticsIndividualComponent } from './banalytics-individual/banalytics-individual.component';
import { BanalyticsSelectedOptionComponent } from './banalytics-selected-option/banalytics-selected-option.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BanalyticsComponent,
    BanalyticsIndividualComponent,
    BanalyticsSelectedOptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    NgxPaginationModule,
    FormsModule,
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
