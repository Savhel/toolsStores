import React from 'react';

import { FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const CategoryNavMobile = ({ setMenu }) => {
  //recuperer les categories
  const { data } = useFetch('/categories');

  

  return (
    <div className='w-full h-full bg-primary p-8'>
      {/* close icon */}
      <div className='flex justify-end'>
        <FiX
          onClick={() => setMenu(false)}
          className='cursor-pointer text-3xl' />
      </div>
      <div className='flex flex-col gap-y-8'>
        {data?.map((categorie) => {
          return <Link to={`products/${categorie.id}`} onClick={() => setMenu(false)} className='uppercase font-medium ' key={categorie.id}>{categorie.attributes.titre}</Link>
        })}
      </div>
    </div>
  );
};

export default CategoryNavMobile;
