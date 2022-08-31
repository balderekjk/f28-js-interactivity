let message = document.querySelector('#message');
const form = document.querySelector('form');
let inputField = document.querySelector('input');
let ul = document.querySelector('ul');

const addMovie = (event) => {
  event.preventDefault();
  let movie = document.createElement('li');
  let movieTitle = document.createElement('span');
  movieTitle.textContent = inputField.value;
  movieTitle.addEventListener('click', crossOffMovie);
  movie.appendChild(movieTitle);
  let deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  movie.appendChild(deleteBtn);
  ul.appendChild(movie);
  message.textContent = 'Movie added to list!';
  deleteBtn.addEventListener('click', deleteMovie);
  inputField.value = '';
};

const crossOffMovie = (event) => {
  event.preventDefault();
  event.target.classList.toggle('checked');
  if (event.target.classList.contains('checked')) {
    message.textContent = 'Movie watched!';
  } else {
    message.textContent = 'Movie added back!';
  }
};

const deleteMovie = (event) => {
  event.preventDefault();
  event.target.parentNode.remove();
  message.textContent = 'Movie deleted!';
};

form.addEventListener('submit', addMovie);
