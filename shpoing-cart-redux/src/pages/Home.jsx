import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';

const Home = () => {
    const API_URL="https://fakestoreapi.com/products";
    const [loading, setLoading]= useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchProductData() {
        setLoading(true);
        try{
            const res= await fetch(API_URL);
            const data= await res.json();

            setPosts(data);
        } catch(e){
            console.log("error", e);
            setPosts([]);
            
        }
        setLoading(false);
        
    }

    useEffect(()=>{
        fetchProductData();
    }, []);
  return (
    <div className=' '>
        {
            loading ? <Spinner/> :
            posts.length > 0 ? 
            (
                <div className='grid xs:grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-6 min-h[80vh] mb-6'> {
                    posts.map((post) => (
                        <Product key={posts.id} post={post}/>
                    ))
                }
                    </div>
                
            ) : 
            <div className='w-screen h-full flex justify-center items-center '> 
            <p className='text-green-700 text-3xl font-bold'>
            No data Found </p> </div>
            
        }
        <div className='flex justify-center mt-5 bg-gray-900 text-white font-semibold text-sm py-3'>

       <p>&copy; {new Date().getFullYear()} Ecomzy.com. All rights reserved.</p>
        </div>
      
    </div>
  )
}

export default Home
