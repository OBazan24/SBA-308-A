document.addEventListener("DOMContentLoaded", () => {
  let currentPage = 1;
  const dogsPerPage = 9; // Adjust the number of dogs per page as needed

  // Initial load of dog breeds on page 1
  fetchDogs(currentPage, dogsPerPage);

  // Search function
  window.searchDogs = async () => {
    currentPage = 1;
    const searchInput = document.getElementById("searchInput");
    const searchQuery = searchInput.value.trim().toLowerCase();
    const filteredDogs = fetchDogs(currentPage, dogsPerPage, searchQuery);
    // displayDogs(filteredDogs, currentPage);
  };

  // Pagination function
  window.changePage = (direction) => {
    if (direction === "prev" && currentPage > 1) {
      currentPage--;
    } else if (direction === "next") {
      currentPage++;
    }
    const searchInput = document.getElementById("searchInput");
    const searchQuery = searchInput.value.trim().toLowerCase();

    // Fetch and display dogs for the new page
    fetchDogs(currentPage, dogsPerPage, searchQuery);
  };
});

// Function to fetch dogs for a specific page
async function fetchDogs(page, limit, breed) {
  const startIdx = (page - 1) * limit;
  const endIdx = startIdx + limit;
  let searchQuery = "";
  if (breed) {
    searchQuery = `search?q=${breed}`;
  }
  const dogs = await fetchData(`${apiUrl}/breeds/${searchQuery}`);
  const paginatedDogs = dogs.slice(startIdx, endIdx);

  displayDogs(paginatedDogs, page);
}

// Function to display dogs in the gallery
function displayDogs(dogs, currentPage) {
  const dogGallery = document.getElementById("dogGallery");
  dogGallery.innerHTML = "";

  dogs.forEach((dog) => {
    const dogCard = document.createElement("div");
    dogCard.classList.add("dogCard");
    dogCard.innerHTML = `<h3>${dog.name}</h3><img src="${dog.image.url}" alt="${dog.name}">`;
    dogGallery.appendChild(dogCard);
  });

  document.querySelector(".pagination")?.remove();
  const hidePrev = currentPage === 1;
  const hideNext = dogs.length < 9;
  const prevButton = `<button onclick="changePage('prev')">Previous</button>`;
  const nextButton = `<button onclick="changePage('next')">Next</button>`;
  const pagination = document.createElement("div");
  pagination.classList.add("pagination");
  let pagnationHtml = "";
  if (!hidePrev) {
    pagnationHtml += prevButton;
  }
  pagnationHtml += `<span>Page ${currentPage}</span>`;
  if (!hideNext) {
    pagnationHtml += nextButton;
  }
  pagination.innerHTML = pagnationHtml;
  document.body.appendChild(pagination);
}
