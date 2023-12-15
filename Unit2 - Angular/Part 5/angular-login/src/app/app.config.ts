import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideGoogleId } from './google-login/google-login.config';
import { provideFacebookId } from './facebook-login/facebook-login.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideGoogleId(
      '746820501392-oalflicqch2kuc12s8rclb5rf7b1fist.apps.googleusercontent.com'
    ),
    provideFacebookId('551918016324547', 'v15.0')
  ],
};
