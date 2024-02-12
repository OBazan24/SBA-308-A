// Function to display dogs in the gallery
function displayDogs(dogs) {
  const dogGallery = document.getElementById('dogGallery');
  dogGallery.innerHTML = '';

  dogs.forEach((dog) => {
    const dogCard = document.createElement('div');
    dogCard.classList.add('dogCard');
    dogCard.innerHTML = `<h3>${dog.name}</h3><div><img src="${dog.image.url}" alt="${dog.name}"></div>`;
    dogGallery.appendChild(dogCard);
  });
}
