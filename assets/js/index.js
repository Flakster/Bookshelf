let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = title
  this.pages = pages
  this.read = read
}

function addBookToLibrary() {

}

function toggleForm(action) {
  const screen = document.getElementsByClassName('shadow')[0];
  const form = document.getElementsByClassName('pop')[0];
  if (action === 'show'){
    screen.classList.remove('d-none');
    form.classList.remove('d-none');
  }
  else {
    screen.classList.add('d-none');
    form.classList.add('d-none');
  }
}

