import React from 'react'

function Notification() {
  return (
    <div className='bg-white  p-3' style={{borderRadius:"20px"}}>

<div className='p-4'>
           

                  <div className="row">
                    <div className="col-2  mt-2">
                     <input type="checkbox" className='form-control' style={{fontSize:"10px",color:"red"}} />
                    </div>
                    <div
                      className="col-10  text-muted"
                      style={{
                        fontSize: "17px",
                        fontWeight: "400px",
                        lineHeight: "22px",
                      }}
                    >
                     <h6>New Content Announcements</h6>
                     <p><small>Get all the latest updates on all new content releases and product features</small></p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-2  mt-2">
                     <input type="checkbox" className='form-control' style={{fontSize:"10px"}} />
                    </div>
                    <div
                      className="col-10  text-muted"
                      style={{
                        fontSize: "17px",
                        fontWeight: "400px",
                        lineHeight: "22px",
                      }}
                    >
                     <h6>New Content Announcements</h6>
                     <p><small>Get all the latest updates on all new content releases and product features</small></p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-2  mt-2">
                     <input type="checkbox" className='form-control' style={{fontSize:"10px"}} />
                    </div>
                    <div
                      className="col-10  text-muted"
                      style={{
                        fontSize: "17px",
                        fontWeight: "400px",
                        lineHeight: "22px",
                      }}
                    >
                     <h6>New Content Announcements</h6>
                     <p><small>Get all the latest updates on all new content releases and product features</small></p>
                    </div>
                  </div>
                

                





                </div>
    </div>
  )
}

export default Notification;