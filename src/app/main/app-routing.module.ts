import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// layouts
import { AdminComponent } from "../layouts/admin/admin.component";
import { AuthComponent } from "../layouts/auth/auth.component";

// admin views
import { ProductsComponent } from "../layouts/admin/products/products.component";
import { BotcontrolComponent } from "../layouts/admin/botcontrol/botcontrol.component";
import { ConvosComponent } from "../layouts/admin/convos/convos.component";
import { OrdersComponent } from "../layouts/admin/orders/orders.component";

// auth views
import { LoginComponent } from "../layouts/auth/login/login.component";
import { RegisterComponent } from "../layouts/auth/register/register.component";

// customer checkout
import { CustomercheckoutComponent } from "../customercheckout/customercheckout.component";

const routes: Routes = [
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "products", component: ProductsComponent },
      { path: "orders", component: OrdersComponent },
      { path: "convos", component: ConvosComponent },
      { path: "botControl", component: BotcontrolComponent },
      { path: "", redirectTo: "products", pathMatch: "full" },
    ],
  },
  // auth views
  {
    path: "",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
  // customer checkout
  {
    path: "customer/checkout/:checkout_id",
    component: CustomercheckoutComponent,
  },
  // no layout views
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
