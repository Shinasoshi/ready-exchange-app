import { BaseEnum } from '../enums/base.enum';

export interface ExchangeRates {
  base: BaseEnum;
  date: Date;
  rates: {
    PLN?: string;
    GBP?: string;
    CHF?: string;
  };
}
