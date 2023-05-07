import React from 'react';
import {Link } from 'react-router-dom'
const Product = ({ product }) => {
  //console.log(product);
  //console.log(product.attributes.isNew);
  return (
    <Link to={`/product/${product.id}`}>
      <div className="grad w-full h-[362px] rounded-[8px] overflow-hidden relative group">
        {/* contenu */}
        {product.attributes.isNew ? (
          <div className="absolute bg-accent text-primary text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10">
            Nouveau
          </div>
        ) : (
          ""
        )}
        {/*images */}
        <div className="w-full h-[200px] flex items-center justify-center relative">
          <img
            className="w-[160px] h-[160px] group-hover:scale-90 transition-all"
            src={`https://strapi-data-app.onrender.com/api/${product.attributes.image.data.attributes.url}`}
            alt=""
          />
        </div>
        {/* texte */}
        <div className="px-6 pb-8 flex-col">
          {/*titre de sa categorie */}
          <div className="text-sm text-accent capitalize mb-2">
            {product.attributes.categories.data[0].attributes.titre}
          </div>
          {/*titre du produit */}
          <div className="text-[15px] mb-4 lg:mb-9">
            {product.attributes.titre.substring(0, 35)}...
          </div>
          {/*Prix */}
          <div className="text-lg text-accent">
            {product.attributes.prix} Fcfa
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
