import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'passbase-test';

  ngOnInit(): void {
    // @ts-ignore
    // Passbase Authentication Flow
    Passbase.renderButton(
      document.getElementById('passbase-button'), 
      (err, passport) => {},
      "YOUR_OWN_PUBLISHABLE_API_KEY",
      {
        integrationType: "signup",
        additionalAttributes: {
          customer_user_id: "SOME_USER_ID"
        },
        prefillAttributes:{
          email: "user@email.de",
          country: "de"
        },
        theme: {
          accentColor: "#ff0000",
          font: "Fira"
        }
      }
    )

    // Passbase Reauthentication Flow
    // Passbase.renderButton(
    //   document.getElementById('passbase-button'), 
    //   (err, passport) => {},
    //   "YOUR_OWN_PUBLISHABLE_API_KEY",
    //   {
    //     integrationType: "login"
    //   }
    // )
  }


}
