const filterButtons = document.querySelectorAll<HTMLButtonElement>(".sidebar button");
const books = document.querySelectorAll<HTMLDivElement>(".book");

function filterBooks(department: string) {
  books.forEach((book) => {
    const bookDepartment = book.getAttribute("data-department");
    
    if (department === "all" || bookDepartment === department) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });

  filterButtons.forEach((button) => {
    // Highlight the active button
    if (button.textContent?.toLowerCase() === department) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

// Add click event listeners to buttons
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const department = button.textContent?.toLowerCase() || "all";
    filterBooks(department);
  });
});








  
