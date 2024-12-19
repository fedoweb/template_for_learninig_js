const text = document.getElementById('text');

//console.log(text.innerText = 'new text');
//console.log(text.outerText = 'new tag');
//console.log(text.innerHTML = 'new inner');
//console.log(text.outerHTML = '<p>new tag and text</p>');


const list = document.querySelector('ul');
const listElements = document.getElementsByTagName('li');

//listElements[0].insertAdjacentHTML('beforebegin', '<li>zero</li>');
//listElements[2].insertAdjacentHTML('beforeend', '<b>(2)</b>');

const liZero = document.createElement('li');
liZero.textContent = 'zero';

const liEnd = document.createElement('li');
liEnd.textContent = 'end';



list.insertBefore(liZero, list.firstElementChild);
list.appendChild(liEnd);

const newText = document.createTextNode(' + new text');

//liEnd.append(newText);

//liEnd.remove();

const liNew = document.createElement('li');
liNew.textContent = 'for';

list.replaceChild(liNew, liEnd);


document.body.appendChild(list.cloneNode(true));


