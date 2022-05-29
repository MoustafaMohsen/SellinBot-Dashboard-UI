import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botcontrol-table',
  templateUrl: './botcontrol-table.component.html'
})
export class BotcontrolTableComponent implements OnInit {

  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";
  
  constructor() { }

  ngOnInit(): void {
  }

}
