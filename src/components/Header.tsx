import * as React from 'react'
import * as S from './Header.style'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Menus from 'components/Menus'

const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <Link to="/">
          <StaticImage
            src="../images/logo2.png"
            loading="eager"
            width={350}
            height={100}
            quality={100}
            formats={['auto', 'webp', 'avif']}
            alt="logo"
          />
        </Link>
        <Menus />
      </S.Content>
    </S.Container>
  )
}

export default Header
