import React from 'react'
import { Link } from 'react-router-dom'

import { BsFillMoonFill } from 'react-icons/bs'

const Header = ({ theme, setTheme }) => {
  const handleChangeTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <header aria-level='top heading' role='heading' className='w-full h-16 bg-neutral-50 dark:bg-neutral-600 shadow-lg'>
      <div className='w-full h-full px-4 md:max-w-[1200px] mx-auto flex justify-between items-center'>
        <Link to='/'>
          <h1 className='text-xl font-extrabold'>Where in the world?</h1>
        </Link>
        <button className='font-semibold capitalize flex items-center gap-2' onClick={handleChangeTheme}>
          <BsFillMoonFill fill={theme === 'dark' ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'} />
          <span className='hidden md:block'>{theme} Mode</span>
        </button>
      </div>
    </header>
  )
}

export default Header