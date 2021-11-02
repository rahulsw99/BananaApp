import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanalyticsComponent } from './banalytics/banalytics.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxPaginationModule } from "ngx-pagination";
import { BanalyticsIndividualComponent } from './banalytics-individual/banalytics-individual.component';
@NgModule({
  declarations: [
    AppComponent,
    BanalyticsComponent,
    BanalyticsIndividualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
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
