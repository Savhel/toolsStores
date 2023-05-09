import React from 'react';
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook, FaInbox } from 'react-icons/fa'

const Footer = () => {
  return <footer className='pt-16 bg-primary'>
    <div className='container mx-auto'>
      <div className='text-center'>
        <h2 className='h-2 uppercase mb-6 font-semibold'>S'ouscrire pour les nouveautés</h2>
        <p className='text-white/70'>Soyez les premiers a connaitre ce qu'il ya de nouveau (matériels, promotions ...) pour vous dans nos locaux</p>
      </div>
      {/* formulaire */}
      <form className='w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-5 my-14 '>
        <input type='email' placeholder='voutre email' className='input' />
        <button className='btn btn-accent min-w-[150px]'>Joindre</button>
      </form>
      <div className='text-base text-white/60 flex gap-x-6 capitalize max-w-max mx-auto mb-9'>
        Situé à Ngousso ..........  Pour tous vos probèmes liés à vos commandes contactez le  : +237 6...........
      </div>
      {/* liens */}
      <div className='text-base text-white/60 flex gap-x-6 capitalize max-w-max mx-auto mb-9'>
        <a href='#' className='hover:text-white transition-all'>Police</a>
        <a href='#' className='hover:text-white transition-all flex'>Service Client</a>
        <a href='#' className='hover:text-white transition-all'>Transport et livraison</a>
      </div>
      {/* Social */}
      <div className='flex gap-x-6 max-w-max mx-auto text-lg mb-16'>
        <a href='https://XyoinTube.netlify.app' className='hover:text-white transition-all'><FaYoutube /></a>
        <a href='#' className='hover:text-white transition-all'><FaFacebook /></a>
        <a href='#' className='hover:text-white transition-all'><FaInstagram /></a>
        <a href='#' className='hover:text-white transition-all'><FaTwitter /></a>
      </div>
    </div>
    {/* CopyRight */}
    <div className='py-10 border-t border-t-white/10'>
      <div className='container mx-auto'>
        <div className='text-center text-sm text-white/60'>Copyright &copy; XyonCodeurs 2023. ALL rights reserved.</div>
      </div>
    </div>
  </footer>;
};

export default Footer;
