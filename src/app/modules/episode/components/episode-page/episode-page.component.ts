import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {ActivatedRoute, Params, Router} from "@angular/router";

import {IEpisode, IInfo} from "../../interfaces";

@Component({
  selector: 'app-episode-page',
  templateUrl: './episode-page.component.html',
  styleUrls: ['./episode-page.component.css']
})

export class EpisodePageComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  episodes: IEpisode[];
  info: IInfo;
  value: string;
  error: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this.activatedRoute.queryParams.subscribe(({page}) => {
      this.paginator.pageIndex = page - 1;
      this.changeDetectorRef.detectChanges();
    });

    this.paginator.page.subscribe((page) => {
      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: {page: page.pageIndex + 1},
        queryParamsHandling: 'merge'
      });
    });
  }

  ngOnInit(): void {
    this._loadEpisodes();
    this.value = this.activatedRoute.snapshot.queryParams['name'] || "";
  }

  selectName(): void {
    this._setQueryPage();
    this._loadEpisodes();
  }

  _loadEpisodes(): void {
    this.activatedRoute.data.subscribe(({episode}) => {
      if (episode?.error) {
        this.error = true;
      } else {
        this.episodes = episode.results;
        this.info = episode.info;
        this.error = false;
      }
    });
  }

  _setQueryPage(): void {
    const queryParams: Params = {name: this.value};
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams,
      queryParamsHandling: 'merge'
    });
  }

  _resetQueryName(): void {
    const params = {...this.activatedRoute.snapshot.queryParams};
    delete params['name'];

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: params
    })
  }

}
