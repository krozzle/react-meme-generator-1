import React from 'react';
export function Button(props) {
  return (
    <>
      <button onClick={props.onClick}>{props.Sign}</button>
    </>
  );
}

export function InputFields(props) {
  return (
    <>
      <input type="text" value={props.firstInput} onChange={props.onChange} />
    </>
  );
}
