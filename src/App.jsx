import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Header, Home, Country, Error } from './components'
import { useLocalStorage, useCallApi } from './hooks'

const App = () => {
  const [theme, setTheme] = useState('');
  const [region, setRegion] = useLocalStorage('region', '');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [])

  const handleCallApi = async (url) => {
    try {
      const data = await useCallApi(url);
      setCountries(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  // useEffect(() => {
  //   let url = region === '' ? 'all' : 'region/' + region;
  //   handleCallApi(url);
  // }, [region])

  const handleSetTheme = (type) => {
    if (type === 'dark' || type === 'light') {
      setTheme(type);
      localStorage.theme = type;
    }
  }

  return (
    <div className=' bg-neutral-100 dark:bg-neutral-700'>
      <Header theme={theme} setTheme={handleSetTheme} />
      <Routes>
        <Route exact path='/' element={<Home countries={countries} />} />
        <Route exact path='/:country' element={<Country />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App