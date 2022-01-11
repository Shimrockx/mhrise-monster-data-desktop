import React, { useEffect, useLayoutEffect } from 'react'
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom'

import { GlobalStyle } from './styles/GlobalStyle'

import { Index } from './components/Index'
import { Settings } from './components/Settings'

export function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
        </Routes>
      </Router>
    </>
  )
}
