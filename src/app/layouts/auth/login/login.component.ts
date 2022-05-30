import { IUserObject } from './../../../interfaces/idbcontact';
import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data/data.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  constructor(private data:DataService, private router: Router) {}
  text="";
  ngOnInit(): void {}

  login(){
    let user:IUserObject = {
      email:"bob26@gmail.com",
      password_hash:"example#"
    }
    this.data.login(user as any).subscribe(r=>{
      console.log(r);
      if (r.success) {
        this.router.navigate(['merchant']);
      }else{
        this.text = r.message
        setTimeout(() => {
          this.text = ""
        }, 10000);
      }
    })
  }
}
