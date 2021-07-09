import React from 'react';
// import Btn from './components/Btn';
import ButtonClickAction from './components/ButtonClickAction';
import ButtonMoveAction from './components/ButtonMoveAction';


const App = () => {

  return (
    <div className="App">
      <ButtonClickAction />
      <ButtonMoveAction />
      {/* <Btn render={(counter, setCounter) => {
        return <button className="button--cancel" onClick={() => {setCounter((val)=>val+=1)}}>Btn clicks count: {counter}</button>
      }} />

      <Btn render={(counter, setCounter) => {
        return <button className="button--accept" onMouseOut={() => {setCounter((val)=>val+=1)}}>Mouse out count: {counter}</button>
      }} /> */}
     
    </div>
  );
}

export default App;
