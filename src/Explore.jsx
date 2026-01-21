import React from 'react'
import { motion } from 'framer-motion'

function Explore() {
  return (
    <div className="w-full h-screen   mt-20 mb-20 text-white">
       
       <motion.div className='w-full h-full relative'
       initial={{opacity:0, targetY:100}}
       whileInView={{opacity:1, targetY:0}}
       transition={{duration:1.5}}
       >
        <img src="https://images.pexels.com/photos/35265834/pexels-photo-35265834.jpeg" alt="" className='  w-full h-full object-cover' />

        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-bold">Looking for more?</h1>
        <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold mt-18">Shop Everything We Got</h3>
        <button className='absolute bottom-1/6 left-1/2 transform -translate-x-1/5 -translate-y-1/2 bg-white text-black px-6 py-3 rounded-full font-bold  mt-10 cursor-pointer mb-10 hover:text-white hover:bg-black'>Explore</button>
       </motion.div>

        <hr />
    </div>
  )
}

export default Explore