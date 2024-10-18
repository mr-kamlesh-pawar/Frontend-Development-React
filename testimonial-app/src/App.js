import logo from './logo.svg';
import './App.css';
import reviews from './data';
import Testimonial from './components/Testimonial';

function App() {
  
  return (
    
    <div className=' h-dvh w-full flex flex-col justify-center place-items-center bg-slate-300'>
      <div className='flex flex-col place-items-center'>

      <h1 className="text-black font-bold text-2xl">
      Our Testimonials
    </h1> 
    <div className='w-28 h-1 bg-purple-600 '> </div>
      </div>

      <div className='flex flex-col bg-white mt-10 w-[50%]  rounded-lg'>
      <Testimonial reviews= {reviews}/>
      </div>

   
    </div>

    
  );
}

export default App;
