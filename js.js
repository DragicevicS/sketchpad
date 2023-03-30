const container = document.querySelector('.grid-container');
const divs = document.querySelectorAll('.grid-container');

const popup = document.querySelector('.popup');


let gridNumber = prompt("Enter grid size (min. 2, max. 100):");

popup.addEventListener('click', () => {
  location.reload();
});

let divWidth = 600 / gridNumber;
let divHeight = 600 / gridNumber;

let color = document.querySelectorAll('.color');
let divColor = 'black';
color.forEach((color) => {
  color.addEventListener('click', () => {
    divColor = color.getAttribute('id');
  });
});

function setGrid(num) {
  for (let i=1; i <= num * num; i++) {
    const div = document.createElement('div');
    div.classList.add(i);
    div.style.minWidth = divWidth + 'px';
    div.style.minHeight = divHeight + 'px';
    div.style.backgroundColor = '#bfbfbf'
    divs.forEach((divs) => {
      divs.addEventListener('mouseover', e => {
        e.target.style.backgroundColor = divColor ;
      });
    });
    const clear = document.querySelector('.clear');
    clear.addEventListener('click', () => {
      div.style.backgroundColor = '#bfbfbf';
    });
    container.appendChild(div);
  };
};

if (gridNumber > 1 && gridNumber < 101) setGrid(gridNumber);
else location.reload();











