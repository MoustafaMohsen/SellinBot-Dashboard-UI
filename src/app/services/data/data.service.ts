import { Api } from './../api/api.service';
import { HelperService } from 'src/app/services/util/helper';
import { IProduct } from 'src/app/interfaces/product';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { IOrder } from 'src/app/interfaces/order';
import { IConversation } from 'src/app/interfaces/conversation';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private api: Api) { }

  readonlymode = false;
  products: IProduct[] = [];
  orders: IOrder[] = [];
  conversations: IConversation[] = [];

  getProducts() {
    return this.api.post<IProduct[]>("products/get-all", null).pipe(tap((ps)=>{
      console.log("getProducts pipe", ps);
      this.products = ps?.data || []
    }))
  }

  createProduct(product: IProduct) {
    return this.api.post<IProduct[]>("products/create", product)
  }

  getOrders() {
    return this.api.post<IOrder[]>("orders/get-all", null).pipe(tap((ps)=>{
      console.log("getOrders pipe", ps);
      this.orders = ps?.data || []
    }))
  }

  createOrder(order: IOrder) {
    return this.api.post<IOrder[]>("orders/create", order)
  }

  getConversations() {
    return this.api.post<IConversation[]>("conversations/get-all", null).pipe(tap((ps)=>{
      console.log("getConversations pipe", ps);
      this.conversations = ps?.data || []
    }))
  }

  createConversation(conversation: IConversation) {
    return this.api.post<IConversation[]>("conversations/create", conversation)
  }

}

