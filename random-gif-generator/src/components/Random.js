import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


//  const API_KEY='JVWbeJmQEw0nnhqgIPD6QAu7sWfcTOIV';
 //const API_KEY = process.env.GIPHY_API_KEY; 


const Random = () => {

    // const [gif,setGif]= useState('');
    // const [loading, setLoading] = useState(true);

    

    // async function fetchData() {
    //   try{
    //         setLoading(true);
    //       const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //       const {data} = await axios.get(url);
    //       const imageSource= data.data.images.downsized_large.url;
    //       console.log(imageSource);
          
    //       setGif(imageSource);
    //       setLoading(false);
    //   } catch(error){
    //     console.log("Bad Request " + error);

    //   }

       
        
    // }
    // useEffect( ()=>{
    //   fetchData();
    // } ,[]);

    const {gif, fetchData, loading}= useGif();
    function clickHandler(){
        fetchData();
    }
    
  return (
    <div className='w-1/2  rounded-md border border-white bg-[#661b8f] flex flex-col items-center gap-y-5 p-5'>
      <h1  className=' uppercase text-3xl underline text-white font-bold'>A Random Gif</h1>
     {
        loading ?(<Spinner/>) : ( <img src={gif} width="400px" height="270px"/>)
     }
     
      <button className='text-2xl bg-white px-[30%] rounded-md font-bold  py-2' onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Random
