import {
  IoArrowBack,
  IoArrowForward,
  IoCartOutline,
  IoClose,
} from "react-icons/io5";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

import * as api from "../api";
import axios from "axios";
import { request } from '../request';

const Modal = ({ visible, onClose, total }) => {

  const { cart, isLoad, setIsLoad } = useContext(CartContext);
  const [get, setGet] = useState(null);
  const [info, setInfo] = useState({});
  const [commandes, setCommandes] = useState([]);

  const [code, setCode] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.lireCommandes();
      //console.log(result.data);
      setCommandes(result.data);
    };
    fetchData();
  }, []);

  const uniqueString = new Date().getTime().toString(36) + Math.random().toString(36).substring(2);

  const handlePayement = async () => {
    console.log(info);
    if (info) {
    
      try {
        const res = await request.post("/commanders", {
          cart,
          info,
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  const [display, setDisplay] = useState(false);

  const Dis = () => {
    setDisplay(true);
  }

  const Payements = (e) => {
    setDisplay(true);
    setGet(parseInt(e.target.value));
    setInfo({ ...info, payement: e.target.value });
    
  };
  //const value = Payements();

  if (!visible) return null;

  let mode;
  if (get === 1) {
    mode = (
      <div>
        <h6 className="text-red-600">
          NB : les payements doivent être faits au nom enregistré dans les
          champs du haut !!
        </h6>
        <h2>Veuillez composer ce code #150*14*...*6......*{total}#</h2>
        <p>Vérifiez que le recepteur soit ........ </p>
        <h6 className="text-bold text-accent ">
          Merci de faire confiance à ....Store{" "}
        </h6>
      </div>
    );
  } else if (get === 2) {
    mode = (
      <div>
        <h6 className="text-red-600">
          NB : les payements doivent être faits au nom enregistré dans les
          champs du haut !!
        </h6>
        <h2>Veuillez envoyer {total} Fcfa au 6......</h2>
        <p>Vérifiez que le recepteur est ........ </p>
        <h6 className="text-bold text-accent ">
          Merci de faire confiance à ....Store{" "}
        </h6>
      </div>
    );
  } else if (get === 3) {
    mode = (
      <div>
        <p>
          Vous recevrez un appel ou un message pour valider la commande et un
          coursier vous livrera aussitôt
        </p>
        <h6 className="text-bold text-accent ">
          Merci de faire confiance à ....Store{" "}
        </h6>
      </div>
    );
  }

  
  
  const commander = async () => {
  /*try {
      const url = `http://localhost:1337/api/commanders`;
      if ( info.nom && info.prenom && info.email && info.telephone && info.adresse ) {
        const res = await axios.post(url, info);
        console.log(res);
      }
    } catch (error) {
       console.log(error);
    }*/
    const id = uniqueString.substr(0, 6);
      setCode(id);
    setInfo({ ...info, code: code });
    
    if (info.payement !== 0 && info.code !== '') {
      
      try {
          const  data  = await api.creerCommandes(info);
          console.log(JSON.stringify(data?.data));
        } catch (error) {
          console.log(error);
        }  
    }
     setCode('');
  };

  const annuler = () => {
    setInfo({});
    console.log(info)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center  ">
      <div className="bg-white p-2 rounded w-[60%] mx-auto xs:w-[90%] overflow-y-auto h-[50%]">
        <div
          onClick={onClose}
          className="bg-black rounded-[32px] right-5 cursor-pointer text-4xl w-[30px] flex justify-end text-accent"
        >
          <IoClose />
        </div>
        <div className="py-1 px-4 justify-center items-center w-full text-black">
          <h2 className="text-2xl text-accent text-center  font-bold">
            Informations Personnelles
          </h2>
          <p className="mt-2  text-lg text-center  text-gray-600 xs:text-[15px]">
            Vos Informations seront utilisées uniquement pour la livraison.
          </p>

          <div className="mt-8 w-full justify-center items-center">
            <div className="grid grid-cols-1 gap-6 ">
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row ">
                <label className="w-full sm:w-[40%] mx-auto text-center text-bold ">
                  <span className="">Nom</span>
                  <input
                    type="text"
                    className="mt-1 text-start w-full mb-2 text-gray-600 border border-accent"
                    onChange={(e) => setInfo({ ...info, nom: e.target.value })}
                    value={info.nom}
                    placeholder="Ex XyonCodeur"
                  />
                </label>
                <label className="w-full sm:w-[40%] mx-auto text-center text-bold">
                  <span className="">Prénom</span>
                  <input
                    type="text"
                    className="mt-1 text-start w-full mb-2 text-gray-600 border border-accent"
                    onChange={(e) =>
                      setInfo({ ...info, prenom: e.target.value })
                    }
                    value={info.prenom}
                    placeholder="Codeurs"
                  />
                </label>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row ">
                <label className="w-full sm:w-[40%] mx-auto text-center text-bold">
                  <span className="">Adresse Mail</span>
                  <input
                    type="email"
                    className="mt-1 text-start w-full mb-2 text-gray-600 border border-accent text-sm sm:text-md md:text-md lg:text-md xl:text-md "
                    onChange={(e) =>
                      setInfo({ ...info, email: e.target.value })
                    }
                    value={info.email}
                    placeholder="XyonCodeur@gmail.com"
                  />
                </label>
                <label className="w-full sm:w-[40%] mx-auto text-center text-bold">
                  <span className="">Téléphone</span>
                  <input
                    type="text"
                    className="mt-1 text-start w-full mb-2 text-gray-600 border border-accent"
                    onChange={(e) =>
                      setInfo({ ...info, telephone: e.target.value })
                    }
                    value={info.telephone}
                    placeholder="Ex : 668 689 090 "
                  />
                </label>
              </div>
              <label className="w-full sm:w-[40%] mx-auto text-center text-bold">
                <span className="text-black">Où livré ?</span>
                <input
                  type="text"
                  className="mt-1 text-start w-full mb-2 text-gray-600 border border-accent"
                  onChange={(e) =>
                    setInfo({ ...info, adresse: e.target.value })
                  }
                  value={info.adresse}
                  placeholder="Exemple : Yaoundé-Avenue Germaine "
                />
              </label>
              <label className="w-full sm:w-[40%] mx-auto text-center text-bold">
                <span className="">Choisir votre mode de payement</span>
                <select
                  onChange={(e) => Payements(e)}
                  className="block w-[90%] mx-auto mt-1 text-black"
                  required
                >
                  <option value="0">choisir .. ..</option>
                  <option value="1">Payements OM</option>
                  <option value="2">Payements MOMO</option>
                  <option value="3">Payements à la livraison</option>
                </select>
              </label>

              <label className="block text-black text-center mb-3">
                {mode}
              </label>
              <div className="flex  gap-x-4">
                 <button
                  onClick={onClose}
                  className=" w-[40%] btn bg-black text-accent"
                >
                  <IoArrowBack className="text-lg" />
                  Annuler
                </button> 
               {display &&( <button
                  onClick={handlePayement}
                  type="submit"
                  className=" w-[40%]  btn btn-accent hover:bg-accent-hover text-primary flex-1 px-2 gap-x-2 sm:w-[10%] md:w-[10%]  lg:w-[10%] xl:w-[10%] "
                >
                  Valider
                  <IoArrowForward className="text-lg" />
                </button>)}
              </div>
            </div>
          </div>

          {/* <pre>{JSON.stringify(info, null, "\t")}</pre>  afficher un json en son format */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
