import React from 'react'
import * as S from './Contact.style'
import ContactItem from 'components/ui/molecules/ContactItem'
import { StaticImage } from 'gatsby-plugin-image'

const Contact = () => {
  return (
    <S.Container>
      <ContactItem
        title="전화"
        content="010-2331-8575 전화번호로 편하게 문자나 전화 남겨주시면 됩니다."
      >
        <StaticImage
          src="../../../images/phone.png"
          loading="eager"
          width={100}
          height={100}
          quality={100}
          formats={['auto', 'webp', 'avif']}
          alt="logo"
        />
      </ContactItem>
      <ContactItem
        title="카카오톡"
        content="카카오톡 오픈채팅방에 들어오셔서 채팅 남겨주시면 문의 가능합니다."
        link="https://open.kakao.com/o/sl1fShue"
      >
        <StaticImage
          src="../../../images/kakao.png"
          loading="eager"
          width={100}
          height={100}
          quality={100}
          formats={['auto', 'webp', 'avif']}
          alt="logo"
        />
      </ContactItem>
      <ContactItem
        title="인스타그램"
        content="위 인스타그램 계정으로 DM을 통해 문의하실수 있어요!"
        link="https://www.instagram.com/bns____enm/"
      >
        <StaticImage
          src="../../../images/instagram.png"
          loading="eager"
          width={100}
          height={100}
          quality={100}
          formats={['auto', 'webp', 'avif']}
          alt="logo"
        />
      </ContactItem>
      <ContactItem
        title="네이버 Tok Tok"
        content="네이버 지도의 톡톡 문의를 통해 문의하실수 있어요."
        link="https://map.naver.com/v5/search/%EC%86%A1%EC%B4%8C%EB%8F%99%20bns/place/1482848090?placePath=%3Fentry=pll%26from=nx%26fromNxList=true&c=14186076.3311965,4351068.3776065,15,0,0,0,dh"
      >
        <StaticImage
          src="../../../images/naverTokTok.png"
          loading="eager"
          width={100}
          height={100}
          quality={100}
          formats={['auto', 'webp', 'avif']}
          alt="logo"
        />
      </ContactItem>
    </S.Container>
  )
}

export default Contact
