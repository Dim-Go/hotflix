export type AuthResponse = {
  success: boolean
  expiresAt?: string
  requestToken: string
}

export type AuthData = {
  username: string
  password: string
  requestToken: string
}

export type SessionIdResponse = {
  success: boolean
  session_id: string
}