document.addEventListener("DOMContentLoaded", () => {
  const favoritesList = document.getElementById("favorites");

  function addToFavorites(animeTitle) {
    const favoriteItem = document.createElement("li");
    favoriteItem.textContent = animeTitle;
    favoritesList.appendChild(favoriteItem);
  }

  const buttons = document.querySelectorAll(".anime-item button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const animeTitle = button
        .closest(".anime-item")
        .querySelector("h3").textContent;
      addToFavorites(animeTitle);
    });
  });

  let hitCounter = parseInt(localStorage.getItem("hit-counter")) || 0;
  document.getElementById("hit-counter").textContent = ++hitCounter;
  localStorage.setItem("hit-counter", hitCounter);
});
