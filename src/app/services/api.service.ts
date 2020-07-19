import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BaseEnum } from '../enums/base.enum';
import { SymbolEnum } from '../enums/symbol.enum';
import { Observable } from 'rxjs';
import { ExchangeRates } from '../interfaces/exchange-rates';
import { HistoricalRates } from '../interfaces/historical-rates';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiBase = environment.apiBase;

  constructor(private http: HttpClient) {
  }

  getLatestRates(base: BaseEnum, symbols: SymbolEnum): Observable<ExchangeRates> {
    const params = new HttpParams({
      fromObject: {
        base,
        symbols,
      }
    });

    return this.http.get<ExchangeRates>(`${this.apiBase}/latest`, {params});
  }

  getHistoricalRates(base: BaseEnum, symbols: SymbolEnum, startAt: Date, endAt: Date): Observable<HistoricalRates> {
    const params = new HttpParams({
      fromObject: {
        base,
        symbols,
        start_at: startAt.toISOString().substring(0, 10),
        end_at: endAt.toISOString().substring(0, 10)
      }
    });

    return this.http.get<HistoricalRates>(`${this.apiBase}/history`, {params});
  }
}
