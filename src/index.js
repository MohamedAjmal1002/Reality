import './scss/main.scss';
// import './icons/arrow-icon.svg';
// import './icons/arrow-right.svg';
// import './icons/bed-icon.svg';
// import './icons/chevron-icon.svg';
// import './icons/search-icon.svg';
// import './icons/shower-icon.svg';

var ajax = new XMLHttpRequest();
ajax.open("GET", "./spritemap.svg", true);
ajax.send();
ajax.onload = function(e) {
  var div = document.createElement("div");
  div.innerHTML = ajax.responseText;
  document.body.insertBefore(div, document.body.childNodes[0]);
  div.classList.add('hide-svg');
}

import './reality'