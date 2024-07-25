import { useState } from 'react'


function App() {
  const [color, setColor] = useState("")

  return (
    
    <div className='w-full h-screen duration-200 ' style={{backgroundColor : color }}>
      <div className=' fixed flex flex-wrap   bottom-12 justify-center px-2 inset-x-0'> 
    <div className='flex flex-wrap justify-center gap-3 items-center px-3 py-2 rounded-3xl bg-white'>

    
    <button className='outline-none px-4 py-1 text-white rounded-full' style={{ backgroundColor : "red"}} onClick={()=> setColor("red")}> Red</button>
    <button className='outline-none px-4 py-1 text-white rounded-full' style={{ backgroundColor : "blue"}} onClick={()=> setColor("blue")}> Blue</button>
    <button className='outline-none px-4 py-1 text-white rounded-full' style={{ backgroundColor : "olive"}} onClick={()=> setColor("olive")}> Olive</button>
    <button className='outline-none px-4 py-1 text-white rounded-full' style={{ backgroundColor : "green"}} onClick={()=> setColor("green")}> Green</button>

    </div>
      </div>
    </div>



  )
}

export default App
