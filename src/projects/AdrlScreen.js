import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {URL} from './PictureUrl.js';

const constainerVariants = {
  hidden: {
    opacity: 0,
    y: '-100vh',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', delay: 0.2, mass: 0.4, damping: 8, when: 'beforeChildren', staggerChildren: 1 },
  },
  exit: {
    y: '-100vh',
    transition: { ease: 'easeInOut' },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const childVariantsButton = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },
  visible: {
    opacity: 1,
    x: '0',
    transition: { type: 'spring', delay: 0.5, mass: 0.4, damping: 6 },
  },
};

export const AdrlScreen01 = () => {
  const [showPicture, setShowPicture] = useState(0);
  return (
    <motion.div
      className="review__container"
      variants={constainerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.h1 variants={childVariants}> {URL[showPicture].title}</motion.h1>

      <motion.img
        src={URL[showPicture].link}
        alt={''}
        className="review__img"
      />

      <motion.div className="next" variants={childVariantsButton}>
      {
             showPreviousButton(showPicture) &&(
              <motion.button onClick={()=>{
                setShowPicture(showPicture-1)
              }}>Previous</motion.button>
             ) 
           } 

           {
             showNextButton(showPicture) &&(
              <motion.button onClick={()=>{
                setShowPicture(showPicture+1)
              }}>Next</motion.button>
             ) 
           } 
      </motion.div>
    </motion.div>
  );
};

const showNextButton = (flg) =>{
  return flg < URL.length -1 ? true : false;   
}

const showPreviousButton = (flg) =>{
  return flg >0 ? true : false;
}

export const AdrlScreen02 = () => {
  return (
    <motion.div variants={constainerVariants} initial="hidden" animate="visible" exit="exit">
      <h1>pagina 2</h1>
    </motion.div>
  );
};

export const AdrlScreen03 = () => {
  return <h1>Pagina 3 del adrl</h1>;
};
