import { Component } from '@angular/core';

@Component({
  selector: 'ngbd-buttons-checkbox',
  templateUrl: './buttons-checkbox.html'
})
export class NgbdButtonsCheckbox {
  paymentModeStatus: string;
  selectedValueForPaymentModeChange = 'cash';
  paymentModeList: any = [];


  public constructor() { }

  ngOnInit() {
    this.getPaymentModeList();
    this.paymentModeStatus = this.paymentModeList[0].name;
  }

  getPaymentModeList() {
    this.paymentModeList = [
      {
        'checked': true,
        'name': 'Cash',
        'value': 'cash',
      },
      {
        'checked': false,
        'name': 'Pay to Accounts',
        'value': 'accounts',
      }
    ];
  }

}
