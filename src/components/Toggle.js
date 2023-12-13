import * as React from "react";
import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill='transparent'
    strokeWidth="2"
    stroke="hsl(36, 19%, 95%)"
     strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }) => (
  <button onClick={toggle}>
    <svg width="24" height="20" viewBox="0 0 23 23" className="text-white">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }} />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </button>
);
