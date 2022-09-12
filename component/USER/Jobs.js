import React from 'react'
import Link from 'next/link';
import Image from "next/image"

import Header from './Header';

function JobsComponent() {
  return (
    <div>
    




   
    <div className='row mt-4'>
    <div className='col-lg-9 col-md-12'>

   <div>
   <section>
   
  
   <div className="row">

   

   
  <section>

  <div className='px-3 mt-4'>

  <div className='row px-4'>
      <div className='col-9 h4' style={{fontFamily:"verdana"}}>
        Jobs For You
      </div>
      <div className='col-3 text-right h6'>
         View all
      </div>
  </div>
     
 
     <div className='row px-4'>
         
     {
      [1,2].map((val,i)=>{
          return(
  
            <div  className='bg-white text-muted mt-3 col-12 px-3' style={{borderRadius:"20px"}}>
              
            <JobsForYou />

            </div>

         
            )
        })
    }

       </div>


    </div>
  
    




  </section>
 </div>
   </section>
   </div>


    <p>






    </p>
    </div>


      
   



   
    </div>

      

    
    </div>
  )
}

export default JobsComponent