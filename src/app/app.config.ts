import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { IMAGE_CONFIG } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,
      // withHashLocation(),
      withInMemoryScrolling({scrollPositionRestoration: 'top'})
    ), 
    provideClientHydration(),
    // importProvidersFrom(HttpClientModule),
    provideHttpClient(withFetch()),
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true, 
        disableImageLazyLoadWarning: true
      }
    },
  ]
};
