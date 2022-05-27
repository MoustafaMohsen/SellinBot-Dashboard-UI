import { Component, OnInit } from "@angular/core";
import { StylesService } from "src/app/services/styles.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  collapseShow = "hidden";
  constructor() {}

  ngOnInit() {
    // setup modal
    let modal = new StylesService(".sidebar-modal","sidebar-modal-open", "sidebar-modal-close")
  }
  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }
}
