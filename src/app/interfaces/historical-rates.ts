import { BaseEnum } from '../enums/base.enum';

export interface HistoricalRates {
  base: BaseEnum;
  start_at: Date;
  end_at: Date;
  rates: {};
}
