import React from 'react'
import { motion } from 'framer-motion'

function Pole() {
  return (
    <>
      <div className='w-full flex px-6 md:px-20 items-center py-12 md:py-24 text-black'>

        <motion.div
          className='flex flex-col lg:flex-row justify-between w-full gap-12'
          initial={{ opacity: 0.3, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          {/* Text Section */}
          <div className='flex flex-col max-w-xl'>
            <p className='mb-4 md:mb-16'>Hot off the press</p>

            <h3 className='font-bold text-2xl sm:text-3xl md:text-4xl mb-6 leading-tight'>
              “Solves the big problems with skiing’s least appreciated gear”
            </h3>

            <img
              src="/images/company.svg"
              alt="company"
              className='h-6 w-40'
            />
          </div>

          {/* Image Section */}
          <div className='w-full lg:w-[450px] overflow-hidden rounded-xl'>
            <img
              src="/images/pole.jpg"
              alt="pole"
              className='rounded-xl hover:scale-105 transition-transform duration-500 cursor-pointer w-full'
            />
          </div>

        </motion.div>
      </div>

      {/* Bottom Text Section */}
      <div className='w-full px-6 md:px-20 text-2xl sm:text-3xl md:text-5xl font-bold text-black py-10 md:py-16 tracking-wide leading-tight'>
        Cheers to long days, short days, days you never want to end,
        “type 2 fun” days, travel days, bluebird days,
        and all the days in between.
      </div>
    </>
  )
}

export default Pole
