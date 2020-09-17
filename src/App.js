import React, { useState } from 'react';
import { LinksArray } from './Links';
console.log(LinksArray.length);

function App() {
  let [picture, setPicture] = useState(LinksArray);
  let [number, setNumber] = useState(0);

  function addPic() {
    setPicture(LinksArray[`${number}`].url);
    setNumber(number + 1);
  }

  //picture = picture.split('/').splice(0, 5).join('/') + '.png';
  return (
    <div>
      <p>
        <img src={picture} alt="yes pls" />
        <button onClick={() => addPic()}>+</button>
        <button onClick={() => addPic()}>-</button>
      </p>
    </div>
  );
}

// function App() {
//   const [picture, setPicture] = useState();
//   console.log(setPicture);
//   return (
//     <div>
//       <p>You clicked {picture} times</p>
//       <button onClick={() => setPicture(LinksArray[0])}>+</button>
//       <button onClick={() => setPicture(LinksArray[1])}>-</button>
//       <br />
//       <img src={picture} alt="yes pls" />
//     </div>
//   );
// }

export default App;
