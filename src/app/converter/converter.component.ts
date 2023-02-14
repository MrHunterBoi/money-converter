import {Component} from '@angular/core';
import {ConverterApiService} from "../service/converter-api.service";

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent {
  constructor(private ConverterApiSvc: ConverterApiService) {
  }

  currencyValues: any = null;

  async ngOnInit() {
    this.currencyValues = this.ConverterApiSvc.getValues();
  }

  fields: any = [
    {input: '', rate: 1},
    {input: '', rate: 1}
  ]

  changeValues(event: any, index: number) {
    this.fields[1 - index].input =
      Math.round(event / this.fields[1 - index].rate * this.fields[index].rate * 100) / 100;
  }

  changeRate(event: any, index: number) {
    this.fields[index].rate = this.currencyValues.find((i: any) => i.cc === event.target.value).rate;
    this.changeValues(this.fields[index].input, index);
  }
}
