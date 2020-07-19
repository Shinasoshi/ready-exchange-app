import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'charts',
    loadChildren: () => import('./pages/charts/charts.module').then(m => m.ChartsModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
