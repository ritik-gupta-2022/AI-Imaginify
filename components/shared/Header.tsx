import React from 'react'

const Header = ({title , subtitle}:{
    title:String;
    subtitle?:String;
}) => {
  return (
   <>
     <h2 className='h2-bold text-dark-600 lg:mt-2 mt-20'>{title}</h2>
     {subtitle && <p className='p-16-regular mt-4'>{subtitle}</p>}
   </>
  )
}

export default Header