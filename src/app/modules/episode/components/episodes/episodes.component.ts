import {Component, Input} from '@angular/core';

import {IEpisode} from "../../interfaces";

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent {
  @Input()
  episodes: IEpisode[];
}
