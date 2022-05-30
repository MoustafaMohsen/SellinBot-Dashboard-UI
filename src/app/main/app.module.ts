import { Api } from './../services/api/api.service';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// layouts
import { AdminComponent } from "../layouts/admin/admin.component";
import { AuthComponent } from "../layouts/auth/auth.component";

// admin views
import { ProductsComponent } from "../layouts/admin/products/products.component";
import { BotcontrolComponent } from "../layouts/admin/botcontrol/botcontrol.component";
import { ConvosComponent } from "../layouts/admin/convos/convos.component";
import { OrdersComponent } from '../layouts/admin/orders/orders.component';

// auth views
import { LoginComponent } from "../layouts/auth/login/login.component";
import { RegisterComponent } from "../layouts/auth/register/register.component";

// components for views and layouts
import { AdminNavbarComponent } from "../components/navbars/admin-navbar/admin-navbar.component";
import { AuthNavbarComponent } from "../components/navbars/auth-navbar/auth-navbar.component";
import { ProductsTableComponent } from "../components/cards/products-table/products-table.component";
import { CardStatsComponent } from "../components/cards/card-stats/card-stats.component";
import { ConvosTableComponent } from "../components/cards/convos-table/convos-table.component";
import { HeaderStatsComponent } from "../components/headers/header-stats/header-stats.component";
import { TableDropdownComponent } from "../components/dropdowns/table-dropdown/table-dropdown.component";
import { NotificationDropdownComponent } from "../components/dropdowns/notification-dropdown/notification-dropdown.component";
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { UserDropdownComponent } from "../components/dropdowns/user-dropdown/user-dropdown.component";
import { OrdersTableComponent } from '../components/cards/orders-table/orders-table.component';
import { BotcontrolTableComponent } from '../components/cards/botcontrol-table/botcontrol-table.component';
import { CustomercheckoutComponent } from '../customercheckout/customercheckout.component';
import { CheckoutService } from "../services/payment/checkout.service";
import { HttpClientModule } from '@angular/common/http';
import { InputFieldComponent } from '../components/input-field/input-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    TableDropdownComponent,
    NotificationDropdownComponent,
    UserDropdownComponent,
    SidebarComponent,
    ProductsTableComponent,
    CardStatsComponent,
    ConvosTableComponent,
    HeaderStatsComponent,
    AuthNavbarComponent,
    AdminNavbarComponent,
    AdminComponent,
    AuthComponent,
    BotcontrolComponent,
    ConvosComponent,
    LoginComponent,
    RegisterComponent,
    OrdersComponent,
    OrdersTableComponent,
    BotcontrolTableComponent,
    CustomercheckoutComponent,
    InputFieldComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [Api, CheckoutService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
