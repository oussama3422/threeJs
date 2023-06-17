import React from 'react'
import { motion,AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import state from '../store'
import { CustomButton } from '../componenets'
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion'
function Home() {
    const snap = useSnapshot(state)
  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.div className="home" {...slideAnimation('left')}>
                <motion.header {...slideAnimation('down')}>
                    <img src="./threejs.png" alt="Logo" className='w-8 h-8 object-contain '/>
                </motion.header>
                <motion.div className="home-content" {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}>
                        <h1 className='head-text'>
                            LET'S <br className='xl:block hidden'/> DO TI.
                        </h1>
                    </motion.div>
                    <motion.div
                       {...headContentAnimation}
                       className="flex flex-col gap-5"
                        >
                        <p className='max-w-md font-normal text-gray-600 text-base'>
                            Create your unique and exclusive shirt with our 
                            brand-new 3D customization tool.<string>Unleash your 
                            imagination </string>{" "}
                            and define our own style.
                        </p>
                        <CustomButton
                           type="filled"
                           title="Custmise It"
                           handleClick={()=>state.intro = false}
                           customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
  )
}

export default Home