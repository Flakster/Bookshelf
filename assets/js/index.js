let myLibrary = [
/*   { title: '1984', author: 'George Orwell', pages: 325, read: false},
  { title: 'The Idiot', author: 'Fyodor Dostoyevsky',pages: 420, read: true} */
];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
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

function clearForm(){
  document.getElementById('form-title').innerHTML = '';
  document.getElementById('form-author').innerHTML = '';
  document.getElementById('form-pages').innerHTML = '';
  document.getElementById('form-read').checked = false;
}

function addBookToLibrary() {
  const title = document.getElementById('form-title').value;
  const author = document.getElementById('form-author').value;
  const pages = document.getElementById('form-pages').value;
  const read = document.getElementById('form-read').checked;
  const book = new Book(title, author, pages, read)
  myLibrary.push(book);
  localStorage.setItem("library", JSON.stringify(myLibrary));
}

function render(){
  myLibrary = JSON.parse(localStorage.getItem("library"));
  const shelf = document.getElementsByClassName('shelf')[0];
  const book = document.getElementsByClassName('book')[0];
  let newBook;
  for (let i = 0 ; i<myLibrary.length ; i += 1){
    if (i === 0){
      book.classList.remove('d-none');
      newBook = book;
    } else {
      newBook = book.cloneNode(true)
      shelf.appendChild(newBook);
    }
    newBook.children[0].innerHTML = myLibrary[i].title;
    newBook.children[1].innerHTML = myLibrary[i].author;
    newBook.children[2].innerHTML = `${myLibrary[i].pages} pages`;
    newBook.children[3].innerHTML = `Read: ${myLibrary[i].read}`;
    newBook.setAttribute('data-book-id', i);
  }
}

render();

