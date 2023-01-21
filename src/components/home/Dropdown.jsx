import React from 'react'

const Dropdown = ({ setRegion }) => {
  const handleSetRegion = (e) => {
    setRegion(e.target.dataset.region);
  }

  return (
    <div className='w-[240px] h-[220px] bg-neutral-50 dark:bg-neutral-600 rounded-md flex flex-col justify-center gap-1 absolute top-14'>
      <span
        data-region=''
        className='w-full h-7 px-6 py-4 hover:bg-neutral-100 dark:hover:bg-neutral-700 leading-[0.3]'
        onClick={handleSetRegion}
      >
        All
      </span>
      <span
        data-region='africa'
        className='w-full h-7 px-6 py-4 hover:bg-neutral-100 dark:hover:bg-neutral-700 leading-[0.3]'
        onClick={handleSetRegion}
      >
        Africa
      </span>
      <span
        data-region='america'
        className='w-full h-7 px-6 py-4 hover:bg-neutral-100 dark:hover:bg-neutral-700 leading-[0.3]'
        onClick={handleSetRegion}
      >
        America
      </span>
      <span
        data-region='asia'
        className='w-full h-7 px-6 py-4 hover:bg-neutral-100 dark:hover:bg-neutral-700 leading-[0.3]'
        onClick={handleSetRegion}
      >
        Asia
      </span>
      <span
        data-region='europe'
        className='w-full h-7 px-6 py-4 hover:bg-neutral-100 dark:hover:bg-neutral-700 leading-[0.3]'
        onClick={handleSetRegion}
      >
        Europe
      </span>
      <span
        data-region='oceania'
        className='w-full h-7 px-6 py-4 hover:bg-neutral-100 dark:hover:bg-neutral-700 leading-[0.3]'
        onClick={handleSetRegion}
      >
        Oceania
      </span>
    </div>
  )
}

export default Dropdown