import React from 'react'
import Link from 'next/link'

function WelcomeBanner() {
  return (
    <div className='mt-3 mb-5 '>
    <div style={{ height: "10px" }}></div>
        <section className='container-fluid"'>
        
          <div className='welImg '>
             
          
          <div className="py-5 bannerText mt-5 animate__animated animate__fadeInLeft container-fluid">
            <div className='row'>
              <div className='col-lg-10  mx-auto col-sm-12'>
              <div id="welMessage_1" className="mt-5">
              Welcome to the first ever <br/>
              <span style={{ color: "#FF9438" }}>Copywriting</span> platform in
              Nigeria
            </div>
            <div id="welMessage_2" className="mt-4">
              Get well-paying copywriting clients without stress and learn
              copywriting on the go!
            </div>
            <div className="mt-4">
                <Link href="/sign-up">
                <a className="btn btn-lg btn-create">
                Create a free account
              </a>
                </Link>
            </div>
              </div>
            </div>
        </div>
         
          
          </div>
        
        </section>
    </div>
  )
}

export default WelcomeBanner
