import React from 'react'

import { BiArrowToTop } from 'react-icons/bi'

const ScrollToTop = ({ theme, scrolling }) => {
  const handleScroll = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className={`${scrolling ? 'block' : 'hidden'} fixed top-[calc(100vh-4rem)] right-4 w-10 h-10 grid place-items-center bg-neutral-50 dark:bg-neutral-600 rounded-full shadow-2xl z-50 cursor-pointer`} onClick={handleScroll}>
      <BiArrowToTop size={24} fill={theme === 'dark' ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'} />
    </div>
  )
}

export default ScrollToTop