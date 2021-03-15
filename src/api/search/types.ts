export type Search = {
  page: number
  results: Array<{
    posterPath?: string
    adult: boolean
    overview: string
    releaseDate: string
    genreIds: Array<number>,
    id: number
    originalTitle: string
    originalLanguage: string
    title: string
    backdropPath?: string
    popularity: number
    voteCount: number
    video: boolean
    voteAverage: number
  }>
  totalResults: number
  totalPages: number
}