import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import Spinner from './Spinner';
import { useCallApi } from '../hooks';
import { numberWithDots, getLanguages, getBorders } from '../utils';
import { BiArrowBack } from 'react-icons/bi';

const Country = ({ theme, loading, setLoading }) => {
  const [country, setCountry] = useState({});
  const [borders, setBorders] = useState([]);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleCallApi = async (url) => {
    setLoading(true);
    try {
      const data = await useCallApi(url);
      setCountry(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      navigate('/error');
      console.error(error);
    }
  }

  const handleGetBorders = async (bordersArr) => {
    if (!bordersArr) return;
    const data = await getBorders(bordersArr);
    setBorders(data);
  };

  useEffect(() => {
    const newPath = pathname.split('/')[2];
    handleCallApi(`alpha/${newPath}`);
    if (country?.length === 0) {
      navigate('/error');
    }
  }, [pathname])

  useEffect(() => {
    if (loading) return;
    handleGetBorders(country?.borders);
  }, [loading])

  return (
    <main aria-level='main article' role='article' className=' w-full md:max-w-[1200px] mx-auto px-4 py-8 text-base break-words'>
      <button className='bg-neutral-50 dark:bg-neutral-600 rounded-md py-1 px-6 shadow-md'>
        <Link to='/' className=' flex items-center gap-2'>
          <BiArrowBack size={16} fill={theme === 'dark' ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'} />
          <span>Back</span>
        </Link>
      </button>
      {loading ? <Spinner theme={theme} /> :
        <div className='w-full py-8 flex flex-col md:flex-row justify-between items-center md:items-start md:gap-12 md:flex-1'>
          <div className='w-full'>
            <img src={country?.flags?.svg} alt={country?.name} loading='lazy' />
          </div>
          <div className='w-full flex flex-col gap-8 md:gap-12 pt-8 md:p-0'>
            <h2 className='font-extrabold text-xl md:text-3xl'>{country?.name}</h2>
            <div className='flex flex-col md:flex-row md:justify-between'>
              <div className='flex flex-col gap-4 w-full'>
                <p><span className='font-semibold'>Native Name: </span>{country?.nativeName}</p>
                <p><span className='font-semibold'>Population: </span><span>{numberWithDots(country?.population)}</span></p>
                <p><span className='font-semibold'>Region: </span><span>{country?.region}</span></p>
                <p><span className='font-semibold'>Subregion: </span><span>{country?.subregion}</span></p>
                <p><span className='font-semibold'>Capital: </span><span>{country?.capital}</span></p>
              </div>
              <div className='flex flex-col gap-4'>
                <p><span className='font-semibold'>Top Level Domain: </span>{country?.topLevelDomain}</p>
                <p><span className='font-semibold'>Currencies: </span><span>{country?.currencies?.[0]?.name}</span></p>
                <p><span className='font-semibold'>Languages: </span><span>{getLanguages(country?.languages)}</span></p>
              </div>
            </div>
            <div className='flex flex-col gap-4 w-full'>
              <h3 className='font-semibold text-lg'>Border Countries:</h3>
              <div className='flex flex-wrap gap-2'>
                {borders?.map((border, index) => (
                  <button className='bg-neutral-50 dark:bg-neutral-600 rounded-md py-1 px-6 flex items-center gap-2 shadow-md hover:shadow-2xl' key={index}>
                    <Link to={`/country/${border?.alpha3Code}`}>
                      {border?.name}
                    </Link>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      }
    </main>
  )
}

export default Country