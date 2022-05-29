import { Component, OnInit, Input } from '@angular/core';
import { IOrder } from 'src/app/interfaces/order';
import { DataService } from 'src/app/services/data/data.service';
import { ModalService } from "src/app/services/modal.service";

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html'
})
export class OrdersTableComponent implements OnInit {
  collapseShow = "hidden";
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";
  orders:IOrder[] = []

  constructor(private data: DataService) {}

  ngOnInit() {
    this.getOrders()
  }

  getOrders() {
    this.data.getOrders().subscribe(r => {
      this.orders = r.data
      console.log(this.orders);

    })
  }

  modal:ModalService;
   ngAfterViewInit(): void {
    this.modal = new ModalService(".open-order-modal")
  }

  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }

}




