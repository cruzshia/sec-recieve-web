export interface NextProps {
  asPath: string
  query: {
    [key: string]: any
  }
}

export type ACCOUNT_TYPE = 'bank' | 'crypto'

export interface ACCOUNT_PROPS {
  type: ACCOUNT_TYPE
  account: string
}
