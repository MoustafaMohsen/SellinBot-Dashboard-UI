import { Api } from './../api/api.service';
import { Injectable } from '@angular/core';
import { ICheckoutOptions } from 'src/app/interfaces/checkout';
declare var RapydCheckoutToolkit:new (options:ICheckoutOptions)=>any
@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  constructor(private api: Api) { }

  getChekout(amount: number) {
    this.api.post("/checkout", {
      amount: 123.45,
      complete_payment_url: "http://example.com/complete",
      country: "SG",
      currency: "SGD",
      error_payment_url: "http://example.com/error",
      ewallet: "ewallet_f19f68e164acb188b8976a4a02a772cf"
    })
  }
  isInited = false
  /**
   * renders the checkout
   * <div id="rapyd-checkout"></div>
   * @param success On success callback
   * @param loading On Loading callback
   * @param failure On failure callback
   */
  renderCheckout(success?: (event: Event) => void, loading?: (event: Event) => void, failure?: (event: Event) => void) {

    // init checkout script if it wasn't already
    if(!this.isInited){
      this.initCheckoutScript()
    }
    let checkout = new RapydCheckoutToolkit({
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
    });

    checkout.displayCheckout();

    window.addEventListener('onCheckoutPaymentSuccess', success)
    window.addEventListener('onCheckoutFailure', failure)
    window.addEventListener('onLoading', loading)
  }


  closeCheckout(checkout){
    checkout.closeCheckout();
  }

  initCheckoutScript(): void {
    let node = document.createElement('script');
    node.src = "https://checkouttoolkit.rapyd.net";
    node.type = 'text/javascript';
    node.async = false;
    document.getElementsByTagName('head')[0].appendChild(node);
    this.isInited = true
 }
}
