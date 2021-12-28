import React from 'react';
import withRainbowFrame from './components/withRainbowFrame';
import DoubleButton from './components/DoubleButton/DoubleButton';


function App() {

  const colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];
  const FramedDoubleButton = withRainbowFrame(colors)(DoubleButton);
  
  return (
    <>
      <DoubleButton caption1='однажды' caption2='пору' cbPressed={num => alert(num)}>
        в студеную зимнюю
      </DoubleButton>
      
      <FramedDoubleButton caption1='я из лесу' caption2='мороз' cbPressed={num => alert(num)}>
        вышел, был сильный
      </FramedDoubleButton>
    </>
  );
}

export default App;
