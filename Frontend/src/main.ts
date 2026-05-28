import { bootstrapApplication } from '@angular/platform-browser';

import { appConfig } from './app/app.config';
import { provideAnimations } from '@angular/platform-browser/animations';
import { App } from './app/app';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { importProvidersFrom } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
     provideAnimations(),
     BsDropdownModule,
     TabsModule,ButtonsModule
  ]
});
