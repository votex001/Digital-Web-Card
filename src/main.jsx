import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './assets/Header/Header'
import Main from './assets/Main/Main'
import Bottom from './assets/Bottom/Bottom'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Main />
    <Bottom />
  </React.StrictMode>,
)
