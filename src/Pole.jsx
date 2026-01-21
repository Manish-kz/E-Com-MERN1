import React from 'react'
import { motion } from 'framer-motion'

function Pole() {
  return (
   <>
    <div className='min-h-screen flex justify-between px-20 items-cente mt-20 text-black'>

       <motion.div className='flex justify-between w-full relative'
            initial={{ opacity: 0.3, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false }}
       >
            <div className='flex flex-col'>
                <p className='mb-20'>Hot off the press</p>
                <h3 className='font-bold w-110 text-4xl mb-8'>“Solves the big
                    problems with
                    skiing’s least
                    appreciated gear”</h3>
                <img src="/images/company.svg" alt=""
                className='h-6 w-48' />
            </div>

            <div className='w-110 overflow-hidden rounded-xl'>

                <img src="/images/pole.jpg" alt=""
                className='rounded-xl hover:scale-105 transition cursor-pointer'
                />
            </div>
       </motion.div>
    </div>
  <div className=' w-full px-20 text-5xl font-bold text-black mt-10 tracking-wide'>
               Cheers to long days, short days, days you never want to end
                   , “type 2 fun” days, travel days
                   , bluebird days
                   , and all the days in between.
           </div>
   
   </>
  )
}

export default Pole


