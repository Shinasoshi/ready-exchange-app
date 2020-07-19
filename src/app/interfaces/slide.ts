import { BaseEnum } from '../enums/base.enum';
import { SymbolEnum } from '../enums/symbol.enum';
import { ExchangeRates } from './exchange-rates';
import { Observable } from 'rxjs';

export interface Slide {
  base: BaseEnum,
  symbol: SymbolEnum,
  rate: Observable<ExchangeRates>
}
