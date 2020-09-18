import React, { useState } from 'react';
import { LinksArray } from './links';
import { Download } from './download';
import { Button, InputFields } from './button_inputs';

let Array = [];

for (let i = 0; i < LinksArray.length; i++) {
  Array.push(LinksArray[i].url.split('/').splice(0, 5).join('/'));
}
export function PictureSwitcher(props) {
  let [picture, setPicture] = useState(
    'https://api.memegen.link/images/success',
  );
  let [number, setNumber] = useState(0);
  const [firstInput, setfirstInput] = useState('');
  const [secondInput, setsecondInput] = useState('');

  function plusPic() {
    setPicture(Array[`${number}`]);
    setNumber(number + 1);
  }
  function minusPic() {
    setPicture(Array[`${number}`]);
    setNumber(number - 1);
  }
  let finishedLink = picture + '/' + firstInput + '/' + secondInput + '.png';
  console.log(finishedLink);

  return (
    <>
      <img src={finishedLink} alt="yes pls" />
      <h1>
        Picture {number} out of {Array.length}
      </h1>
      <div>
        <Button onClick={() => plusPic()} Sign={'+'} />
        <Button onClick={() => minusPic()} Sign={'-'} />
        <InputFields
          value={firstInput}
          onChange={(e) => setfirstInput(e.target.value)}
        />
        <InputFields
          value={secondInput}
          onChange={(e) => setsecondInput(e.target.value)}
        />
      </div>
      <Download url={finishedLink} />
    </>
  );
}

export default PictureSwitcher;
