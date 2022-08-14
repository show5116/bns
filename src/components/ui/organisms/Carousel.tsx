import React, { useState } from 'react'
import * as S from './Carousel.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { color } from '../../../styles/color'

interface IProps {
  children: JSX.Element | JSX.Element[]
  width: number
  widthUnit: string
  transitionDelay: number
}

const Carousel = ({ children, width, widthUnit, transitionDelay }: IProps) => {
  const childrenCount = React.Children.count(children)
  const childrenArray = React.Children.toArray(children)
  const [current, setCurrent] = useState(0)
  const [dotCurrent, setDotCurrent] = useState(0)
  const [isTransition, setIsTransition] = useState(true)
  const [buttonActive, setButtonActive] = useState(true)

  const onClickPrev = () => {
    if (!buttonActive) {
      return
    }
    setIsTransition(true)
    setCurrent(prev => prev - 1)
    if (current === 0) {
      setDotCurrent(() => childrenCount - 1)
      setButtonActive(false)
      setTimeout(() => {
        setIsTransition(false)
        setButtonActive(true)
        setCurrent(childrenCount - 1)
      }, transitionDelay)
    } else {
      setDotCurrent(prev => prev - 1)
    }
  }

  const onClickNext = () => {
    if (!buttonActive) {
      return
    }
    setIsTransition(true)
    setCurrent(prev => prev + 1)
    if (current === childrenCount - 1) {
      setDotCurrent(() => 0)
      setButtonActive(false)
      setTimeout(() => {
        setIsTransition(false)
        setButtonActive(true)
        setCurrent(0)
      }, transitionDelay)
    } else {
      setDotCurrent(prev => prev + 1)
    }
  }

  const onDotClick = (index: number) => {
    setIsTransition(true)
    setDotCurrent(() => index)
    setCurrent(() => index)
  }

  return (
    <S.Container width={width} widthUnit={widthUnit}>
      <S.Box>
        <S.List
          width={width}
          widthUnit={widthUnit}
          childrenCount={childrenCount}
          isTransition={isTransition}
          transitionDelay={transitionDelay}
          current={current}
        >
          {childrenArray[childrenArray.length - 1]}
          {children}
          {childrenArray[0]}
        </S.List>
      </S.Box>
      <S.PrevButton onClick={onClickPrev}>
        <FontAwesomeIcon icon={faChevronLeft} size="lg" color={color.white} />
      </S.PrevButton>
      <S.NextButton onClick={onClickNext}>
        <FontAwesomeIcon icon={faChevronRight} size="lg" color={color.white} />
      </S.NextButton>
      <S.Pagination>
        {Array(childrenCount)
          .fill(0)
          .map((_ele, index) => (
            <S.Dot
              key={`dot${index}`}
              active={index === dotCurrent}
              onClick={() => onDotClick(index)}
            ></S.Dot>
          ))}
      </S.Pagination>
    </S.Container>
  )
}

export default Carousel
