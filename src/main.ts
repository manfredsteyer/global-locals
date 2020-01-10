import { enableProdMode, MissingTranslationStrategy, LOCALE_ID,  } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// import localeDe from '@angular/common/locales/de';
// import localeDeAt from '@angular/common/locales/de-AT';
// import localeEs from '@angular/common/locales/es';
// import { registerLocaleData } from '@angular/common';


// registerLocaleData(localeDe);     // de-DE
// registerLocaleData(localeDeAt);   // de-AT
// registerLocaleData(localeEs);     // es-ES

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
