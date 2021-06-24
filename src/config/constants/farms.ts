import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'SOUP',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    token: tokens.soup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 251,
    lpSymbol: 'SOUP-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    token: tokens.soup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 252,
    lpSymbol: 'HTHB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.hthb,
    quoteToken: tokens.wbnb,
  },
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
  {
    pid: 417,
    lpSymbol: 'HTHB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x3E19C18Fe3458A6065D8F0844cB7Eae52C9DAE07',
    },
    token: tokens.hthb,
    quoteToken: tokens.busd,
  },
]

export default farms
