"use strict";
const input = document.querySelector("#work");
const btn = document.querySelector(".btn");
const item = document.querySelector(".item");

btn.addEventListener("click", () => {
  const work = input.value;
  const list = document.createElement("li");
  const remove = document.createElement("button");
  remove.classList.add("btn");
  remove.style.marginLeft = "5rem";
  remove.style.height = "2rem";
  remove.innerText = "X";
  list.textContent = work;
  item.append(list);
  list.append(remove);
  input.value = "";
  input.getAttribute("placeholder");
});

// work on progress
