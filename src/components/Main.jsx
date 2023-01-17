import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
const Main = () => {
  return (
    <div className=''>
      <Navbar />
      <Sidebar />
      <main className='bg-gray-600 mt-20 grid'>
        <div className='mx-auto p-8 left-80'>
          <div className='bg-white rounded-lg lg:ml-[255px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero odio, dignissimos delectus atque maxime ea fugit sit ut harum qui vel, beatae, quia fuga? Corporis vel excepturi mollitia exercitationem non.
          </div>
        </div>
      </main>
    </div>
  )
}

export default Main