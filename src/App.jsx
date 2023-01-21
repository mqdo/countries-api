import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Header, Home, Country, Error, ScrollToTop } from './components'
import { useLocalStorage, useCallApi } from './hooks'
import { debounce } from './utils'

const App = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [countries, setCountries] = useState([]);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [loading, setLoading] = useState(false);
  const [region, setRegion] = useLocalStorage('region', '');

  const handleCallApi = async (url) => {
    setLoading(true);
    try {
      const data = await useCallApi(url);
      setCountries(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }

  const handleToggleDropdown = (e) => {
    if (e.target.dataset.type === 'dropdown') return;
    setToggleDropdown(false);
  }

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setScrolling(false);
      return;
    }
    setScrolling(true);
  }

  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll, 100));
    return () => {
      window.removeEventListener('scroll', debounce(handleScroll, 100));
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [theme])

  useEffect(() => {
    let url = region === '' ? 'all' : 'region/' + region;
    handleCallApi(url);
  }, [region])

  return (
    <div
      className='min-h-[100vh] bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-50 relative'
      onClick={handleToggleDropdown}
    >
      <Header theme={theme} setTheme={setTheme} />
      <Routes>
        <Route
          exact path='/'
          element={
            <Home
              theme={theme}
              countries={countries}
              region={region}
              setRegion={setRegion}
              handleCallApi={handleCallApi}
              toggleDropdown={toggleDropdown}
              setToggleDropdown={setToggleDropdown}
              loading={loading}
            />
          }
        />
        <Route path='/country/:code' element={<Country theme={theme} loading={loading} setLoading={setLoading} />} />
        <Route path='/*' element={<Error theme={theme} />} />
      </Routes>
      <ScrollToTop theme={theme} scrolling={scrolling} />
    </div>
  )
}

export default App