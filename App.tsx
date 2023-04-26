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
  };

  return (
    <div className="App">
      <h1> Ref Example</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handlseClick}>Focus Input BT</button>

      <button onClick={togglePopup}>팝업 열기</button>
      {showPopup && <h2>TEST</h2>}
    </div>
  );
}
