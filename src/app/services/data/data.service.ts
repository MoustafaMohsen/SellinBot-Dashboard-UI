import { IUserObject } from './../../interfaces/idbcontact';
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
  constructor(private api: Api) {
    this.loadUser();
  }

  readonlymode = false;
  products: IProduct[] = [];
  orders: IOrder[] = [];
  user: IUserObject = {} as any;
  conversations: IConversation[] = [];

  getProducts() {
    return this.api.post<IProduct[]>("products/get-all", null).pipe(tap((ps) => {
      console.log("getProducts pipe", ps);
      this.products = ps?.data || []
    }))
  }

  createProduct(product: IProduct) {
    return this.api.post<IProduct[]>("products/create", product)
  }

  updateProduct(product: {
    new_product: IProduct,
    old_product: IProduct
  }) {
    return this.api.post<IProduct[]>("products/update", product)
  }

  deleteProduct(product: IProduct) {
    return this.api.post<IProduct[]>("products/delete", product)
  }

  getOrders() {
    return this.api.post<IOrder[]>("orders/get-all", null).pipe(tap((ps) => {
      console.log("getOrders pipe", ps);
      this.orders = ps?.data || []
    }))
  }

  createOrder(order: IOrder) {
    return this.api.post<IOrder[]>("orders/create", order)
  }

  getConversations() {
    return this.api.post<IConversation[]>("conversations/get-all", null).pipe(tap((ps) => {
      console.log("getConversations pipe", ps);
      this.conversations = ps?.data || []
    }))
  }

  createConversation(conversation: IConversation) {
    return this.api.post<IConversation[]>("conversations/create", conversation)
  }

  login(user: { email: string; password_hash: string }) {
    let paymentUrl = this.api.paymentUrl;
    return this.api.post<IUserObject>(paymentUrl + "/user/get", user).pipe(tap((ps) => {
      console.log("getConversations pipe", ps);
      this.user = ps?.data || {} as any
      this.saveUserToStorage(this.user)
    }))
  }
  logout() {
    this.user = {}
    localStorage.removeItem("user")
  }

  saveUserToStorage(user: IUserObject) {
    localStorage.setItem("user", JSON.stringify(user))
  }

  getUserFromStorage(): IUserObject {
    let user = localStorage.getItem("user")
    if (user) {
      let parseduser: IUserObject = JSON.parse(user)
      return parseduser;
    }
    return null;
  }

  loadUser() {
    let user = this.getUserFromStorage()
    if (user) {
      this.user = user
    }
  }
  isAuthenticated() {
    console.log("isAuthenticated", this.user.id);

    return this.user.id ? true : false;
  }
}

