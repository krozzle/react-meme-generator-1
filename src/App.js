import React, { useState } from 'react';
import { LinksArray } from './Links';
console.log(LinksArray.length);

function Dope(props) {
  return <h1>Helloe {props.name}</h1>;
}
function Inputs() {
  const [firstInput, setfirstInput] = useState('');
  const [secondInput, setsecondInput] = useState('');
  return (
    <>
      <input
        type="text"
        value={firstInput}
        onChange={(e) => setfirstInput(e.target.value)}
      />
      <input
        type="text"
        value={secondInput}
        onChange={(e) => setsecondInput(e.target.value)}
      />
    </>
  );
}

function PictureSwitcher() {
  let [picture, setPicture] = useState(
    'https://api.memegen.link/images/elf/_/YOU_SIT_ON_A_THRONE_OF_LIES.png',
  );
  let [number, setNumber] = useState(0);

  function plusPic() {
    setPicture(LinksArray[`${number}`].url);
    setNumber(number + 1);
  }
  function minusPic() {
    setPicture(LinksArray[`${number}`].url);
    setNumber(number - 1);
  }
  return (
    <div>
      <p>
        <img src={picture} alt="yes pls" />
        <button onClick={() => plusPic()}>+</button>
        <button onClick={() => minusPic()}>-</button>
      </p>
      <Inputs />;
      <Dope name="hans" />
    </div>
  );
}

export default PictureSwitcher;
