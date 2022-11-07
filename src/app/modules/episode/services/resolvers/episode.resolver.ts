import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {catchError, Observable, of} from 'rxjs';

import {EpisodeService} from "../episode.service";
import {IEpisodeInfo} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})

export class EpisodeResolver implements Resolve<IEpisodeInfo | { error: Error }> {

  constructor(private episodeService: EpisodeService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEpisodeInfo | { error: Error }> {
    return this.episodeService.getAll(route.queryParams['page'], route.queryParams['name'])
      .pipe(catchError((error: Error) => {
        return of({error})
      }));
  }
}
