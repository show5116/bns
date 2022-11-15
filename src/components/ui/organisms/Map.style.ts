import styled from 'styled-components'
import { color } from '../../../styles/color'

export const Container = styled.div`
  display: flex;
`

export const Explain = styled.div`
  padding-left: 20px;
  text-align: left;
  line-height: 1.6rem;
  a {
    width: 120px;
    display: inline-block;
    font-weight: bold;
    padding: 10px 10px 10px 10px;
    background: ${color.yellow};
    border-radius: 10px;
    span {
      line-height: 1.2rem;
      margin-left: 5px;
    }
    margin-bottom: 10px;
  }
  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  strong {
    font-weight: bold;
  }
  p {
    margin-bottom: 10px;
  }
`
