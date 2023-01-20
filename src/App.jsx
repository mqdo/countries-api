import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Header, Home, Country, Error } from './components'

const App = () => {
  return (
    <div className=' bg-neutral-100 dark:bg-neutral-700'>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/:country' element={<Country />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App