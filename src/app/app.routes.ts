import { provideRouter, RouterConfig } from '@angular/router';

import { CitationComponent } from './components/citation/citation.component';
import { CategoriesComponent }   from './components/categories/categories.component';
import { SettingsCategoriesComponent }   from './components/settings-categories/settings-categories.component';
import { SettingsLanguageComponent }   from './components/settings-language/settings-language.component';

const routes: RouterConfig = [
  { path: 'citation/:idCategory', component: CitationComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'settings-categories', component: SettingsCategoriesComponent },
  { path: 'settings-language', component: SettingsLanguageComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];