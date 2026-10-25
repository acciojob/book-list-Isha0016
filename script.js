//your JS code here. If required.
const bookForm = document.querySelector("#book-form");
const titleInput = document.querySelector("#id-title");
const authorInput = document.querySelector("#id-author");
const isbnInput = document.querySelector("#id-isbn");
const bookList = document.querySelector("#book-list");
const clearButton = document.querySelector("#id-clear");

bookForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const isbn = isbnInput.value.trim();

  if (!title || !author || !isbn) {
    alert("Please fill in all fields");
    return;
  }

  const row = document.createElement("tr");

  [title, author, isbn].forEach(value => {
    const cell = document.createElement("td");
    cell.textContent = value;
    row.appendChild(cell);
  });

  const deleteCell = document.createElement("td");
  const deleteButton = document.createElement("button");

  deleteButton.textContent = "X";
  deleteButton.type = "button";
  deleteButton.className = "delete";

  deleteButton.addEventListener("click", function () {
    row.remove();
  });

  deleteCell.appendChild(deleteButton);
  row.appendChild(deleteCell);
  bookList.appendChild(row);

  bookForm.reset();
});

clearButton.addEventListener("click", function () {
  bookList.innerHTML = "";
});