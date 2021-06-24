import React from 'react'
import styled from 'styled-components'
//import { ChevronDownIcon, ChevronUpIcon, Text } from '@pancakeswap/uikit'
import { ChevronDownIcon, ChevronUpIcon } from '@pancakeswap/uikit'
//import { Text } from 'contexts/Localization'
import { useTranslation } from 'contexts/Localization'

export interface ExpandableSectionButtonProps {
  onClick?: () => void
  expanded?: boolean
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
`

const ExpandableSectionButton: React.FC<ExpandableSectionButtonProps> = ({ onClick, expanded }) => {
  const { t } = useTranslation()

  return (
    <Wrapper aria-label={t('Hide or show expandable content')} role="button" onClick={() => onClick()}>
      <Text color="primary" bold>
        {expanded ? t('Hide') : t('Details')} <img src="/images/soupfarm.png">
      </Text>
      {expanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
    </Wrapper>
  )
}

ExpandableSectionButton.defaultProps = {
  expanded: false,
}

export default ExpandableSectionButton
