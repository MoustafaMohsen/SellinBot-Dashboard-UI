import { Component, OnInit , AfterViewInit } from "@angular/core";
import { ModalService } from "src/app/services/modal.service";

@Component({
  selector: "app-card-page-visits",
  templateUrl: "./card-page-visits.component.html",
})
export class CardPageVisitsComponent implements OnInit, AfterViewInit {
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

