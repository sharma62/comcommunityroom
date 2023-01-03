import React from 'react';
import './App.css';
import Greeting from './componenets/Greeting';
import DigitalClock from './componenets/DigitalClock';
 
 
function App() {


  const app_name = 'comCommunityRoom.org';
  return (
    <>  
      <Greeting name={app_name} clock={<DigitalClock/>}  />
      
    </>
  );
}

export default App;

