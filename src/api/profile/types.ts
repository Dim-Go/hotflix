export type ProfileData = {
  avatar: {
    gravatar: {
      hash: string
    }
  },
  id: number
  iso_639_1: string
  iso_3166_1: string
  name: string
  includeAdult: boolean
  username: string
}

export type FavouriteMovies = {
  page: number
  results: Array<{
    adult: boolean
    backdrop_path?: string
    genre_ids: Array<number>
    id: number
    originalLanguage: string
    originalTitle: string
    overview:  string
    releaseDate: string
    poster_path?: string
    popularity: number
    title: string
    video: boolean
    voteAverage: number
    voteCount: number
  }>
  totalPages: number
  totalResults: number
}

export type WatchList = {
  page: number,
  results: Array<{
    adult: boolean
    backdrop_path?: string
    genre_ids: Array<number>
    id: number
    originalLanguage: string
    originalTitle: string
    overview:  string
    releaseDate: string
    poster_path?: string
    popularity: number
    title: string
    video: boolean
    voteAverage: number
    voteCount: number
  }>,
  totalPages: number
  totalResults: number
}

export type FavoriteMark = {
  accountId: number
  mediaType: string
  mediaId: number
  favorite: boolean
}

export type AddWatchList = {
  accountId: number
  media_type: string
  mediaId: number
  watchlist: boolean
}