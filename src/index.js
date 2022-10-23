import React from 'react'
import { render } from 'react-dom'

// Importing the top-level component
import App from './components/App'

// Importing the styles
import './styles.less'

// 👉 STEP 1 - Import React Router's Router
import { BrowserRouter as Router } from 'react-router-dom';

render(
  // Wrap the <App /> in a provide
  <Router>
  <App />
  </Router>
  , document.querySelector('#root')
)


/**
 * location -> all data about where you are
 * history -> all data about where you were and where you're going
 * match -> all data about the current loaction w/re to query params etc
 */