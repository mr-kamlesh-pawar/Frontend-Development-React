import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [formData, setFormData] =useState(
    {

      firstName:"",
      lastName:"",
      email:"" ,
      address: "" ,
      isVisible: true,
      mode:"",
      favCar:""

    
    }
  
  
  );
 
  

  function changeHandler(event){
    const {name, value, checked, type}= event.target;

      setFormData(prevFormData=>{
        return{
          ...prevFormData,
          [name]: type=== "checkbox" ? checked : value
        }

      });
  }

  function submitHandler(event){
event.preventDefault();
console.log("Pronting Data: ");
console.log(formData);


  }

  return (
    <div className="App">
     <form onSubmit={submitHandler}>
     <br/>
     <br/>
     <label htmlFor='firstName'>Enter Your First Name</label> <br></br>
      <input 
      type="text" 
      placeholder='Enter Your First Name' 
      name='firstName'
      onChange={changeHandler}
      value={formData.firstName}
      ></input>

     <br/>
     <br/>
     <label htmlFor='lastName'>Enter Your Last Name</label> <br></br>
      <input 
      type="text" 
      placeholder='Enter Your Last Name' 
      name='lastName'
      onChange={changeHandler}
      value={formData.lastName}
      ></input>

<br/>
<br/>
<label htmlFor='email'>Enter Your Email</label> <br></br>
      <input 
      type="email" 
      placeholder='Enter Your Email' 
      name='email'
      onChange={changeHandler}
      value={formData.email}
      ></input>


<br/>
<br/>
<label htmlFor='address'>Enter Your Address</label> <br></br>
      <input 
      type="text" 
      placeholder='Enter Your Address' 
      name='address'
      onChange={changeHandler}
      value={formData.address}
      ></input>


<br/>
<br/>
<label htmlFor='isVisible'>Am I Visible : </label> 
      <input 
      type="checkbox" 
      name='isVisible'
      onChange={changeHandler}
      checked={formData.isVisible}
      ></input>



<br/>
<br/>

<fieldset>
  <legend>
    Which Mode 

  </legend>


  <input 
      type="radio" 
      name='mode'
      onChange={changeHandler}
      checked={formData.mode == "Online"}
      value="Online"
      id='Online'

      ></input>
      <label htmlFor='Online'>Online </label>  <br/> 



      <input 
      type="radio" 
      name='mode'
      onChange={changeHandler}
      checked={formData.mode == "Offline"}

      value="Offline"
      id='Offline'
      ></input>
       <label htmlFor='Offline'>Offline </label>  <br/> 


</fieldset>



<label htmlFor='favCar'>Your Fav Car </label>  <br/> 

<select
name='favCar'
id='favCar'
onChange={changeHandler}
value={formData.favCar}
>

  <option value=""> Select</option>
  <option value="Tharr"> Thaar</option>
  <option value="Scorpio"> Scorpio</option>
  <option value="Defender"> Defender</option>
</select>

<br/>
<br/>

{/* <input type='submit' value="Submit"></input> */}
      
<button >
  Submit
</button>

      </form>
    </div>
  );
}

export default App;
