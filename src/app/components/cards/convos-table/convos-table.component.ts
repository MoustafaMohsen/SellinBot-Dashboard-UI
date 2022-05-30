import { Component, OnInit, Input } from "@angular/core";
import { IConversation } from "src/app/interfaces/conversation";
import { DataService } from "src/app/services/data/data.service";
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
  constructor(private data: DataService) {
    this.getConversations()
  }

  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";
  conversations: IConversation[] = []
  modal_conversation: IConversation
  getConversations() {
    this.data.getConversations().subscribe(r => {
      this.conversations = r.data
      console.log(this.conversations);

    })
  }


  viewConversation(c) {
    this.modal_conversation = c;
    console.log("viewConversation(c)", this.modal_conversation?.meta?.messages);

    this.modal.openModal()
  }
  modal: ModalService;
  ngAfterViewInit(): void {
    this.modal = new ModalService(".open-convo-modal")
  }
  ngOnInit() { }
  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }
}




