import * as S from './MainTemplate.style'
import H2 from 'components/ui/atoms/H2'
import React from 'react'

interface IProps {
  title: string
  children: JSX.Element
}

const MainTemplate = ({ title, children }: IProps) => {
  return (
    <S.Container>
      <S.Content>
        <H2 text={title} />
        {children}
      </S.Content>
    </S.Container>
  )
}

export default MainTemplate
