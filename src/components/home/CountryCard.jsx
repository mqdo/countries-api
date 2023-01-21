import React from 'react'
import { Link } from 'react-router-dom'

import { numberWithDots } from '../../utils'

const CountryCard = ({ country }) => {
  return (
    <div className=' bg-neutral-50 dark:bg-neutral-600 flex flex-col rounded-md shadow-md hover:-translate-x-1 hover:-translate-y-1 hover:shadow-2xl hover:delay-200'>
      <Link to={`/country/${country.alpha3Code}`}>
        <img src={country.flags.svg} alt={country.name} loading='lazy' className='w-full h-48 md:h-40 rounded-t-md object-cover object-center' />
        <div className='w-full p-4'>
          <h2 className='pb-4 text-base font-extrabold'>{country.name}</h2>
          <p><span className='font-semibold'>Population: </span><span>{numberWithDots(country.population)}</span></p>
          <p className='py-2'><span className='font-semibold'>Region: </span><span>{country.region}</span></p>
          <p><span className='font-semibold'>Capital: </span><span>{country.capital}</span></p>
        </div>
      </Link>
    </div>
  )
}

export default CountryCard