import React, { useState } from 'react';
import { LinksArray } from './links';
import { Download } from './download';
import { Button, InputFields } from './button_inputs';

let array = [];

for (let i = 0; i < LinksArray.length; i++) {
  array.push(LinksArray[i].url.split('/').splice(0, 5).join('/'));
}
export function PictureSwitcher(props) {
  let [number, setNumber] = useState(0);
  const [firstInput, setfirstInput] = useState('');
  const [secondInput, setsecondInput] = useState('');

  function plusPic() {
    setNumber(number + 1);
    setfirstInput('');
  }
  function minusPic() {
    setNumber(number - 1);
  }
  if (number < 0) {
    number = 137;
  }
  if (number > 137) {
    number = 0;
  }
  console.log(number);
  let finishedLink =
    array[number] + '/' + firstInput + '/' + secondInput + '.png';

  return (
    <>
      <img src={finishedLink} alt="yes pls" />
      <h1>
        Picture {number} out of {array.length}
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
