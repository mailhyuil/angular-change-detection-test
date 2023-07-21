import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { CatState } from './app/stores/cat.store';
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(NgxsModule.forRoot([CatState])),
  ],
}).catch((err) => console.error(err));
