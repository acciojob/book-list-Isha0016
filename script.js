//your JS code here. If required.
document.getElementById('submit').addEventListener('click', function(e) {
  e.preventDefault();

  // Get input values
  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  const isbn = document.getElementById('isbn').value.trim();

  // Validate inputs
  if (title === '' || author === '' || isbn === '') {
    return;
  }

  // Create a new table row
  const list = document.getElementById('book-list');
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="delete btn btn-danger btn-sm">Clear</button></td>
  `;

  // Append row to the table body
  list.appendChild(row);

  // Clear input fields
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
});

// Event delegation to delete the row when the clear/delete button is clicked
document.getElementById('book-list').addEventListener('click', function(e) {
  if (e.target.classList.contains('delete')) {
    e.target.closest('tr').remove();
  }
});