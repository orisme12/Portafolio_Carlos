import React from 'react'

export default function Skill({title,id}) {
  return (
    <div className='min-h-[100vh]  text-black'>
         <div id={id} className='max-w-[80vh] m-auto border'> 
       <h2 className="text-white text-[1.5rem] font-customThree mt-6">{title}</h2>
      </div>
        
    </div>
  )
}
