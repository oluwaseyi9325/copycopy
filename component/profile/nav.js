import React from 'react'

function Nav() {
  return (
    <div className='row pt-4 px-5'>
        <div className='col-6 text-left'>
           <Image src={require("../../asset/logo.png")} />
        </div>
        <div className='col-6 text-right'>
        <Link href="/sign-up">
        <a className="btn btn-md rounded-lg  " style={{backgroundColor:"#DFDFDF",color:"#404040"}}>
          Skip
        </a>
      </Link>
        </div>
      </div>
  )
}

export default Nav