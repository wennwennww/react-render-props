import React from 'react';

const Btn = (props) => {
  const [counter, setCounter] = React.useState(0);

  return(
    <>{props.render(counter, setCounter)}</>
  )
}

export default Btn;