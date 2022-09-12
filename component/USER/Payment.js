import React from 'react'

function Payment() {
  return (
    <div className='bg-white  p-3' style={{borderRadius:"20px"}}>

<div className='p-4'>
           
           <div>
             <label className='h4 text-muted'>Card Number</label>
             <input disabled className='form-control  py-2 paymentInput' type="number" placeholder='Enter card Number' />
           </div>

           <div className='row'>
           <div className='col-lg-6 col-md-7 mt-4'>
             <label className='h5 text-muted'>Expire Date</label>
             <input disabled className='form-control  py-2 paymentInput' type="date" placeholder='Enter card Number' />
           </div>
           <div className='col-lg-6 col-md-7 mt-4'>
             <label className='h5 text-muted'>CVV</label>
             <input disabled className='form-control  py-2 paymentInput' type="password" placeholder='***' />
           </div>
           </div>

           <div className='mt-5 text-right'>
            <button className='btn  btn-primary'>Save</button>
           </div>
            
        </div>


    </div>
  )
}

export default Payment