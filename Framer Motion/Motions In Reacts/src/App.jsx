import React from "react"
import {motion} from "motion/react"

  function App(){
    return(
      <div>
        <motion.div 
        // animate={{
        //   x:[0, 800, 800, 0, 0],
        //   y: [0, 0, 300, 300, 0],
        //   rotate:[0,180, 90, 180, 360]
        // }}
        // transition={{
        //   duration:4,
        //   delay:1
        // }}

        whileHover={{
          backgroundColor: "blue",
          
        }}
        drag
        dragConstraints={{
          left:0,
          top:0,
          right:1080,
          bottom:500
        }}
        dragDirectionLock
        className="box">
          
        </motion.div>
      </div>
    )
  }


export default App
