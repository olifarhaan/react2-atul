import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import {LuDownload} from "react-icons/lu";
import {IoClose} from "react-icons/io5";
import { motion } from "framer-motion"



function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} className='flex-shrink-0 relative w-60 h-72 bg-zinc-600 rounded-[45px] p-5 text-white mt-4 leading-tight'>
        <FaFileAlt />
        <p>
            {data.desc}
        </p>
        <div className='flex justify-between items-center '>  <h1 className='mt-5'>{data.filesize}</h1>
      {data.close? <IoClose/> :<LuDownload/>}
</div>
{
  data.tag.isOpen &&

       ( <div className={`tag footer absolute bottom-0 ${data.tag.tagColor === "blue" ?"bg-blue-600" : "bg-green-600"} rounded-[40px] w-full h-20 left-0 text-center `}> <div className='mt-6'><h3 className='text-xl font-semibold'>{data.tag.tagTitle}</h3></div></div>)
   }    

    </motion.div>
    
    
  );
}

export default Card 