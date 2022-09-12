import React from 'react'
import Home from '../../component/USER/home'
import Sidebar from '../../component/USER/Sidebar'
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import MobileNav from '../../component/USER/MobileNav';
import Header from '../../component/USER/Header';
import BottomNav from '../../component/USER/BottomNav';




function user() {
  const { asPath } = useRouter();
  const routes = useRouter();
  const [getRoute, setGetRoute] = useState("");
  const [col, setColapse] = useState("collapse");
  const [expandCol, setExpandCol] = useState("");
  useEffect(() => {
    setGetRoute(asPath);
    console.log(getRoute);
  }, [asPath]);
  const togBtn = () => {
    setExpandCol("navbar-expand-lg");
  };
  return (
    <div className='container-fluid ' style={{backgroundColor:"#F3F3F3"}}>
    
    <div className='row'>

     
    
    <Sidebar/>
    
    
    <div className='col colomn'>
         <Header />

       <Home/>

       

   
    </div>



    
    </div>

    <div>
      <BottomNav/>
    </div>


    </div>
  )
}

export default user