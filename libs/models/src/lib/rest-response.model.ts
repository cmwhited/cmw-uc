import { Character } from './character.model';

export interface RestResponseInfo {
  count: number;
  pages: number;
  next: string;
  prev: string | null;
}

export interface RestResponse {
  info: RestResponseInfo;
  results: Character[] | null;
}
