import React, { useRef } from 'react'

import Dropdown from './Dropdown'
import CountryCard from './CountryCard'
import Spinner from '../Spinner'
import { debounce } from '../../utils'
import { BiSearch } from 'react-icons/bi'
import { BsChevronDown } from 'react-icons/bs'
import { MdClear } from 'react-icons/md'

const Home = ({ theme, countries, region, setRegion, handleCallApi, toggleDropdown, setToggleDropdown, loading }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    let url;
    if (inputRef.current.value === '') {
      url = region === '' ? 'all' : 'region/' + region;
    } else {
      url = `/name/${inputRef.current.value}`
    }
    handleCallApi(url);
  }

  const handleClearInput = () => {
    inputRef.current.value = '';
    handleSearch();
  }

  return (
    <main aria-level='main feed' role='feed' className=' w-full md:max-w-[1200px] mx-auto px-4 py-8 flex flex-col justify-between items-center text-sm'>
      <div className='w-full flex flex-col md:flex-row justify-between gap-8 md:gap-4 font-semibold'>
        <div className='w-full md:w-[420px] relative'>
          <div className='absolute left-8 top-[50%] -translate-y-[50%]'>
            <BiSearch size={24} fill={theme === 'dark' ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'} />
          </div>
          <input
            type='text'
            className='w-full pl-20 bg-neutral-50 dark:bg-neutral-600 rounded-md h-12 text-base placeholder:text-neutral-400 placeholder:font-light shadow-md'
            placeholder='Search for a country...'
            ref={inputRef}
            onChange={debounce(handleSearch, 500)}
          />
          {inputRef?.current?.value !== ''
            ? <div className='absolute right-4 top-[50%] -translate-y-[50%]'>
              <MdClear size={24} fill={theme === 'dark' ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'} onClick={handleClearInput} />
            </div>
            : null
          }
        </div>
        <div className='relative'>
          <button
            className='w-[240px] px-6 bg-neutral-50 dark:bg-neutral-600 rounded-md h-12 flex items-center justify-between shadow-md'
            data-type='dropdown'
            onClick={() => setToggleDropdown((prev) => !prev)}
          >
            <span data-type='dropdown' className=' capitalize'>{region === '' ? 'Filter by Region' : region}</span>
            <BsChevronDown
              size={16}
              fill={theme === 'dark' ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'}
              data-type='dropdown'
            />
          </button>
          {toggleDropdown
            ? <Dropdown setRegion={setRegion} />
            : null
          }
        </div>
      </div>
      {loading ? <Spinner theme={theme} /> :
        <div className='w-full px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8'>
          {countries.map((country, index) => <CountryCard key={index} country={country} />)}
        </div>
      }
    </main>
  )
}

export default Home