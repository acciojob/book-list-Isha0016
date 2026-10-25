//your JS code here. If required.
document.getElementById('submit').addEventListener('click', function(e) {
  e.preventDefault();

  // Get input values
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  // Validate inputs
  if (title === '' || author === '' || isbn === '') {
    alert('Please fill in all fields');
    return;
  }

  // Create a new table row element
  const list = document.getElementById('book-list');
  const row = document.createElement('tr');

  // Insert columns and the delete button with class="delete"
  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
  `;

  // Append the row to the table body
  list.appendChild(row);

  // Clear input fields after submission
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
});

// Event listener for deleting a row
document.getElementById('book-list').addEventListener('click', function(e) {
  e.preventDefault();
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.parentElement.remove();
  }
});