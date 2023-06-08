import Vegetarian from "../Comp/Vegetarian";
import Trending from "../Comp/Trending";
import React from "react";
import { motion } from "framer-motion";
import Vegan from "../Comp/Vegan";
import Pescetarian from "../Comp/Pescetarian";


function Home() {
  return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    >
        <Trending />
        <Vegetarian />
        <Vegan />
        <Pescetarian />
        </motion.div>
        
  );
}

export default Home