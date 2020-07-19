import { Component, OnDestroy } from '@angular/core';
import { BaseEnum } from '../../enums/base.enum';
import { SymbolEnum } from '../../enums/symbol.enum';
import { ApiService } from '../../services/api.service';
import { Slide } from '../../interfaces/slide';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnDestroy {
  destroyed$: Subject<boolean> = new Subject<boolean>();

  slides: Slide[] = [
    {
      base: BaseEnum.EUR,
      symbol: SymbolEnum.PLN,
      rate: this.apiService.getLatestRates(BaseEnum.EUR, SymbolEnum.PLN)
    },
    {
      base: BaseEnum.USD,
      symbol: SymbolEnum.GBP,
      rate: this.apiService.getLatestRates(BaseEnum.USD, SymbolEnum.GBP)
    },
    {
      base: BaseEnum.CAD,
      symbol: SymbolEnum.CHF,
      rate: this.apiService.getLatestRates(BaseEnum.CAD, SymbolEnum.CHF)
    },
  ];

  constructor(
    private apiService: ApiService
  ) {
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  updateRate(index: number) {
    this.slides[index].rate.pipe(takeUntil(this.destroyed$)).subscribe();
  }
}
