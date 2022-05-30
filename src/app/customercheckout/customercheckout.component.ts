import { ICheckoutOptions } from 'src/app/interfaces/checkout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var RapydCheckoutToolkit:new (options:ICheckoutOptions)=>any

@Component({
  selector: 'app-customercheckout',
  templateUrl: './customercheckout.component.html',
  styleUrls: ['./customercheckout.component.css']
})
export class CustomercheckoutComponent implements OnInit {


  navbarOpen = false
  constructor(private route: ActivatedRoute) { }
  checkout_id: string = ""
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    // this.checkout_id = routeParams.get('checkout_id');
    this.checkout_id = "checkout_dab57d2fdd15213e36ace05a3c96ef8a"
    setTimeout(() => {
      this.renderCheckout()
    }, 50);

  }

  renderCheckout() {
    if (!this.checkout_id) {
      return
    }
    let options: ICheckoutOptions = {
      pay_button_text: "Click to pay",
      // Text that appears on the 'Pay' button.
      // String. Maximum length is 16 characters.
      // Default is "Place Your Order". Optional.
      pay_button_color: "blue",
      // Color of the 'Pay' button. String.
      // Standard CSS color name or hexadecimal code such as #323fff.
      // Default is the color that is returned in the 'merchant_color'
      // field of the response to 'Create Checkout Page'. Optional.
      id: this.checkout_id,
      // ID of the 'Create Checkout Page' response. String. Required.
      close_on_complete: true,
      // Causes the embedded Rapyd Checkout Toolkit window to close
      // when the payment is complete. Boolean. Default is 'true'. Optional.
      page_type: "collection"
      // Default is "collection". Optional.
    }

    const checkout = new RapydCheckoutToolkit(options);
    checkout.displayCheckout();

    window.addEventListener("onCheckoutPaymentSuccess", function (event:any) {
      console.log(event.detail);
    });
    window.addEventListener("onCheckoutFailure", function (event:any) {
      console.log(event.detail.error);
      checkout.closeCheckout();
    });
    window.addEventListener("onLoading", function (event:any) {
      console.log(event.detail.error);
    });
  }

}
