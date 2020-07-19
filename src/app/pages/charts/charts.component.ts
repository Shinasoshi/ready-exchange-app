import { Component, OnInit } from '@angular/core';
import { BaseEnum } from '../../enums/base.enum';
import { SymbolEnum } from '../../enums/symbol.enum';
import { ApiService } from '../../services/api.service';
import { map, pluck, tap } from 'rxjs/operators';
import { Serie } from '../../interfaces/serie';
import { ChartData } from '../../interfaces/chart-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  view: any[] = [1600, 900];
  legend = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  yAxisLabel = 'Rate';
  timeline = true;

  historicalRates$: Observable<ChartData[]>;

  constructor(
    private apiService: ApiService
  ) {
  }

  ngOnInit() {
    this.historicalRates$ = this.apiService
      .getHistoricalRates(BaseEnum.EUR, SymbolEnum.PLN, new Date('2010-01-01'), new Date())
      .pipe(
        pluck('rates'),
        map((rates): Serie[] => Object.keys(rates).map(date => {
          return {
            name: date,
            value: rates[date].PLN
          };
        })),
        map((series: Serie[]): ChartData[] => {
          return [{
            name: 'Historical rates for EUR -> PLN',
            series: series.sort((a, b) =>  a.name >= b.name ? 1 : -1)
          }];
        })
      );
  }

}
