export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: Date
}

export interface IInfo {
  count: number,
  pages: number,
  prev: string | null,
  next: string | null
}

export interface IEpisodeInfo {
  info: IInfo,
  results: IEpisode[]
}
