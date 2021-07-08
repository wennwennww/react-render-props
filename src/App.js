import React from 'react';
import SubmitBtn from './components/SubmitBtn';
import CancelBtn from './components/CancelBtn';
import ExportBtn from './components/ExportBtn';
// import Btn from './components/Btn';

const App = () => {


  return (
    <div className="App">
      <SubmitBtn />
      <CancelBtn />
      <ExportBtn />

      {/* <Btn render={() => {
        return <button>submit</button>
      }} />
      <Btn render={() => {
        return <div style={{
          width: 100,
          height: 50,
          display: 'flex',
          justifyContent: 'center',
          color: 'white',
          backgroundColor: 'red',
          alignItems: 'center',
          cursor: 'pointer',
        }}>Cancel</div>
      }} />
      <Btn render={() => {
        return <button>export</button>
      }} /> */}
    </div>
  );
}

export default App;
