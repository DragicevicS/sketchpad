const container = document.querySelector('.grid-container');
let gridNumber = 2;
let divWidth = 600 / gridNumber;
let divHeight = 600 / gridNumber;

for (let i=1; i <= gridNumber * gridNumber; i++) {
  const div = document.createElement('div');
  div.classList.add(i);
  div.style.minWidth = divWidth + 'px';
  div.style.minHeight = divHeight + 'px';
  container.appendChild(div);
};