import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import CategoryNav from '../components/CategoryNav';
import Product from '../components/Product';

const Products = () => {
  const { id } = useParams();
  //recuperer les profuits en fonction de leurs categories
  const { data } = useFetch(`/products?populate=*&filters[categories][id][$eq]=${id}`);
  //console.log(data);

  const [titre, setTitre] = useState(null);
  useEffect(() => {
    if (data) {
      setTitre(data[0].attributes.categories.data[0].attributes.titre)
    }
  })
  return <div className='mb-16 pt-40 lg:pt-0'>
    <div className='container mx-auto'>
      <div className='flex gap-x-[30px]'>
        <CategoryNav />
        <main>
          <div className='py-3 text-xl uppercase text-center lg:text-left'>{titre}</div>
          <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px] '>
            {data?.map((product) => {
              return (
                <Product product={product} key={product.id}/>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  </div>;
};

export default Products;
