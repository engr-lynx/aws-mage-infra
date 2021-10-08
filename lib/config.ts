export interface DbConfig {
  readonly name: string
  readonly username: string
  readonly deleteWithApp?: boolean
  readonly instance?: string
}

export interface EsConfig {
  readonly username: string
  readonly deleteWithApp?: boolean
  readonly instance?: string
}

interface ContInstance {
  readonly cpu?: string
  readonly memory?: string
}

export interface ComponentsConfig {
  readonly db: DbConfig
  readonly es: EsConfig
}

export interface AppConfig {
  readonly name: string
  readonly components: ComponentsConfig
}
