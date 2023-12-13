
import  React,{useState,useEffect,useRef} from "react";
import { motion, useCycle ,useAnimation } from "framer-motion";
import { MenuToggle } from "./components/Toggle";
import { Navigation } from "./components/Nav";
import logoImage from '../src/assets/img/logo.png';
import arrowImg from '../src/assets/icon/down.png';
import ProgressBar from "./components/ProgressBar";
import axios from 'axios';
import './App.css';

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

export default function AppTest() {
const [workData,setWorkData] =useState([]);
const [page,setPage] =useState(1);
const [hasMore,setHasMore]=useState(true);
// const controls =useAnimation();
  const [toOpen, toggleOpen] = useCycle(false, true);
  const galleryRef = useRef(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData =async ()=>{
        try { 
            const res= await axios.get('https://www.wunderfauks.com/wp/wp-json/acf/v3/work');
        if(res.data.length === 0){
            setHasMore(false); //no more work
        }else {
            setWorkData([ ...workData, ...res.data]);
            setPage(page+1); //increase page
        } 
    // setWorkData(res.data);
   }catch(err){
    console.error('Error fetching',err);
    
  } 
    };
    
    const goGallery = () => {
        if (galleryRef.current) {
          galleryRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      };

  return (
   <> 
    <div className=" h-full w-full">  
        <div className="h-[99vh] w-full  "> 
            <div className="grid grid-cols-2 w-full h-[90px]">
                <div className="px-5 py-5 "> 
                    <img src={logoImage} alt="logo"  className="w-[220px] h-[42px]"/>
                </div>       
                <div >
                    <motion.nav
                    initial={false}
                    animate={toOpen ? "open" : "closed"}
                custom="80%" 
                    >
                    <motion.div className="navbar" variants={sidebar} ></motion.div>
                    <Navigation />
                    <MenuToggle toggle={() => toggleOpen()} className='relative z-1' />     
                    </motion.nav>
                </div> 
            </div> 
            <div className="grid gird-cols-1 w-full max-h-screen absolute -z-10">
                <ProgressBar /> 
            </div>
        </div>
      
    </div> 
        <div className="relative" ref={galleryRef}>
        <img src={arrowImg} alt="" className="absolute bottom-[8%] left-[50%] justify-center items-center text-slate-200" onClick={goGallery}/>
        <ul  className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-0 w-full'>
                {workData.map((item) => (
                    <li key={item.id}>
                        <div className="relative">
                            <img src={item.acf.image.url} alt="" className='hover:bg-slate-900 h-auto max-w-full'  />
                            <a href={item.acf.image.link}> 
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-80 rounded"> 
                                    <p className="text-white text-center text-3xl font-bold leading-3 items-center justify-center "> {item.acf.client} <br/>
                                        <span className='text-gray-400 text-sm text-center font-light'> {item.acf.work_category}</span>
                                    </p>    
                                 </div>
                            </a>
                            </div>  
                            
                    </li>
                ))}
        </ul>
        </div>     
             </>
   
  );
}
