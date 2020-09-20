import { useState } from 'react';
import { LinksArray } from './links';
import { Download } from './download';
import { Button, InputFields } from './button_inputs';
/** @jsx jsx */
import { jsx, Global } from '@emotion/core';
import { words, picture, globalStyles } from './style';
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
    <div>
      <Global styles={globalStyles} />
      <img src={finishedLink} alt="meme" css={picture} />
      <h1 css={words}>
        Picture {number} out of {array.length}
      </h1>
      <div>
        <InputFields
          value={firstInput}
          onChange={(e) => setfirstInput(e.target.value)}
        />
        <br />
        <InputFields
          value={secondInput}
          onChange={(e) => setsecondInput(e.target.value)}
        />
        <br />
        <Button onClick={() => plusPic()} Sign={'+'} />
        <Button onClick={() => minusPic()} Sign={'-'} />
      </div>
      <Download url={finishedLink} />
    </div>
  );
}

export default PictureSwitcher;
