import React, { useEffect, useState } from 'react'
import { useRouteLoaderData } from 'react-router-dom'



function Github() {
    const data= useRouteLoaderData()

    // const [data, setdata]= useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/mr-kamlesh-pawar')
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((data) => {
    //             console.log(data);
    //             setData(data);
    //         })  
    // }, []);

  return (
    
    <div className='text-center mx-4 bg-gray-500 px-4 h-72 text-white text-3xl'>
        {data ? ( <>

        GitHub Followers : {data.followers}
        console.log(data)

        <img src={data.avatar_url} alt="photo" width={300} />
        </>

        ): (<p>Loading</p> )}
      
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    const data = await response.json();
    return data;
}