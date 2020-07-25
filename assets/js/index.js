let myLibrary = [
  { title: '1984', author: 'George Orwell', pages: 325, read: false},
  { title: 'The Idiot', author: 'Fyodor Dostoyevsky',pages: 420, read: true}
];

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

function render(){
  for (let i = 0; i < myLibrary.length ; i += 1){
    console.log(myLibrary[i]);
  }
}
 
render();
