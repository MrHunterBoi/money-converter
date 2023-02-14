import {Component, OnInit} from '@angular/core';
import {ConverterApiService} from "../service/converter-api.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private ConverterApiSvc: ConverterApiService) {
  }

  currencyValues: any = null;

  async ngOnInit() {
    this.currencyValues = this.ConverterApiSvc.getValues();
  }
}
