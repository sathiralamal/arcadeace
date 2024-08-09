import { HttpClient } from "@angular/common/http";
import { ApplicationConfig, Injectable } from "@angular/core";
import { Configuration } from "../models/Configuration";

@Injectable({
  providedIn: "root",
})
export class AppConfigServiceService {
  configData: Configuration | undefined;
  constructor(private http: HttpClient) {}

  loadingConfiguration(): Promise<void> {
    return this.http
      .get<Configuration>("/assets/config.json")
      .toPromise()
      .then((data) => {
        this.configData = data;
      });
  }

  getConfigurationData(): Configuration | undefined {
    return this.configData;
  }
}
