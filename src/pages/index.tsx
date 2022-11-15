import React from 'react'
import * as S from '../styles/pages/index.style'
import Layout from 'components/layout/Layout'
import Carousel from 'components/ui/organisms/Carousel'
import CarouselItem from 'components/ui/molecules/CarouselItem'
import Contact from 'components/ui/organisms/Contact'
import Map from 'components/ui/organisms/Map'
import MainTemplate from 'components/ui/template/MainTemplate'

const IndexPage = () => {
  const carouselWidth = 960
  const carouselWidthUnit = 'px'

  return (
    <Layout>
      <S.Container>
        <MainTemplate title="">
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
        </MainTemplate>
        <MainTemplate title="문의방법">
          <Contact />
        </MainTemplate>
        <MainTemplate title="오시는법">
          <Map />
        </MainTemplate>
      </S.Container>
    </Layout>
  )
}

export default IndexPage
