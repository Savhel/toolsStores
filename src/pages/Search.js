import React from 'react';

import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import CategoryNav from '../components/CategoryNav';
import Product from '../components/Product';

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('query'); 
  //console.log(searchTerm);
  //recuperer les produits en fonctions de le recherche
  const { data } = useFetch(`/products?populate=*&filters[titre][$contains]=${searchTerm}`);
  //console.log(data);
  
  
return(
    <div className='mb-16 pt-40 lg:pt-0'>
    <div className='container mx-auto'>
      <div className='gap-x-[30px]'>
        <CategoryNav />
        <main>
          <div className='py-3 text-xl uppercase text-center lg:text-left'>{data?.length > 0 ? `${data.length} résultat pour la recherche de  ${searchTerm}` : `Aucune données ne correspond à ${searchTerm}`}</div>
          <div className=' grid  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px] sm:grid-cols-1 '>
            {data?.map((product) => {
              return (
                <Product product={product} key={product.id}/>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  </div>
  );
};

export default Search;
