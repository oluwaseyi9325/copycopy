import React from 'react'
import Home from '../../component/USER/home'
import Sidebar from '../../component/USER/Sidebar'
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import MobileNav from '../../component/USER/MobileNav';
import Header from '../../component/USER/Header';
import AccountSetting from '../../component/USER/AccountSetting';
import EarnBig from '../../component/USER/EarnBig';
import BottomNav from '../../component/USER/BottomNav';

function setting() {
  return (
    <div className='container-fluid ' style={{backgroundColor:"#F3F3F3"}}>
    <div className='row'>

     
    
    <Sidebar/>
    
    
    <div className='col colomn'>
         <Header />

       <AccountSetting />

       

   
    </div>



    
    </div>

    <div>
     <BottomNav/>
    </div>


    </div>
  )
}

export default setting