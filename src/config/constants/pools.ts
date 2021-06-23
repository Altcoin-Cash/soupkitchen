import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.hthb,
    earningToken: tokens.soup,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 185,
    stakingToken: tokens.soup,
    earningToken: tokens.soup,
    contractAddress: {
      97: '',
      56: '0x7c71723fB1F9Cfb250B702cfc4eBd5D9Ab2E83d9',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.1',
  },
  {
    sousId: 186,
    stakingToken: tokens.hobo,
    earningToken: tokens.soup,
    contractAddress: {
      97: '',
      56: '0x7c71723fB1F9Cfb250B702cfc4eBd5D9Ab2E83d9',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.5',
  },

]

export default pools
