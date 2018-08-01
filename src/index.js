import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'

import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import baseStyles from './styles'

function renderApp () {
  baseStyles()

  render(<App />, document.getElementById('root'))
}

renderApp()
registerServiceWorker()
