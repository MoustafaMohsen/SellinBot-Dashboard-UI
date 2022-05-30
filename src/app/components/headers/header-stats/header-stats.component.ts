import { DataService } from 'src/app/services/data/data.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header-stats",
  templateUrl: "./header-stats.component.html",
})
export class HeaderStatsComponent implements OnInit {
  constructor(private data:DataService) {}
  revenue
  orders
  customers
  products
  ngOnInit(): void {
    this.data.getProducts().subscribe()
    this.data.getConversations().subscribe()
    this.data.getOrders().subscribe()
    setInterval(()=>{
      this.revenue = "$"+ this.data.user.wallet_balance + " USD"
      this.orders = this.data.orders.length
      this.products = this.data.products.length
      let temp = {}
      this.data.conversations.forEach(c=>{
        temp[c.customer_id] = 1
      })
      this.customers = Object.keys(temp)?.length;

    },2000)
  }
}
