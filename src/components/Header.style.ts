import styled from 'styled-components'
import { variable } from '../styles/variable'
import { color } from '../styles/color'

export const Container = styled.header`
  position: fixed;
  display: flex;
  height: ${variable.headerHeight};
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  user-select: none;
  transition: top 0.3s ease 0.2s;
  top: 0;
  border-bottom: 1px solid ${color.lightGray};
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  max-width: 75rem;
`
