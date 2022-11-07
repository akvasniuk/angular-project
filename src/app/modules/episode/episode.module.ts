import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

import { EpisodeRoutingModule } from './episode-routing.module';
import { EpisodeComponent } from './components/episode/episode.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { EpisodePageComponent } from './components/episode-page/episode-page.component';
import { EpisodeDetailsComponent } from './components/episode-details/episode-details.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterComponent } from './components/character/character.component';

@NgModule({
  declarations: [
    EpisodeComponent,
    EpisodesComponent,
    EpisodePageComponent,
    EpisodeDetailsComponent,
    CharactersComponent,
    CharacterComponent,
  ],
  imports: [
    CommonModule,
    EpisodeRoutingModule,
    MatPaginatorModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule
  ]
})
export class EpisodeModule { }
