const categoriesItemsEls = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItemsEls.length}`);

categoriesItemsEls.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
