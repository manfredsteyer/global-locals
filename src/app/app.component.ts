import { Component, ɵfindLocaleData } from '@angular/core';
import { SimpleLoaderService } from './simple-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  date = new Date('2020-01-20T17:00+01:00');
  lang = 'en-US';

  constructor(private loader: SimpleLoaderService) {
  }

  toGerman() {
    this.loader
        .loadScript('assets/de.js')
        .then(_ => this.lang = 'de-DE')
        .catch(err => console.error('Error loading file', err));
  }

}
