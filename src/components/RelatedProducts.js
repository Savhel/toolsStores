import React from 'react';
import useFetch from '../hooks/useFetch';
import ProductSlider from './ProductSlider'


const RelatedProducts = ({ categorietitre }) => {
  

  const { data } = useFetch(`/products?populate=*&filters[categories][titre]=${categorietitre}`);
  //console.log(data);
  if (!data) {
    return <div className="container mx-auto">Chargement des données...</div>;
  }
  return <div className='mb-16'>
    <div className='container mx-auto'>
      <h2 className='h2 mb-6 text-center xl:text-left'>Produits de la même categorie</h2>
      <ProductSlider data = {data}/>
    </div>
  </div>;
};

export default RelatedProducts;
