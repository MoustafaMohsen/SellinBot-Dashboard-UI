import { Api } from './../api/api.service';
import { HelperService } from 'src/app/services/util/helper';
import { IProduct } from 'src/app/interfaces/product';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private api: Api) { }

  readonlymode = false;
  products: IProduct[] = [];

  getProducts() {
    return this.api.post<IProduct[]>("products/get-all", null).pipe(tap((ps)=>{
      console.log("getProducts pipe", ps);
      this.products = ps?.data || []
    }))
  }

  createProduct(product: IProduct) {
    return this.api.post<IProduct[]>("products/create", product)
  }

}

