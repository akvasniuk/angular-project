import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {EpisodeService} from "../episode.service";
import {IEpisode} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})

export class EpisodeDetailsResolver implements Resolve<IEpisode> {
  constructor(private episodeService: EpisodeService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEpisode> {
    return this.episodeService.getById(route.params['id']);
  }
}
