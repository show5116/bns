import styled from 'styled-components'
import { color } from '../../../styles/color'

export const Container = styled.nav`
  display: flex;
`

export const Menu = styled.div`
  margin-right: 10px;
  font-size: 1.3rem;
  font-weight: bolder;
  &:hover {
    color: ${color.mainBlue};
  }
`
