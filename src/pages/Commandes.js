import React, { useContext, useEffect, useState } from "react";
import { IoArrowForward, IoCartOutline, IoClose } from "react-icons/io5";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { useLocation, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import CategoryNav from "../components/CategoryNav";
import Product from "../components/Product";

const Commandes = () => {

  const { setIsOpen, cart, total, clearCart, cartT } = useContext(CartContext);

 const { id } = useParams();
  const { data } = useFetch(`/commanders?populate=*&filters[id][$eq]=${id}`);
  
  console.log(data);
 if (!data) {
   return <div className="container mx-auto">Chargement des données...</div>;
 }
  



  return (
    <div className="sm:w-full h-ful px-4 text-white bottom-7 mt-[10em] justify-center my-auto">
      <div className="block mx-auto">
        <div>
          <h2 className="text-center text-2xl">
            Mr / M. {data[0].attributes.prenom} {data[0].attributes.nom}
          </h2>
          <h3 className="text-center text-lg text-accent mb-3 ">
            est dans le beson de ces outils à {data[0].attributes.adresse} pour
            plus d'information par rapport contact le au +237-
            {data[0].attributes.telephone}
          </h3>
          <hr></hr>
        </div>
        <div className="flex flex-col gap-y-10 px-2 mx-auto mt-3">
          {data[0].attributes.panier.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
      </div>
      {/*sous total et total */}
      <div className="px-6 py-10 flex flex-col">
        {/*Total*/}
        <div className="flex justify-between text-xl">
          <div className="text-[20px] my-auto">Net à recevoir : </div>
          <div className="bg-accent p-3 rounded-lg text-black">
            {data[0].attributes.total} Fcfa
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commandes;
