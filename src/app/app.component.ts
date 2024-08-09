import { Component, OnInit } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./common/header/header.component";
import { FooterComponent } from "./common/footer/footer.component";
import { initializeApp } from "firebase/app";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    RouterModule,
    HttpClientModule,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent implements OnInit {
  title = "arcadeace";

  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: "AIzaSyBZaAGEeuRSlHvGOGL-7gzYDU632Sk9GRE",
      authDomain: "arcadeace-e4205.firebaseapp.com",
      projectId: "arcadeace-e4205",
      storageBucket: "arcadeace-e4205.appspot.com",
      messagingSenderId: "494184868755",
      appId: "1:494184868755:web:d4a28b41652acf8a285666",
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
  }
}
