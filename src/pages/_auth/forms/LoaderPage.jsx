import React from 'react'
import PreLoader from '../../../components/PreLoader'
import logo from "../../../assets/dj-white.png"
// import PreLoader from '../components/PreLoader'

const LoaderPage = () => {
  return (

    <>
    <div className=' bg-black w-full h-screen '>
    
    <div className=' w-full'>

    <img
            src={logo}
            alt="nature image"
    />
    </div>
      <PreLoader />  
      
    </div>
    
    </>
    
  )
}

export default LoaderPage