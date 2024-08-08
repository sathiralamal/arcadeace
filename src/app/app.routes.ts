import { Routes } from "@angular/router";
import { HomeComponent } from "./layouts/home/home.component";
import { PrivacyComponent } from "./layouts/privacy/privacy.component";
import { DatateleteComponent } from "./layouts/datatelete/datatelete.component";
import { ContactComponent } from "./layouts/contact/contact.component";
import { AboutComponent } from "./layouts/about/about.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "privacy",
    component: PrivacyComponent,
  },
  {
    path: "data-policy",
    component: DatateleteComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  },
];
