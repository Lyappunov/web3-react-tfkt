import { AbstractConnectorTFKT } from 'web3-react-tfkt/packages/abstract-connector'

export interface Web3ReactManagerFunctions {
  activate: (connector: AbstractConnectorTFKT, onError?: (error: Error) => void, throwErrors?: boolean) => Promise<void>
  setError: (error: Error) => void
  deactivate: () => void
}

export interface Web3ReactManagerReturn extends Web3ReactManagerFunctions {
  connector?: AbstractConnectorTFKT
  provider?: any
  chainId?: number
  account?: null | string

  error?: Error
}

export interface Web3ReactContextInterface<T = any> extends Web3ReactManagerFunctions {
  connector?: AbstractConnectorTFKT
  library?: T
  chainId?: number
  account?: null | string

  active: boolean
  error?: Error
}
