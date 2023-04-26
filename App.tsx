import * as React from 'react';
import './style.css';

export default function App() {
  const inputRef = React.useRef(null);
  const [showPopup, setShowPopup] = React.useState(false);

  const handlseClick = () => {
    inputRef.current.focus();
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
    alert(`Text box의 값: ${inputRef.current.value}`); // Popup으로 값 출력
  };

  return (
    <div className="App">
      <h1> Ref Example</h1>
      <h1>
        <input type="text" ref={inputRef} />
        <button onClick={handlseClick}>FocusInputBT</button>
        <button onClick={togglePopup}>TextBoxValue</button>
      </h1>

      {showPopup && <h2>{inputRef.current.value}</h2>}
    </div>
  );
}
