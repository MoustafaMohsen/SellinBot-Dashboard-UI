import { ICheckoutOptions } from 'src/app/interfaces/checkout';
import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../services/payment/checkout.service';

@Component({
  selector: 'app-customercheckout',
  templateUrl: './customercheckout.component.html',
  styleUrls: ['./customercheckout.component.css']
})
export class CustomercheckoutComponent implements OnInit {

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit(): void {
  }

  renderCheckout() {
    let options:ICheckoutOptions = {
      pay_button_text: "Click to pay",
      // Text that appears on the 'Pay' button.
      // String. Maximum length is 16 characters.
      // Default is "Place Your Order". Optional.
      pay_button_color: "blue",
      // Color of the 'Pay' button. String.
      // Standard CSS color name or hexadecimal code such as #323fff.
      // Default is the color that is returned in the 'merchant_color'
      // field of the response to 'Create Checkout Page'. Optional.
      id: "checkout_693bac0ff263969b9f1814f510de37bf",
      // ID of the 'Create Checkout Page' response. String. Required.
      close_on_complete: true,
      // Causes the embedded Rapyd Checkout Toolkit window to close
      // when the payment is complete. Boolean. Default is 'true'. Optional.
      page_type: "collection"
      // Default is "collection". Optional.
    }
    this.checkoutService.renderCheckout(options)
  }

}
