import React from 'react'
import * as S from './Contact.style'
import ContactItem from 'components/ui/molecules/ContactItem'
import { StaticImage } from 'gatsby-plugin-image'

const Contact = () => {
  return (
    <S.Container>
      <ContactItem
        title="카카오"
        content="카카오톡 오픈채팅방"
        link="https://open.kakao.com/o/sl1fShue"
      >
        <StaticImage
          src="../../../images/kakao.png"
          loading="eager"
          width={350}
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
