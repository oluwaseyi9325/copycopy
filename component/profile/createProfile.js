import React from 'react'

function CreateProfile() {
  return (
    <div className='mt-5 px-3 pb-5'>
    <div className=" mt-5">
    <div>
      <h3>Create your personal profile</h3>
      <p className="text-muted"><smal>Let’s get to know you better. You can always change these later.</smal></p>
    </div>
      <div>
        
      </div>
    <div className="mt-3">
      <label style={{ color: "#808080" }}>First name</label>
      <input
        className="form-control"
        placeholder="Enter your email first name"
      />
    </div>
    <div className="mt-3">
      <label style={{ color: "#808080" }}>Last name</label>
      <input
        className="form-control"
        placeholder="Enter your last name"
      />
    </div>
    

    <button
      style={{ backgroundColor: "#2036AE" }}
      className="btn btn-md btn-block rounded-lg text-white mt-3"
    >
      Continue
    </button>

    
  </div>
    </div>
  )
}

export default CreateProfile;
