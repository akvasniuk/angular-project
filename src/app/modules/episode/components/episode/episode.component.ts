import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IEpisode} from "../../interfaces";

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})

export class EpisodeComponent {
  @Input()
  episode: IEpisode;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  getDetails(): void {
    this.router.navigate([this.episode.id], {
      relativeTo: this.activatedRoute,
      state: {episode: this.episode}
    });
  }
}
