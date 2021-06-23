import tokens from './tokens'
import farms from './farms'
import { Ifo, Token } from './types'

const cakeBnbLpToken: Token = {
  symbol: farms[1].lpSymbol,
  address: farms[1].lpAddresses,
  decimals: 18,
}

const ifos: Ifo[] = [
  {
    id: 'hthb',
    address: '0x1aFB32b76696CdF05593Ca3f3957AEFB23a220FB',
    isActive: true,
    name: 'Homeless Binance Tokens (HTHB)',
    poolBasic: {
      saleAmount: '375,000 HTHB',
      raiseAmount: '$750,000',
      cakeToBurn: '$375,000',
      distributionRatio: 0.3,
    },
    poolUnlimited: {
      saleAmount: '850,000 HTHB',
      raiseAmount: '$500,000',
      cakeToBurn: '$250,000',
      distributionRatio: 0.7,
    },
    currency: cakeBnbLpToken,
    token: tokens.hthb,
    releaseBlockNumber: 7707736,
    campaignId: '511110000',
    articleUrl: 'https://hth.world/hthb-homeless-binance-token/',
    tokenOfferingPrice: 2.0,
    version: 2,
  },
]

export default ifos
