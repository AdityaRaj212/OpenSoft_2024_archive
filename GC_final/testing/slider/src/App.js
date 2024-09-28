import React from 'react';
import Slider from './slider';

const App = () => {
  const slides = ['Slide 1', 'Slide 2', 'Slide 3']; // Add your slide content here

  return (
    <div>
      <h1>React Slider</h1>
      <Slider slides={slides} />
    </div>
  );
};

export default App;
