import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IEpisode, IEpisodeInfo} from "../interfaces";
import {urls} from "../../../configs";

@Injectable({
  providedIn: 'root'
})

export class EpisodeService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(page: number, name: string = ""): Observable<IEpisodeInfo> {
    return this.httpClient.get<IEpisodeInfo>(`${urls.episodes}`, {params: {page, name}});
  }

  getById(id: number): Observable<IEpisode> {
    return this.httpClient.get<IEpisode>(`${urls.episodes}/${id}`);
  }
}
