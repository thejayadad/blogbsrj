import React from 'react'
import Navbar from '../components/Navbar'


const Detail = () => {
  return (
    <div className="container-md" style={{ maxWidth: "850px"}}>
    <Navbar />
    <h2 className='text-center mt-4 mb-4'>Post Title</h2>
    
    <div className='bg-secondary'>
    <div class="card border border-primary">
      <img src="https://images.pexels.com/photos/1150988/pexels-photo-1150988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top p-2" alt="..." />
      <div class="card-body">
    <div className='d-flex justify-content-between'>
    <h5 class="card-title">Card title</h5> <h8 style={{ fontsize: "1px"}} className="fs-6">Category</h8>
    </div>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Username</small></p>
        <h8 className="fs-6">Like </h8>
      </div>
    </div>
    </div>


    </div>
  )
}

export default Detail