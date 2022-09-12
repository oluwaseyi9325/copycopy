import Image from 'next/image'
import React from 'react'

function EarnBig() {
  return (
    <div>

     <div style={{backgroundColor:"#2036ae",borderRadius:"10px"}}>
        <div className='px-3 pt-2 rw' style={{display:"flex"}}>
           <section className='text-white co-7'>
             <h4>Earn big with CopyUp!</h4>
             <div>
               <small>
               Make money by referring your friends to purchase any CopyUp course.
             <br/>
             Find your custom affliate link on any course page.
               </small>
             </div>
             <button className='btn bg-white mt-3' style={{color:"#2036ae",}}>Explore</button>
           </section>
           <section className='co-5 mt-4'>
             <Image src={require("../../asset/moni.png")} width={300} height={500} />
           </section>
        </div>
     </div>

    </div>
  )
}

export default EarnBig