export type MovieDetails = {
  id: number
  adult: boolean
  budget: number
  originalLanguage: string
  originalTitle: string
  popularity: number
  releaseDate: string
  revenue: number
  status: string,
  title: string,
  video: boolean,
  voteAverage: number
  voteCount: number
  overview?: string
  posterPath?: string
  runtime?: number
  tagline?: string
  homepage?: string
  imdbId?: string
  backdropPath?: string
  belongsToCollection?: object
  spokenLanguages: Array<{
    iso_639_1: string,
    name: string
  }>
  productionCountries: Array<{
    iso_3166_1: string
    name: string
  }>
  genres: Array<{
    id: number
    name: string
  }>
  productionCompanies: Array<{
    id: number
    logoPath?: string
    name: string
    originCountry: string
  }>,
}

export type MovieCredits = {
  id: number
  cast: Array<{
    adult: boolean
    gender?: number
    id: number
    knownForDepartment: string
    name: string
    originalName: string
    popularity: number
    profilePath?: string
    castId: number
    character: string
    creditId: string
    order: number
  }>
  crew: Array<{

    adult: boolean
    gender?: number
    id: number
    knownForDepartment: string
    name: string
    originalName: string
    popularity: number
    profilePath?: string
    creditId: string
    department: string
    job: string
  }>
}

export type SimilarMovies = {
  page: number
  results: Array<{
    adult: boolean
    genreIds: Array<number>
    id: number
    originalLanguage: string
    originalTitle: string
    overview: string
    releaseDate: string
    popularity: number
    title: string
    video: boolean
    voteAverage: number
    voteCount: number
    backdropPath?: string
    posterPath?: string
  }>
  totalPages: number,
  totalResults: number
}

export type MovieReviews = {
  id: number
  page: number
  results: Array<{
    author: string
    authorDetails: {
      name: string
      username: string
      avatarPat?: string
      rating?: number
    },
    content: string
    createdAt: string
    id: string
    updatedAt: string
    url: string
  }>
  totalPages: number
  totalResults: number
}