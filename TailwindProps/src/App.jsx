import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Card.jsx'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card username="Kamlesh" photo="https://img.freepik.com/free-photo/young-handsome-caucasian-man-wearing-glasses-looking-camera-isolated-olive-green-background-with-copy-space_141793-77922.jpg" Des="Doctor, Pune" para="Dr. Aisha Khan is a leading expert in earthquake prediction using AI. With over 15 years of experience, she has developed groundbreaking models that enhance early warning systems. Dr. Khan's research focuses on integrating geophysical data with machine learning techniques."/>
      <br /><br /><br />
      <Card username="Rahul" photo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/800px-Outdoors-man-portrait_%28cropped%29.jpg" Des="Doctor, Pune" para="Dr. Emily Rogers is renowned for her work in flood prediction and management. Her extensive research has led to the creation of advanced algorithms that predict flooding with high accuracy. Dr. Rogers collaborates with international organizations to enhance global flood preparedness."/>
      <br /> <br /><br />
      <Card username="Suyash" photo="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" Des="Doctor, Pune" para="John Matthews is a senior data scientist specializing in cyclone forecasting. He has a decade of experience in developing predictive models that help mitigate the impact of severe weather events. John is dedicated to improving disaster response strategies through innovative AI solutions."/>
      <br /> <br /><br />
      <Card username="Vighnesh" photo="https://img.freepik.com/premium-photo/portrait-handsome-african-american-man-sweater_1098072-610.jpg" Des="Doctor, Pune" para="Michael Lee is a software engineer with a passion for AI-driven natural disaster management. He has contributed to several projects that leverage AI to predict and respond to natural disasters. Michael's expertise lies in developing user-friendly platforms for disaster risk reduction."/>
      
    </>
  )
}

export default App
