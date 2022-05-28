import { AfterViewInit, Component, OnInit } from "@angular/core";
import { ModalService } from "src/app/services/modal.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent implements OnInit, AfterViewInit {
  collapseShow = "hidden";

  constructor() {}

  modal:ModalService;
  ngAfterViewInit(): void {
    this.modal = new ModalService(".sidebar-modal")
  }

  ngOnInit() {}
  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }
  openModal(){    
    this.modal.openModal()
  }
  
}
