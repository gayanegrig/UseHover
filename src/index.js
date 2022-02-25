import React from 'react';
import ReactDOM from 'react-dom';
import useHover from './use-hover';

function App() {
  const [hoverRef, isHovered] = useHover();

  return (
    <div
      ref={hoverRef}
      style={{
        color: 'pink',
        padding: '8rem',
        width: '12rem',
        textAlign: 'center',
        fontSize: '15rem',
        backgroundColor: isHovered ? '#0ca0fb' : '#4f8e40'
      }}
    >
      {isHovered ? 'hi' : 'by'}
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
