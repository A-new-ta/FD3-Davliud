import React from 'react';
import './App.css';


function App() {

  const colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];
  const FramedDoubleButton = withRainbowFrame(colors)(DoubleButton);
  const cbPress = (num) => alert(num);

  return (
    <div>
      <DoubleButton caption1='Однажды' caption2='пору' onPress={cbPress}>
        в студеную зимнюю
      </DoubleButton>
      <FramedDoubleButton caption1='Я из лесу' caption2='мороз' onPress={cbPress}>
        , был сильный мороз
      </FramedDoubleButton>
    </div>
  );
}

export default App;
