import React from 'react'
import Home from '../../component/USER/home'
import Sidebar from '../../component/USER/Sidebar'
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import MobileNav from '../../component/USER/MobileNav';
import Header from '../../component/USER/Header';
import AccountSetting from '../../component/USER/AccountSetting';
import EarnBig from '../../component/USER/EarnBig';
import BottomNav from '../../component/USER/BottomNav';
import JobsForYou from '../../component/USER/JobsForYou';

function saved() {
  return (
    <div className='container-fluid ' style={{backgroundColor:"#F3F3F3"}}>
    <div className='row'>

     
    
    <Sidebar/>
    
    
    <div className='col colomn'>
         <Header />

         <div className='row px-4'>
         
         {
          [1,2].map((val,i)=>{
              return(
      
               <div className='col-lg-6 col-md-7'>
                   <div  className='bg-white text-muted mt-3   px-3' style={{borderRadius:"20px"}}>
                  
                  <JobsForYou />
      
                  </div>
                </div>
    
             
                )
            })
        }
     
      </div> 

       

   
    </div>



    
    </div>

    <div>
     <BottomNav/>
    </div>

  <div style={{height:"100px"}}></div>

    </div>
  )
}

export default saved