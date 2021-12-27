import React from 'react';
import './App.css';


function App() {

  const colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];
  const FramedDoubleButton = withRainbowFrame(colors)(DoubleButton);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
