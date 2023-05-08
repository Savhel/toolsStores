import React, { useContext, useState } from "react";
import { IoArrowForward, IoCartOutline, IoClose } from "react-icons/io5";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import CategoryNav from "../components/CategoryNav";
import Product from "../components/Product";

const Commandes = () => {
  const { setIsOpen, cart, total, clearCart } = useContext(CartContext);

  const [isLoad, setIsLoad] = useState(false);

  const handleOnclose = () => setIsLoad(false);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("query");
  console.log(searchTerm);
  //recuperer les produits en fonctions de le recherche
  const { data } = useFetch(
    `/products?populate=*&filters[titre][$contains]=${searchTerm}`
  );
  //console.log(data);

  return (
    <div className="w-full h-ful px-4 text-white">
      <div className="overflow-y-auto h-[75vh]">
        <div className="flex flex-col gap-y-10 px-2">
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
      </div>
      {/*sous total et total */}
      {cart.length >= 1 && (
        <div className="px-6 py-10 flex flex-col">
          {/*sous total*/}
          <div className="flex justify-between text-lg">
            <div>Sous total</div>
            <div>{total} Fcfa</div>
          </div>
          {/*Total*/}
          <div className="flex justify-between text-2xl">
            <div>Totals : </div>
            <div>{total} Fcfa</div>
          </div>
        </div>
      )}
      {/*boutons */}
      <div className="px-6 ">
        {cart.length >= 1 ? (
          <div className="flex justify-between gap-x-4">
            <button
              onClick={() => {
                clearCart();
              }}
              className="btn btn-accent hover:bg-accent-hover text-primary"
            >
              Vider le panier
            </button>
            <button
              onClick={() => {
                setIsLoad(true);
              }}
              className="btn btn-accent hover:bg-accent-hover text-primary flex-1 px-2 gap-x-2"
            >
              Commander
              <IoArrowForward className="text-lg" />
            </button>
          </div>
        ) : (
          <div className="h-full asolute top-0 right-0 left-0 flex justify-center items-center -z-10 flex-col text-white/30">
            <div className="text-2xl">Your cart is empty</div>
            <div className="text-6xl">
              <IoCartOutline />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Commandes;
