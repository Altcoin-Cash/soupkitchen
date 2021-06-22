import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'SoupKitchen',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by SoupKitchen), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('SoupKitchen')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('SoupKitchen')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('SoupKitchen')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('SoupKitchen')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('SoupKitchen')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('SoupKitchen')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('SoupKitchen')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('SoupKitchen')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('SoupKitchen')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('SoupKitchen')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('SoupKitchen')}`,
      }
    default:
      return null
  }
}
