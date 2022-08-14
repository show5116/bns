import React from 'react'
import * as S from '../styles/pages/index.style'
import Layout from 'components/layout/Layout'
import Carousel from 'components/ui/organisms/Carousel'
import CarouselItem from 'components/ui/molecules/CarouselItem'

const IndexPage = () => {
  const carouselWidth = 960
  const carouselWidthUnit = 'px'

  return (
    <Layout>
      <S.Container>
        <Carousel
          width={carouselWidth}
          widthUnit={carouselWidthUnit}
          transitionDelay={400}
        >
          <CarouselItem width={carouselWidth} widthUnit={carouselWidthUnit}>
            <div style={{ height: '100%', background: 'gray' }}></div>
          </CarouselItem>
          <CarouselItem width={carouselWidth} widthUnit={carouselWidthUnit}>
            <div style={{ height: '100%', background: 'blue' }}></div>
          </CarouselItem>
          <CarouselItem width={carouselWidth} widthUnit={carouselWidthUnit}>
            <div style={{ height: '100%', background: 'red' }}></div>
          </CarouselItem>
        </Carousel>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </S.Container>
    </Layout>
  )
}

export default IndexPage
