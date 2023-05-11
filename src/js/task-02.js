const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = document.querySelector("#ingredients"); 
ingredientList.append("potatoes, Mushrooms,Garlic,omato,Herbs,Condiments");

ingredients.forEach((ingredient) => {
  const ingredientElement = document.createElement("li")
  ingredientElement.classList.add("item")
  ingredientElement.textContent = ingredient;
  console.log (ingredientElement);
});