import React from 'react';
import Btn from './components/Btn';

// import ButtonClickAction from './components/ButtonClickAction';
// import ButtonMoveAction from './components/ButtonMoveAction';


const App = () => {
  // const [clickCount, setClickCount] = React.useState(0);
  // const [moveCount, setMoveCount] = React.useState(0);

  return (
    <div className="App">
      <Btn render={(counter, setCounter) => {
        return <button className="button--cancel" onClick={() => {setCounter((val)=>val+=1)}}>Btn clicks count: {counter}</button>
      }} />

      <Btn render={(counter, setCounter) => {
        return <button className="button--accept" onMouseOut={() => {setCounter((val)=>val+=1)}}>Mouse out count: {counter}</button>
      }} />

     {/* <ButtonClickAction>
      <button className="button--cancel" onClick={() => {setClickCount((val)=>val+=1)}}>Btn clicks count: {clickCount}</button>
     </ButtonClickAction>
     <ButtonMoveAction>
      <button className="button--accept" onMouseOut={() => {setMoveCount((val)=>val+=1)}}>Mouse out count: {moveCount}</button>
     </ButtonMoveAction> */}
     
    </div>
  );
}

export default App;
