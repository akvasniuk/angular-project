import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {EpisodePageComponent} from "./components/episode-page/episode-page.component";
import {EpisodeResolver, EpisodeDetailsResolver} from "./services/resolvers";
import {EpisodeDetailsComponent} from "./components/episode-details/episode-details.component";

const routes: Routes = [
  {
    path: "", resolve: {episode: EpisodeResolver}, runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
    component: EpisodePageComponent
  },
  {path: ":id", resolve: {episode: EpisodeDetailsResolver}, runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
    component: EpisodeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodeRoutingModule {
}
