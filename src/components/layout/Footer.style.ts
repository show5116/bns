import styled from 'styled-components'
import { color } from '../../styles/color'

export const Container = styled.footer`
  background-color: ${color.lightGray};
  padding-top: 1rem;
  padding-bottom: 0.25rem;
`
export const Content = styled.article`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  width: 100%;
  padding: 2rem 1.2rem;
  max-width: 62.5rem;
  margin: 0 auto;
`

export const Table = styled.table`
  tr {
    td:nth-child(1) {
      opacity: 0.7;
    }
    td:nth-child(2) {
    }
  }

  td {
    padding: 0.2rem;
  }
`

export const Copyright = styled.div``
