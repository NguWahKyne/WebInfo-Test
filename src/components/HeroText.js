
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import {motion,useAnimation} from 'framer-motion';

const HeroText = () => {
  const controls = useAnimation();
  return (
    <motion.div className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
    initial={{ opacity: 1 }}
    animate={controls}>
      <TypeAnimation className="relative text-white text-2xl items-center justify-center w-[200vw] h-[35vh]"
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
              style={{ fontSize: '2em', display: 'inline-block' }}
              
            />
    </motion.div>
  )
}

export default HeroText