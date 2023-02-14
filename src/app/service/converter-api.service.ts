import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConverterApiService {
  constructor(private HttpClient: HttpClient) {
    this.init();
  }

  apiURL: string = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'

  currencyValues: any = [];
  currencyArr: string[] = ['USD', 'EUR', 'PLN'];

  init() {
    this.HttpClient.get(this.apiURL).subscribe(res => this.checkCurrencies(res));
    this.currencyValues.push({
      cc: 'UAH',
      rate: '1'
    })
  }

  getValues() {
    return this.currencyValues;
  }

  checkCurrencies(arr: any) {
    arr.forEach((item: any) => {
      if (this.currencyArr.find(i => item.cc === i)) {
        item.rate = parseFloat(item.rate).toFixed(2);
        this.currencyValues.push(item);
      }
    });
  }
}
