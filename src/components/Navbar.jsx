import React from 'react'

const Navbar = () => {

  const openBar = () => {
    console.log('Open Bar');
    document.querySelector('.sidebar').classList.toggle('left-[-250px]')
  }

  return (
    <div>
      <header className='fixed bg-slate-500 h-20 w-full top-0 px-4 sm:px-6 h-18 lg:px-8'>
        <nav className='flex justify-between p-5'>
          <div className='flex justify-betwwen gap-2 bg-red-200'>
              <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md cursor-pointer text-white" onClick={openBar}></i>
              <h1>Meetify</h1>
          </div>
          <div className='flex justify-between bg-gray-200 gap-4'>
            <div className=''>
              <h2>Language</h2>
            </div>
            <div>
              <h2>User</h2>
            </div>

          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar