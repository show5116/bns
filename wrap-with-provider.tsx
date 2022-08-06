import * as React from 'react'
import { Provider } from 'react-redux'

import createStore from './src/state/createStore'
import StyledThemeProvider from './src/components/StyledThemeProvider'

interface IProps {
  element: JSX.Element
}

export default ({ element }: IProps) => {
  const store = createStore()
  return (
    <Provider store={store}>
      <StyledThemeProvider>{element}</StyledThemeProvider>
    </Provider>
  )
}
