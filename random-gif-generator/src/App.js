import logo from './logo.svg';
import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';



function App() {
  return (
    <div className="w-full h-full flex flex-col overflow-x-hidden">
    <div className="relative h-full w-full bg-slate-950">
      {/* Left radial gradient */}
      <div className="absolute bottom-0 left-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      
      {/* Right radial gradient */}
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
  

      {/* "RANDOM GIFS" heading */}
      <h1 className="font-bold bg-white rounded-md flex justify-center py-5 mx-7 mt-7 text-2xl">
        RANDOM GIFS
      </h1>
  
      {/* Container for Random and Tag components */}
      <div className="h-full w-full flex flex-col items-center mt-7 gap-y-12 mb-7">
        <Random />
        <Tag />
      </div>

    </div>
  </div>
  
  );
}

export default App;
