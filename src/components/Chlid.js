import React from 'react';

const SharedComponent = (props) => {
  
    return (
      <div>
        {props.render()}
      </div>
    );
  
}

export default SharedComponent;