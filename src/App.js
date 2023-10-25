
import './App.scss';
import Drum from './components/drum';
import {  useSelector } from 'react-redux';

function App() {

  const pressedKeys = useSelector((state) => state.pressedKeys);
  const displayText = useSelector((state) =>  state.display);
  
  return (
    <div className="App">
      <div id="drum-machine">
        <Drum pressedKeys={pressedKeys}></Drum>
        <p id="display">{displayText}</p>
      </div>    

    </div>
  );
}

export default App;
