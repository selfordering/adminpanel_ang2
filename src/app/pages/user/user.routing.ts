import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './User.component';
import { UserHomeComponent } from './components/user-home/user-home.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'user-home', component: UserHomeComponent },
      { path: 'user-add', component: UserHomeComponent },
      { path: 'user-block', component: UserHomeComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);