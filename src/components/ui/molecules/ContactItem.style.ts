import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
  width: 200px;
`

export const ImageContainer = styled.div`
  margin: 0 auto 10px auto;
  width: 90px;
  height: 100px;
  transition: 0.15s ease-in-out;
  &:hover {
    width: 100px;
    opacity: 0.8;
  }
`

export const Title = styled.div`
  font-size: 1.4rem;
  text-align: center;
  font-weight: bolder;
  margin-bottom: 10px;
`

export const Content = styled.div`
  font-size: 1rem;
`
