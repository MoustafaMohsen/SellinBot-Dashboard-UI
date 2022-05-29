import { Component, OnInit, Input } from "@angular/core";
import { ModalService } from "src/app/services/modal.service";
@Component({
  selector: "app-convos-table",
  templateUrl: "./convos-table.component.html",
})
export class ConvosTableComponent implements OnInit {
  collapseShow = "hidden";
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  constructor() { }
  modal: ModalService;
  ngAfterViewInit(): void {
    this.modal = new ModalService(".open-convo-modal")
  }
  ngOnInit() { }
  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }
}




