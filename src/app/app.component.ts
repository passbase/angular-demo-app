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
    Passbase.renderButton(document.getElementById('passbase-button'), (err, passport) => {},
      'YOUR_OWN_PUBLISHABLE_API_KEY', {});
  }


}
