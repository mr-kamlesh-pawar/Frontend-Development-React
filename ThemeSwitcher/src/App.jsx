
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import CardNew from './components/CardNew'
import ThemeBtn from './components/ThemeBtn'



function App() {

const [themeMode, setThemeMode] = useState("light")

const LightTheme=()=>{
  setThemeMode("light");
  document.documentElement.classList.remove('dark');

}
const darkTheme=()=>{
  setThemeMode("dark");
  document.documentElement.classList.add('dark');
  
}

//actual chage in theme
useEffect(()=>{
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)
},[themeMode])

  return (
    <ThemeProvider value={{themeMode, LightTheme,darkTheme}}>
      
     
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* themeButton */}
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                            {/* card */}
                            <CardNew/>
                    </div>
                </div>
            </div>



            </ThemeProvider>

    
  )
}

export default App
