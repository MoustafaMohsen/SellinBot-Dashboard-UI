import { IConversation } from 'src/app/interfaces/conversation';
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
  modal_conversation:IConversation
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";
  orders:IOrder[] = []
  modal_order:IOrder;
  text=""

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
  modal2:ModalService;
   ngAfterViewInit(): void {
    this.modal = new ModalService(".open-order-modal")
    this.modal2 = new ModalService(".open-order-convo-modal")
  }

  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }

  view(o){
    if (!this.data.conversations || !this.data.conversations.length) {
      this.data.getConversations().subscribe()
    }
    this.modal_order = o;
    this.modal.openModal()
  }

  viewConvo(){
    let o = this.modal_order
    let convo = this.data.conversations.filter((c)=>c.customer_id+""==o.customer_id+"")
    if (convo && convo.length) {
      this.modal_conversation = convo[0]
      this.modal2.openModal();
    }else{
      this.text = "Conversation not found!"
      setTimeout(() => {
        this.text = ""
      }, 10000);
    }
  }
}




