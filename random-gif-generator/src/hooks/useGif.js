import axios from 'axios';
import React, { useEffect, useState } from 'react'


const useGif = (tag) => {
    const API_KEY= 'JVWbeJmQEw0nnhqgIPD6QAu7sWfcTOIV';
    const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    
  
    
        const [gif,setGif]= useState('');
        const [loading, setLoading] = useState(true);
      
        async function fetchData(tag) {
          try{
                setLoading(true);
           
              const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
              const imageSource= data.data.images.downsized_large.url;
             
              
              setGif(imageSource);
              setLoading(false);
          } catch(error){
            console.log("Bad Request " + error);
    
          }
        }
        useEffect( ()=>{
          fetchData('car');
        } ,[]);
      return {gif, fetchData, loading};
}

export default useGif
