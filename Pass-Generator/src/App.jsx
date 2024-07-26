import { useState, useCallback, useEffect, useRef} from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow]= useState(false)
  const [charAllow, setCharAllow]= useState(false)

  const [pass, setPass]= useState("");

//refhook
 const PassRef= useRef(null)
  const PasswordGen = useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numAllow) str+="0123456789";
    if(charAllow) str+="!@#$%^&*()_+-=[]{}|;:'<>?.,";

    for(let i=1; i<=length; i++){
      let char= Math.floor( Math.random() * str.length+1);

      pass+= str.charAt(char)

    }
    setPass(pass)

  }, [length, numAllow, charAllow,setPass])

  useEffect(()=> {
    PasswordGen()}, [length, numAllow, charAllow, PasswordGen])

    const copypass= useCallback(()=>{
      PassRef.current?.select()
      window.navigator.clipboard.writeText(pass)},[pass] )
  return (
    
    <div className=" w-full h-screen flex place-items-center justify-center">
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-1 text-orange-500 bg-gray-800'>
    <h1 className=' mt-3 text-2xl text-center text-white   '>Password Generator</h1>

    <div className="flex  rounded-lg overflow-hidden ">


      <input type="text" value={pass} className='outline-none w-full py-1 px-3 my-7 rounded-l-lg text-xl' placeholder='Password' readOnly ref={PassRef}/>

      <button className="bg-orange-500 outline-none w-24 py-1 px-3 my-7 rounded-r-lg text-xl text-white text-center hover:bg-amber-600" onClick={copypass}>Copy</button>

    </div>
      <div className="flex text-sm gap-x-4 mb-3">
        <div className="flex items-center gap-x-1">

          <input type="range" 
          min={6}
          max={20}
          value={length}
          className='
          cursor-pointer' 
          onChange={(e)=>{setLength(e.target.value)}}/>
          <label className='font-medium '> Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-1">

<input type="checkbox" 
defaultChecked={numAllow}
id='numinput'
className='
cursor-pointer' 
onChange={()=>{
  setNumAllow((prev)=> !prev)}}/>
<label className='font-medium '> Numbers</label>
</div>

<div className="flex items-center gap-x-1">

<input type="checkbox" 
defaultChecked={charAllow}
id='chinput'
className='
cursor-pointer' 
onChange={()=>{
  setCharAllow((prev)=> !prev)}}/>
<label className='font-medium  '> Characters</label>
</div>

      </div>
    </div>
    
    </div>
  )
}

export default App
