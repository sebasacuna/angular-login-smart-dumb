import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './containers/home/home.component';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./containers/login/modules/login.module').then(m => m.LoginModule)
  },
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
