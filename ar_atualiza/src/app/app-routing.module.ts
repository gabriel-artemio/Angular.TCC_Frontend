import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './componentes/layout/layout.component';
import { HomeComponent } from './componentes/home/home.component';
import { LogComponent } from './componentes/log/log.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { 
        path: 'home', 
        component: HomeComponent,
        data: { title: 'Home' }
      },
      { 
        path: 'log', 
        component: LogComponent,
        data: { title: 'Logs' }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
