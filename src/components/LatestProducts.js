import React from 'react';
import ProductSlider from './ProductSlider';
import useFetch from '../hooks/useFetch';

const LatestProducts = () => {

  //recuperer les nouveau produits
    const { data } = useFetch('/products?populate=*&filters[isNew]=true')({
      offset: 15, 
      limit: 10,
    });
    
  return (
        <div className='mb-16'>
            <div className='container mx-auto'>
                <h2 className='h2 mb-6 text-center xl:text-left'>Les produits les plus récents</h2>
            </div>
            <ProductSlider data={data} />
        </div>
    );
};

export default LatestProducts;
