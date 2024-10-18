import React from 'react'
import Pagination from '../components/Pagination'
import Header from '../components/Header'
import Blogs from '../components/Blogs'

const Home = () => {
  return (
    <div>
      <Header/>
      <div className='py-1 max-w-[720px] px-[25px] mx-auto'> 
        <Blogs/>
      </div>
      <Pagination/>
    </div>
  )
}

export default Home
