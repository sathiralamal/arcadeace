import { APP_INITIALIZER, ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import {
  HttpBackend,
  HttpClient,
  provideHttpClient,
} from "@angular/common/http";
import { AppConfigServiceService } from "./service/app-config-service.service";

// export function configInitializer(
//   appConfig: AppConfigServiceService,
//   http: HttpClient
// ) {
//   appConfig.loadingConfiguration();
// }

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: configInitializer,
    //   deps: [AppConfigServiceService, HttpClient],
    //   multi: true,
    // },
  ],
};
