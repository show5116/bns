import React from 'react'
import * as S from './H2.style'

interface IProps {
  text: string
}

const H2 = ({ text }: IProps) => {
  return <S.H2>{text}</S.H2>
}

export default H2
