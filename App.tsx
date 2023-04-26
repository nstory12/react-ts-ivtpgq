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
      <input type="text" ref={inputRef} />
      <button onClick={handlseClick}>Focus Input BT</button>

      <button onClick={togglePopup}>Textbox Value</button>
      {/* {showPopup && <h2>TEST</h2>} */}
    </div>
  );
}
