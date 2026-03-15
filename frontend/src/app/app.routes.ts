import { Routes } from '@angular/router';

import { TestPageComponent } from './pages/test-page/test-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'test' },
  { path: 'test', component: TestPageComponent },
];
