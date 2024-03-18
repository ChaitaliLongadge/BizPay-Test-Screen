import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { WalletComponent } from './wallet/wallet.component';

export const routes: Routes = [
{ path :"", component: HomeComponent},
{ path :"Home", component: HomeComponent},
{ path :"Header", component: HeaderComponent},
{ path :"Wallet", component: WalletComponent}

];
