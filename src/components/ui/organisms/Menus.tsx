import React from 'react'
import * as S from './Menus.style'
import { Link } from 'gatsby'

const Menus = () => {
  return (
    <S.Container>
      <S.Menu>
        <Link to="/">커리큘럼</Link>
      </S.Menu>
      <S.Menu>
        <Link to="/">내부시설</Link>
      </S.Menu>
      <S.Menu>
        <Link to="/">커뮤니티</Link>
      </S.Menu>
      <S.Menu>
        <Link to="/">문의방법</Link>
      </S.Menu>
      <S.Menu>
        <Link to="/">오시는길</Link>
      </S.Menu>
    </S.Container>
  )
}

export default Menus
