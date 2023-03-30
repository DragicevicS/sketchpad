const container = document.querySelector('.grid-container');
const divs = document.querySelectorAll('.grid-container');

const popup = document.querySelector('.popup');
const btns = document.querySelector('.btns');


let gridNumber = prompt("Enter grid size (min. 2, max. 100):");

btns.childNodes[1].textContent = "Current grid: " + gridNumber + "x" + gridNumber;

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
        if (divColor == 'rgb') {
          let randomColor = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
          e.target.style.backgroundColor = randomColor;
          e.target.style.borderColor = randomColor;
        } else {
          e.target.style.backgroundColor = divColor;
          e.target.style.borderColor = divColor;
        };
      });
    });
    const clear = document.querySelector('.clear');
    clear.addEventListener('click', () => {
      div.style.backgroundColor = '#bfbfbf';
      div.style.borderColor = 'black';
    });
    container.appendChild(div);
  };
};



if (gridNumber > 1 && gridNumber < 101) setGrid(gridNumber);
else location.reload();











