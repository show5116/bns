import React from 'react'
import * as S from './CarouselItem.style'

interface IProps {
  width: number
  widthUnit: string
  children: JSX.Element | JSX.Element[]
}

const CarouselItem = ({ width, widthUnit, children }: IProps) => {
  return (
    <S.Container width={width} widthUnit={widthUnit}>
      {children}
    </S.Container>
  )
}

export default CarouselItem
