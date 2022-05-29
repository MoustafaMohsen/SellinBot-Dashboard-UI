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
  /**
   * renders the checkout <div id="rapyd-checkout"></div>
   * @param success On success callback
   * @param loading On Loading callback
   * @param failure On failure callback
   */
  renderCheckout(options:ICheckoutOptions,success?: (event: Event) => void, loading?: (event: Event) => void, failure?: (event: Event) => void) {
    let checkout = new RapydCheckoutToolkit(options);

    checkout.displayCheckout();

    window.addEventListener('onCheckoutPaymentSuccess', success)
    window.addEventListener('onCheckoutFailure', failure)
    window.addEventListener('onLoading', loading)
  }


  closeCheckout(checkout){
    checkout.closeCheckout();
  }
}
