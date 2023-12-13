import React, { useState, useEffect,useRef } from 'react';
import axios from 'axios';
import { motion,useAnimation,useCycle}  from 'framer-motion';
import { MenuToggle } from "./components/Toggle";
import { Navigation } from "./components/Nav";
import logoImage from '../src/assets/img/logo.png';
import InfiniteScroll from 'react-infinite-scroll-component';
import {Cross as Hamburger} from 'hamburger-react'
import ProgressBar from './components/ProgressBar';
import {SlArrowDown } from "react-icons/sl";
import { Nav } from './components/Nav';

const sidebar = {
  open: (height = 1000) => ({
    // clipPath: `circle(${height * 2 + 200}px at 100% 10px)`,
    clipPath: `circle(${height * 2 + 200}px at 98vw 10px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(0px at 98vw 10px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

function App() {
const [workData,setWorkData] =useState([]);
const [page,setPage] =useState(1);
const [hasMore,setHasMore]=useState(true);
const [isOpen,setIsOpen]= useState(false);
const controls=useAnimation();

const [showGallery, setShowGallery] = useState(false);
const [toOpen, toggleOpen] = useCycle(false, true);

  const toggleGallery = () => {
    setShowGallery(!showGallery);
  };

  useEffect(()=>{
    fetchData();
},[]);

const fetchData =async ()=>{
    try { const res= await axios.get('https://www.wunderfauks.com/wp/wp-json/acf/v3/work');
    if(res.data.length === 0){
        setHasMore(false); //no more work
    }else {
        setWorkData([ ...workData, ...res.data]);
        setPage(page); //increase page
    }
// setWorkData(res.data);
}catch(err){
console.error('Error fetching',err);
}
};



    return (
            <div className='App bg-slate-900'>
               <div className="bg-slate-900  top-0 py-6 px-6 h-[94px]">
      <motion.nav
        initial={false}
        animate={toOpen ? "open" : "closed"}
        custom="100%"
        >
        <motion.div className="navbar" variants={sidebar} />
            <Navigation />
            <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
        <img src={logoImage} alt="" className='h-full'/> 
    </div>
    <div >
        <h3>Hello Scarlett</h3>
        <ProgressBar/> 
        
      </div>
                    
                
        
           {showGallery && (
              <motion.ul className={`grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-0 ${
          showGallery ? 'visible opacity-100':'invisible opacity-0' 
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: showGallery ? 1 : 0 }}
        transition={{ duration: 0.5 }}>
                {workData.map((item) => (
                    <motion.li key={item.id}>
                        <div className='relative'>
                            
                            <img src={item.acf.image.url} alt="" className='hover:bg-slate-900 h-auto max-w-full'  />
                            <a href={item.acf.image.link}> 
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-80 rounded"> 
                                    <p className="text-white text-center text-3xl font-bold leading-4"> {item.acf.client} <br/>
                                        <span className='text-gray-400 text-sm text-center font-light'> {item.acf.work_category}</span>
                                    </p>    
                                 </div>
                            </a>
                            </div>  
                            
                    </motion.li>
                ))}
              </motion.ul> 
               )}
              {/* </InfiniteScroll> */}
            </div>
    )
 }
    export default App;