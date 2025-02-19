import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import  routeConfig  from './app/route/route.module';
import { HttpClientModule } from "@angular/common/http";
import { enableProdMode, importProvidersFrom } from "@angular/core";
import { provideHttpClient } from "@angular/common/http";


bootstrapApplication(AppComponent,{

  providers: [
    provideRouter(routeConfig),importProvidersFrom(HttpClientModule)
  ]
}).catch((err) => console.error(err));
