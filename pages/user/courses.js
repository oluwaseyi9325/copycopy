import React from 'react'
import Sidebar from '../../component/USER/Sidebar'
import Header from '../../component/USER/Header';
import Home from '../../component/USER/home'
import Courses from "../../component/USER/Courses"
import BottomNav from '../../component/USER/BottomNav';
function courses() {
  return (
    <div className='container-fluid ' style={{backgroundColor:"#F3F3F3"}}>
    
    <div className='row'>

     
    
    <Sidebar/>
    
    
    <div className='col colomn'>
         <Header />

         <div className='row mt-5 mb-5'>
          {
            [1,2,3,4,4,3,4,5,6,67,7].map(val=>{
                return(
                    <div className='col-lg-4 col-md-6 mt-5'>
                    <Courses />
                   </div>
                )
            })
          }
        
         
         </div>

   
    </div>



    
    </div>

    <div>
      <BottomNav />
    </div>


    </div>
  )
}

export default courses