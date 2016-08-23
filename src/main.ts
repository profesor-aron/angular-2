import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { appRouterProviders } from './app/app.routes';

import {HTTP_PROVIDERS} from '@angular/http';

import { DataService } from './app/shared/services/data/data.service';
import { ToolService } from './app/shared/services/tool/tool.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  appRouterProviders,
  HTTP_PROVIDERS,
  DataService,
  ToolService
])
.catch(err => console.error(err));