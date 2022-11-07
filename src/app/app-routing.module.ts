import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: "", redirectTo: 'episodes', pathMatch: "full"},
      {
        path: 'episodes',
        loadChildren: () => import('./modules/episode/episode.module').then(value => value.EpisodeModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
