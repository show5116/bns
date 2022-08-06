import * as S from './Footer.style'
import React from 'react'

const Footer = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Table>
          <tbody>
            <tr>
              <td>상호명</td>
              <td>BNS</td>
            </tr>
            <tr>
              <td>사업자번호</td>
              <td>0000000000</td>
            </tr>
            <tr>
              <td>대표자</td>
              <td>박수환 | 010-2331-8575</td>
            </tr>
            <tr>
              <td>주소</td>
              <td>송촌동</td>
            </tr>
          </tbody>
        </S.Table>
        <S.Copyright>© 2022. BNS. All rights reserved.</S.Copyright>
      </S.Content>
    </S.Container>
  )
}

export default Footer
