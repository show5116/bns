import React from 'react'
import * as S from './Map.style'
import KakaoMap from 'components/ui/molecules/KakaoMap'
import { StaticImage } from 'gatsby-plugin-image'

const Map = () => {
  return (
    <S.Container>
      <KakaoMap width="500px" height="400px" />
      <S.Explain>
        <a href="https://map.kakao.com/link/to/비엔에스(BNS)영수전문,36.36448981957854, 127.44495523046425">
          <StaticImage
            src="../../../images/kakao-map.jpg"
            loading="eager"
            width={18}
            height={25}
            quality={100}
            formats={['auto', 'webp', 'avif']}
            alt="logo"
          />
          <span>찾아오는 길</span>
        </a>
        <h3>비엔에스(BNS)영수전문</h3>
        <p>
          대전 대덕구 동춘당로54번길 42 201호
          <br />• <strong>송촌초등학교</strong> 앞, 한빛신협 옆에 위치해
          있습니다.
          <br />• 선비문구 완구슈퍼 2층입니다.
        </p>
        <h3>전화번호</h3>
        <p>010-2331-8575</p>
      </S.Explain>
    </S.Container>
  )
}

export default Map
