import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// layouts
import { AdminComponent } from "../layouts/admin/admin.component";
import { AuthComponent } from "../layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "../layouts/admin/dashboard/dashboard.component";
import { SettingsComponent } from "../layouts/admin/settings/settings.component";
import { TablesComponent } from "../layouts/admin/tables/tables.component";
import { OrdersComponent } from '../layouts/admin/orders/orders.component';

// auth views
import { LoginComponent } from "../layouts/auth/login/login.component";
import { RegisterComponent } from "../layouts/auth/register/register.component";

// components for views and layouts

import { AdminNavbarComponent } from "../components/navbars/admin-navbar/admin-navbar.component";
import { AuthNavbarComponent } from "../components/navbars/auth-navbar/auth-navbar.component";
import { CardPageVisitsComponent } from "../components/cards/card-page-visits/card-page-visits.component";
import { CardStatsComponent } from "../components/cards/card-stats/card-stats.component";
import { CardTableComponent } from "../components/cards/card-table/card-table.component";
import { HeaderStatsComponent } from "../components/headers/header-stats/header-stats.component";
import { TableDropdownComponent } from "../components/dropdowns/table-dropdown/table-dropdown.component";
import { NotificationDropdownComponent } from "../components/dropdowns/notification-dropdown/notification-dropdown.component";
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { UserDropdownComponent } from "../components/dropdowns/user-dropdown/user-dropdown.component";
import { OrdersTableComponent } from '../components/cards/orders-table/orders-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TableDropdownComponent,
    NotificationDropdownComponent,
    UserDropdownComponent,
    SidebarComponent,
    CardPageVisitsComponent,
    CardStatsComponent,
    CardTableComponent,
    HeaderStatsComponent,
    AuthNavbarComponent,
    AdminNavbarComponent,
    AdminComponent,
    AuthComponent,
    SettingsComponent,
    TablesComponent,
    LoginComponent,
    RegisterComponent,
    OrdersComponent,
    OrdersTableComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
