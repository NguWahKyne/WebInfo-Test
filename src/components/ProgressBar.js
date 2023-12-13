import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const ProgressBar = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [textAnimationComplete, setTextAnimationComplete] = useState(false);
  const [progress, setProgress] = useState(0);

  const controls = useAnimation();

  //const text= "Hi, We are integration create Digital".split(" ");

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      } else {
        setLoadingComplete(true);
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [progress]);

  useEffect(() => {
    if (loadingComplete) {
      setTimeout(() => {
        setTextAnimationComplete(true);
        setTimeout(() => {
          controls.start({ opacity: 0 });
        }, 1000); 
      }, 3000); 
    }
  }, [loadingComplete, controls]);

  return (
    <div className="relative flex items-center justify-center h-screen top-[-20px] bottom-[40px]">
      
      {!textAnimationComplete && (
        <div className= "absolute h-1 w-full rounded-full">
          <motion.div
            className="h-full w-full bg-slate-200 font-light text-xs"
            initial={{ width: '0%' }}
            animate={{ width: loadingComplete ? '100%' : `${progress}%` }}
            transition={{ duration: 2 }}
          />
        </div>
      )}

      {loadingComplete && (
        <div
          className="absoulute top-0 left-0 w-full h-full flex items-center justify-center"
          
        >
            {textAnimationComplete && (
              <TypeAnimation className=" text-white text-2xl  w-[240px] h-[50vh] "
              sequence={[
                'Hi..',
                'WE ARE AN INTEGRATED CREATIVE AGENCY',
                1000,
                'SINCE 2010',
                1000,
                'DIGITAL SOLUTION',
                1000,
                'CHANGE IS ONLY CONSTANT'
              ]}
              wrapper="span"
              speed={30}
              style={{ fontSize: '2em', display: 'inline-block',lineHeight:'3rem' }}
            />
                
            )}
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
