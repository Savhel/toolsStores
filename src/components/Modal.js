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

import valider from './valider';


const Modal = ({ visible, onClose, total }) => {

  const { cart, isLoad, setIsLoad, setCartT } = useContext(CartContext);
  const [get, setGet] = useState(0);
  const [lid, setId] = useState(0);
  const [info, setInfo] = useState({});
  const [commandes, setCommandes] = useState([]);

   const [popupStyle, showPopup] = useState("hidden");

  const [code, setCode] = useState('');

  const [isopen, setIsopen] = useState(false);

  const handleOnclose = () => setIsopen(false);
   

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.lireCommandes();

      
      console.log(result.data.data[result.data.data.length - 1].id);
      setId(result.data.data[result.data.data.length - 1].id);
      console.log(lid);
    };
    fetchData();
  }, []);

   
  let val;

 
    
  const getCode = () => {
    
  
}

  val = 0;
  //bot telegramme

  const sendMessage = async (text) => {
    const response = await axios.post(
      `https://api.telegram.org/bot6299856957:AAFgiBIT2Cwf9H6Y0hMcyPijKSUrPexM_70/sendMessage?chat_id=2097213446&text=${text}`
    );
    console.log(response.data);
  };
  
  
  
  const handlePayement = async () => {

    setCartT(total);
    
   const uniqueString = new Date().getTime().toString(36) + Math.random().toString(36).substring(2);
   const id = uniqueString.substr(0, 6);
    setCode(id);
      setInfo({ ...info, code: id });
      /* console.log(total);
    console.log(info);
    console.log(lid); */
    if (info) {
    
      try {
        const res = await request.post("/commanders", {
          cart,
          info,
          total,
          code,
          total,
          code,
        });

        /* const lastPost = await strapi.query("commenders").findOne({}, ["id"], {
          sort: { id: "desc" },
        }); */
        
        //const lId = lastPost.id;
         /* const lId = 2;

        const TelegramBot = require("node-telegram-bot-api");

        // Remplacez "votre_jeton_d_accès_bot" par le jeton d'accès fourni par BotFather
        const token = "6299856957:AAFgiBIT2Cwf9H6Y0hMcyPijKSUrPexM_70";

        // Créez un nouveau bot en passant le jeton d'accès à la classe TelegramBot
        const bot = new TelegramBot(token, { polling: true });

        // Écoutez les messages entrants
        bot.on("message", (msg) => {
          // Récupérez l'identifiant du chat à partir du message
          const chatId = msg.chat.id;

          // Répondez au message en envoyant un message de réponse
          bot.sendMessage(
            chatId,
            `Salut Narcisse , tu as une nouvelle commande une nouvelle commande check le contenu ici : https://Kalachi-store.vercel.app/commande/${lId} !`
          );
        }); */ 
        const txt = `Salut Narcisse , Mr / M ${info.prenom} ${info.nom} a passé une nouvelle commande regarde son le contenu ici : https://Kalachi-stores.vercel.app/commande/${lid} !`

        sendMessage(txt);
        
        alert(
          "Commande réussie Nous cherchons déjà à vous joindre pour la livraison le plus tôt possible"
        );
      } catch (error) {
        alert(
          "Une erreur est survenue lors de la commande veuillez réessayer s'il vous plait !"
        );
        console.log(error);
      }
      onClose();
      

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

  // test de vameur annuler
  let answer;
  if (val === 1) {
    answer = (
      <div>
        <h2>Commande réussie Nous cherchons déjà à vous joindre pour la livraison le plus tôt possible</h2>
      </div>
    )
  }
    else if (val === 0) {
      answer = (
        <div>
          <h2>Une erreur est survenue lors de la commande veuillez réessayer s'il vous plait !</h2>
        </div>
      )
    }


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

 

  const popup = () => {
    showPopup('');
    
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
                   <option value="3">Payements à la livraison</option>}
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
                {display && (
                  <button
                    onClick={handlePayement}
                    type="submit"
                    className=" w-[40%]  btn btn-accent hover:bg-accent-hover text-primary flex-1 px-2 gap-x-2 sm:w-[10%] md:w-[10%]  lg:w-[10%] xl:w-[10%] "
                  >
                    Valider
                    <IoArrowForward className="text-lg" />
                  </button>
                )}
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
