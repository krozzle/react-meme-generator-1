import React, { useState, useEffect } from 'react';
import getApiAndTransform from './links';
import { Download } from './download';
import { Button, InputFields } from './button_inputs';

function App() {
  const [data, setData] = useState({ hits: [] });

  useEffect(async () => {
    const result = await getApiAndTransform();

    setData(result.data);
  }, []);
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
