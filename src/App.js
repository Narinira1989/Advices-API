import { useEffect, useState } from 'react';
import './App.css';
import todoImage from './todo.jpg';


function App() {

  const containerStyle = {
    backgroundImage: `url(${todoImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    
  };

const [advice, setAdvise] = useState("");

useEffect(() => {
  getAdvice()
},[])

const getAdvice = async () => {
  const response = await fetch ('https://www.boredapi.com/api/activity/');
  const data = await response.json();
  setAdvise(data.activity)
}


  return (
    <div className='App' style={containerStyle}>
      <div className='container'>
        <h1>Let's find you something to do</h1>
      </div>

      <div className='container'>
        <p>{advice}</p>
      </div>

      <div className='container'>
        <button onClick={getAdvice}>New advice</button>
      </div>
    </div>
  );
}

export default App;
