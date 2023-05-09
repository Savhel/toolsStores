import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Qty from "../components/Qty";
import { CartContext } from "../context/CartContext";

const Benefits = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);
  return (
    <div className="flex gap-x-8">
      <Link to={`/product/${item.id}`} className="w-[70px] h-[70px]">
        <img src={`${item.attributes.image.data.attributes.url}`} alt="" />
      </Link>
      <div className="flex-1">
        <div className="flex gap-x-4 mb-3 text-lg ">
          <Link to={`/product/${item.id}`}>{item.attributes.titre}</Link>
         
        </div>
        <div className=" flex items-center gap-x-12">
          <div className="flex gap-x-4 mb-2">
            

            <div className="text-accent text-xl">
             <span className="text-white">{item.attributes.prix} * {item.amount}</span> = {item.attributes.prix * item.amount} Fcfa
            </div>
          </div>
        </div>
        <div>
          <span className="text-accent">
            
          </span>
        </div>
      </div>
    </div>
  );
};

export default Benefits;

