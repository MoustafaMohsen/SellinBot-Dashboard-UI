import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// layouts
import { AdminComponent } from "../layouts/admin/admin.component";
import { AuthComponent } from "../layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "../layouts/admin/dashboard/dashboard.component";
import { SettingsComponent } from "../layouts/admin/settings/settings.component";
import { TablesComponent } from "../layouts/admin/tables/tables.component";

// auth views
import { LoginComponent } from "../layouts/auth/login/login.component";
import { RegisterComponent } from "../layouts/auth/register/register.component";

const routes: Routes = [
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "products", component: DashboardComponent },
      { path: "orders", component: SettingsComponent },
      { path: "convos", component: TablesComponent },
      { path: "botControl", component: TablesComponent },
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
  // no layout views
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
