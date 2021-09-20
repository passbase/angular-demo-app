import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import Passbase from "@passbase/button";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "passbase-test";

  @ViewChild("passbaseButton", { static: false }) passbaseButton: ElementRef;

  ngOnInit(): void {}

  ngAfterViewInit() {
    Passbase.renderButton(
      this.passbaseButton.nativeElement,
      "YOUR_API_KEY",
      {
        onFinish: (identityAccessKey) => {},
        onSubmitted: (identityAccessKey) => {},
        onError: (errorCode) => {},
        onStart: () => {},
      }
    );
  }
}
