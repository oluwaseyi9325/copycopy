import React from 'react'

function EditDetails() {
  return (
    <div className='bg-white  p-3' style={{borderRadius:"20px"}}>

<div className='p-4'>
           
           <div>
             <label className='h4 text-muted'>Email address</label>
             <input className='form-control  py-3 paymentInput' type="email" placeholder='joseph70@gmail.com' />
           </div>

           <div className='row '>
           <div className='col-lg-6 col-md-7 mt-4'>
             <label className='h5 text-muted'>New Password</label>
             <input  className='form-control  py-3 paymentInput' type="password" placeholder='Enter card Number' />
           </div>
           <div className='col-lg-6 col-md-7 mt-4'>
             <label className='h5 text-muted'>Confirm New Password</label>
             <input  className='form-control  py-3 paymentInput' type="password" placeholder='***' />
           </div>
           </div>

           <div className='mt-5  text-right'>
            <button className='btn px-4 rounded-lg' id='navText' >Save</button>
           </div>
            
        </div>


    </div>
  )
}

export default EditDetails;