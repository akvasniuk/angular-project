import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common'

import {IEpisode} from "../../interfaces";

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.css']
})

export class EpisodeDetailsComponent {
  episode: IEpisode;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private location: Location) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.episode = this.router.getCurrentNavigation()?.extras.state?.['episode'];

      if (!this.episode) {
        this.activatedRoute.data.subscribe(({episode}) => {
          this.episode = episode;
        })
      }
    })
  }

  switchToPreviousPage(): void {
    this.location.back();
  }
}
