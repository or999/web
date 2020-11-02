import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DetailComponent } from './detail/detail.component';
import { MessageComponent } from './message/message.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MyguardGuard } from './myguard.guard';

const routes: Routes = [
  {
    path: 'heroes', component: HeroesComponent,
  canActivate: [MyguardGuard]},
  {
    path: 'detail/:id', component: DetailComponent,
    children: [{// 嵌套路由
      path: 'message', component: MessageComponent
    }]
  },
  { path: '', redirectTo: 'heroes', pathMatch: 'full' },
  // 重定向路由
  { path: '**', component: PagenotfoundComponent }, // 路由通配符
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
