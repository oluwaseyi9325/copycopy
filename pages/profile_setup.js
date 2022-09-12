import Image from 'next/image'
import React from 'react'
import BringCopy from '../component/profile/bringCopy'
import CreateProfile from '../component/profile/createProfile'
import Link from 'next/link'
import WelToCopyUp from '../component/profile/welToCopyUp'
import { useState } from 'react'
import Nav from '../component/profile/nav'

function profile_setup() {
    const[createShow,setCreateshow]=useState(true);
    const[welShow,setWelshow]=useState(false);
    const[bringShow,setBringshow]=useState(false);
  return (
    <div className='bb container-fluid' style={{backgroundColor:"#F3F3F3"}}>
        
    <div className='row pt-4 px-5'>
    <div className='col-6 text-left'>
       <Image src={require("../asset/logo.png")} />
    </div>
    <div className='col-6 text-right'>
    <Link href="/sign-up">
    <a className="btn btn-md rounded-lg  " style={{backgroundColor:"#DFDFDF",color:"#404040"}}>
      Skip
    </a>
  </Link>
    </div>
  </div>

      <div className='row  px-3'>
      
        <div className='col-lg-4 col-md-5 col-sm-6 mx-auto   shadow bg-white mt-3' style={{borderRadius:"20px"}}>
        
       {/*createShow && <CreateProfile/>*/ }  

     {/* <WelToCopyUp />*/}

 <BringCopy />

        </div>
       
      </div>
    
    
    </div>
  )
}

export default profile_setup