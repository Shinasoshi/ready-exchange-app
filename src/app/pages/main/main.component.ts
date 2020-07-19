import { Component } from '@angular/core';
import { BaseEnum } from '../../enums/base.enum';
import { SymbolEnum } from '../../enums/symbol.enum';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  rateEurPln$ = this.apiService.getLatestRates(BaseEnum.EUR, SymbolEnum.PLN);

  constructor(
    private apiService: ApiService
  ) { }

}
