import React from 'react';

export function Download(props) {
  function happy() {
    var filename = props.url
      .substring(props.url.lastIndexOf('/') + 1)
      .split('?')[0];
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function () {
      var a = document.createElement('a');
      a.href = window.URL.createObjectURL(xhr.response);
      a.download = filename;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
    };
    xhr.open('GET', props.url);
    xhr.send();
  }
  return (
    <>
      <button onClick={happy}>download</button>
    </>
  );
}
