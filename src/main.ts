import 'zone.js';

import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { provideNativeDateAdapter } from '@angular/material/core';

import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routes';
import 'lucide';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTES),
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(FormsModule, ReactiveFormsModule),
    provideNativeDateAdapter()
  ]
}).catch(err => console.error(err));
