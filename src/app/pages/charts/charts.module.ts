import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts.component';
import { ChartsRoutingModule } from './charts-routing.module';
import { ApiService } from '../../services/api.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [ChartsComponent],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    NgxChartsModule
  ],
  exports: [ChartsComponent],
  providers: [
    ApiService,
  ],
})
export class ChartsModule { }
