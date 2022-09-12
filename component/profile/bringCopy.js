import React from 'react'

function BringCopy() {
  return (
    
    <React.Fragment>
    <div className='mt-5 px-3 pb-5'>
    <div className=" mt-5">
    <div>
      <h3>What brings you to CopyUp?</h3>
      <p className="text-muted"><smal>Select the option that best describes you.</smal></p>
    </div>
      <div>
        
      </div>
    <div className="mt-3">
      
    <input type="button"
    value="I want to improve my writing skills"
    className="form-control text-left btn btn-outline-primary"
    placeholder="Enter your last name"
  />
    </div>
    <div className="mt-3">
      
      <input type="button"
        value="I want to get hired"
        className="form-control text-left btn btn-outline-primary"
        placeholder="Enter your last name"
      />
    </div>

    <div className="mt-3">
      
    <input type="button"
      value="I want to upskill my team or hire writers"
      className="form-control text-left btn btn-outline-primary"
      placeholder="Enter your last name"
    />
  </div>

  <div className="mt-3">
      
  <input type="button"
    value="I’m just looking around"
    className="form-control text-left btn btn-outline-primary"
    placeholder="Enter your last name"
  />
</div>
    

    <button
      style={{ backgroundColor: "grey" }}
      className="btn btn-md btn-block rounded-lg text-white mt-3"
    >
      Continue
    </button>

    
  </div>
   
 





    </div>


   
    
    
    
  </React.Fragment>



  )
}

export default BringCopy