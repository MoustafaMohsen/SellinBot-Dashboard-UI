import { Component, OnInit , AfterViewInit } from "@angular/core";
import { ModalService } from "src/app/services/modal.service";

@Component({
  selector: "app-products-table",
  templateUrl: "./products-table.component.html",
})
export class ProductsTableComponent implements OnInit, AfterViewInit {
  collapseShow = "hidden";

  constructor() {}

  modal:ModalService;
  modal2:ModalService;

  ngOnInit(): void {}
  
  ngAfterViewInit(): void {
    this.modal = new ModalService(".add-product-modal")
    this.modal2 = new ModalService(".edit-product-modal")
  }

  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }
  
}

