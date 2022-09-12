import Image from 'next/image'
import React from 'react'
import { useState } from 'react'

function WelToCopyUp() {
    
  return (
   
    
      
                <div className='py-5 px-3'>
                     <div className='text-center'>
                        <Image src={require("../../asset/logo.png")} />
                     </div>
                     <div className='mt-3 text-center'>
                       <h2>Welcome to CopyUp</h2>
                     </div>
                     <div className='text-muted mt-3'>
                     Hi there! Learning and improving your skills is a fundamental copywriting practice, regardless of years of experience. <br/><br/>
                     Thanks so much for checking out CopyUp.
                     </div>
                     <div className='mt-3'>
                     <button
                     style={{ backgroundColor: "#2036AE" }}
                     className="btn btn-md btn-block rounded-lg text-white mt-3"
                   >
                    Go to Home
                   </button>
                     </div>
              
          
    
    
    </div>
  )
}

export default WelToCopyUp