import styled from 'styled-components'

export const Container = styled.div<{ width: number; widthUnit: string }>`
  display: table;
  float: left;
  width: ${props => `${props.width}${props.widthUnit}`};
  height: 400px;
`
