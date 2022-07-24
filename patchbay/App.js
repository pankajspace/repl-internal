import React from 'react';

function App() {
  const inputRef = React.useRef();

  const handleClick = () => {
    window.location.href = `https://www.google.co.in/search?q=${inputRef.current.value}`
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Submit</button>
    </>
  );
}

export default App;
