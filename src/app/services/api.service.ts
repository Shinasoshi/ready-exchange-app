import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BaseEnum } from '../enums/base.enum';
import { SymbolEnum } from '../enums/symbol.enum';
import { Observable } from 'rxjs';
import { ExchangeRates } from '../interfaces/exchange-rates';

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
}
