import styled from 'styled-components'

export const Container = styled.div<{ width: number; widthUnit: string }>`
  position: relative;
  height: 300px;
  width: ${props => `${props.width}${props.widthUnit}`};
  margin: auto;
  background-color: white;
`

export const Box = styled.div`
  width: 100%;
  margin: auto;
  overflow-x: hidden;
`

export const List = styled.div<{
  width: number
  widthUnit: string
  childrenCount: number
  isTransition: boolean
  transitionDelay: number
  current: number
}>`
  width: ${props =>
    `${props.width * (props.childrenCount + 2)}${props.widthUnit}`};
  transition: ${props =>
    `${
      props.isTransition ? props.transitionDelay : '0'
    }ms ease-in-out transform`};
  transform: translateX(
    ${props => `-${props.width * (props.current + 1)}${props.widthUnit}`}
  );
`

export const PrevButton = styled.button`
  position: absolute;
  left: 0;
  top: 120px;
  background-color: rgba(0, 0, 0, 0.3);
  width: 30px;
  height: 60px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const NextButton = styled.button`
  position: absolute;
  right: 0;
  top: 120px;
  background-color: rgba(0, 0, 0, 0.3);
  width: 30px;
  height: 60px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const Pagination = styled.ul`
  position: absolute;
  left: 50%;
  bottom: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
  transform: translateX(-50%);
`

export const Dot = styled.div<{ active: boolean }>`
  cursor: pointer;
  display: inline-block;
  width: 15px;
  height: 15px;
  margin: 0 5px;
  overflow: hidden;
  opacity: ${props => (props.active ? 0.8 : 0.5)};
  background: #ddd;
  border-radius: 50%;
  &:hover {
    opacity: 0.8;
  }
`
