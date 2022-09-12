import Image from 'next/image'
import React, { useEffect,useState } from 'react'
import { useRouter } from "next/router";
import Link from 'next/link';

function Sidebar() {
  const { asPath } = useRouter();
  const routes=useRouter()
  const [getRoute, setGetRoute] = useState("");
  useEffect(() => {
    setGetRoute(asPath);
    console.log(getRoute);
  }, [asPath]);

  const ch=()=>{
    if (window.confirm("Dear Your user, \nYour about to Log Out of CopyUp!!!")) {
        routes.push("/signin")
    }else{
     routes.push(`${getRoute}`)
    }

 }


  return (
     
    <div className='col-2 shadow text-center bg-white d-none d-lg-block d-sm-none d-md-none'>
    <nav className="navbar navbar-expand-md py-5 sticky-top">
    <div className=''>
   
      <Image className='' src={require("../../asset/logo.png")} />
  
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>

        <div className='mt-3 px-3 collapse navbar-collapse' id="collapsibleNavbar">
        
          <div className='navbar-nav row'>
           
         <nav className=' mt-3 sideBtn ' id={getRoute === "/user/home" ? "navText" : ""} style={{borderRadius:"5px"}}>
         <Link href="/user/home"  >
          <a className='row pt-2 pb-1 px-4 h6 '  id={getRoute === "/user/home" ? "listSideNar" : "textDeco"} >
          <div className='col-3'><i className="bi bi-house-door-fill"></i> </div><div className='col-6 pr-5'>Home</div><div className='col-3 navLine'>|</div>
        </a>
          </Link>
         </nav>

          <nav className='sideBtn mt-5' id={getRoute === "/user/courses" ? "navText" : ""} style={{borderRadius:"5px"}}>
          <Link href="/user/courses">
          <a className='row pt-2 pb-1 px-4 h6' id={getRoute === "/user/courses" ? "listSideNar" : "textDeco"}>
          <div className='col-3'><i className="bi bi-book-half" ></i> </div><div className='col-6 pr-5'>Courses</div><div className='col-3 navLine'> |</div>
        </a>
          </Link>
          </nav>

        <nav className='text-muted sideBtn mt-5' id={getRoute === "/user/jobs" ? "navText" : ""} style={{borderRadius:"5px"}}>
        <Link href="/user/jobs">
          <a className='row pt-2 pb-1 px-4 h6' id={getRoute === "/user/jobs" ? "listSideNar" : "textDeco"}>
          <div className='col-3'><i className="bi bi-box2"></i> </div><div className='col-6 pr-5'>Jobs</div><div className='col-3 navLine'> |</div>
        </a>
          </Link>
        </nav>

          <nav className='text-muted sideBtn mt-5' id={getRoute === "/user/saved" ? "navText" : ""} style={{borderRadius:"5px"}}>
          <Link href="/user/saved">
          <a className='row pt-2 pb-1 px-4 h6' id={getRoute === "/user/saved" ? "listSideNar" : "textDeco"}>
          <div className='col-3'><i className="bi bi-save-fill"></i> </div><div className='col-6 pr-5'>Saved</div><div className='col-3 navLine'> |</div>
        </a>
          </Link>
          </nav>

          <nav className='text-muted sideBtn mt-5' id={getRoute === "/user/affiliates" ? "navText" : ""} style={{borderRadius:"5px"}}>
          <Link href="/user/affiliates">
          <a className='row pt-2 pb-1 px-4 h6' id={getRoute === "/user/affiliates" ? "listSideNar" : "textDeco"}>
          <div className='col-3'><i className="bi bi-stars"></i></div><div className='col-6 pr-5'>Affiliate</div><div className='col-3 navLine'> |</div>
        </a>
          </Link>
        
          </nav>
      


      




          </div>
          

        </div>

         <div style={{height:"60px"}}></div>
         <small style={{cursor:"pointer"}} onClick={()=>ch()} className='text-warning'><i className="bi bi-box-arrow-left"></i> Log out</small>
    



    </div>

    </nav>
    </div>
  )
}

export default Sidebar