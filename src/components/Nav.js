import * as React from "react";
import { motion } from "framer-motion";
//import { MenuItem } from "./Items";
import './Nav.css';
import { FaFacebookF ,FaInstagram,FaLinkedinIn   } from "react-icons/fa";
import logoImage from '../../src/assets/img/logo.png';

const Navvariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const Itemvariants = {
  open: {
    y: 10,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 80,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};
const Textvariants={
  open: {
    y: 10,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 80,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

const Items = [
  {
    id: 1,
    text: "Work",
    link_id: "work",
  },
  {
    id: 2,
    text: "Services",
    link_id: "services",
  },
  {
    id: 3,
    text: "Approach",
    link_id: "approach",
  },
  {
    id: 4,
    text: "Careers",
    link_id: "careers",
  },
  {
    id: 5,
    text: "SME Initiative",
    link_id: "sme-initiative",
  },
  {
      id: 6,
      text: "Contact",
      link_id: "contact",
    },
];


export const Navigation = () => (
                 <motion.div variants={Navvariants} className='grid grid-cols-2 '>
                  <div className="relative p-10 ml-10 top-[30%] textStyle"> 
                    <motion.p variants={Textvariants} className="aboutText text-[11pt] text-gray-400 leading-9 " >
                      Wunderfauks is an integrated creative agency focusing on new and innovative experiences. From the likes of creative expression to a campaign execution, communication and creative implementation, Wunderfauks provides tailored bulls-eye solutions that focus on results over activities.<br/><br/>
                      With digital as our strong suit, we have a dynamic team comprising of multi-disciplinary individuals with their own think tanks of interesting ideas and concepts to suit any need, logic and aspiration.<br/>
                      <span className="text-[11pt] text-gray-400 ">&copy; 2023</span>
                        
                        </motion.p>
                  </div>
                  <div >
                      <ul className="navList" >
                        <motion.div className="flex flex-row pb-[30px] text-2xl text-gray-400" variants={Textvariants} >
                          <div className=" py-5 px-2" variants={Textvariants}> <FaFacebookF/></div>
                          <div className=" py-5 px-2" variants={Textvariants}> <FaInstagram/></div>
                          <div className=" py-5 px-2 " variants={Textvariants}> <FaLinkedinIn/></div>
                          
                          </motion.div>
                      {Items.map((item) => (
                        <motion.li
                        variants={Itemvariants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      className='text-gray-200 text-2xl'>  
                      <a href="/" key={item.id}>{item.text}</a>
                      </motion.li>
                      ))}
                      </ul>
                  
                  </div>
                  
            </motion.div>
                 

  
);
