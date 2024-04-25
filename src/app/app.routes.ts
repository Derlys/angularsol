import { Routes } from '@angular/router';
import {WalletComponent} from './wallet/wallet.component'
import {HomeComponent} from './home/home.component'
import {LayoutComponent} from './ui/layout.component'

export const routes: Routes = [
  {
    path: '',
    // If this path is the 'full' match...
    pathMatch: 'full',
    // ...redirect to this route.
    redirectTo:'home',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'wallet', component: WalletComponent },

    ],
  }
];
