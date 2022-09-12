import React from 'react'
import BottomNav from '../../component/USER/BottomNav'
import Header from '../../component/USER/Header'
import JobsComponent from '../../component/USER/Jobs'
import JobsForYou from '../../component/USER/JobsForYou'
import Sidebar from '../../component/USER/Sidebar'

function jobs() {
  return (
    <div className='container-fluid ' style={{backgroundColor:"#F3F3F3"}}>

    <div className='row'>
                  <Sidebar />
              

                      <div className='col colomn'>

                  <Header />
                  

                  <section>

                <div className=' mt-4'>
                   <h5 className='px-3 ml-2'>Copywriting Job Opportunities</h5>
                    <div className='row px-4 '>
                        
                 <div className='col-lg-8 col-md-12 order-1'>
                 {
                    [1,2,3,4,5,6,7].map((val,i)=>{
                        return(
                
                            <div  className='bg-white text-muted mt-3 mb-5 px-3' style={{borderRadius:"20px"}}>
                            
                            <JobsForYou />

                            </div>

                        
                            )
                        })
                    }
                 </div>

                    <section className='col-lg-4 col-md-12 order-md-1 mt-4'>
                      
                    <div className='card'>
                       <div className='card-header h4'>
                        Job Filter
                       </div>
                       <div className='card-body'>

                       <div className='text-muted'>
                         <small>Kindly enter the type of job you are looking for ,</small>
                          <br/>
                        <small>  Seach with the job keywords e.g (copy writing in lagos)</small>
                       </div>

                      
                       <input list="filter" placeholder='Search for Job' className='form-control mt-3 ' />
                       <datalist style={{overflow:'auto',backgroundColor:"red"}} id="filter" className='text-center border shadow-lg rounded-lg'>
                         {
                          [1,2,3,4,5,6,7,8,9,0].map(val=>{
                           return(
                            <React.Fragment>
                            <option className='bg-info' value="Copy Writter"><b>Needed at Lagos With miminum <br /> of 10 years of expresic, come fsjhjaK dsufusfsl nsdfuasfoas</b></option>
                             <hr />
                          </React.Fragment>
                           )
                          })
                         }
                       </datalist>
                    
                       
                       </div>
                    </div>
                    
                    </section>

                    </div>


                    </div>
  
    




  </section>




                      

                       </div>
     </div>

     <div>
      <BottomNav />
     </div>


    </div>
  )
}

export default jobs
