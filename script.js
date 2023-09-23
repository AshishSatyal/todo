"use strict";
const input = document.querySelector("#work");
const btn = document.querySelector(".btn");
const item = document.querySelector(".item");
let deletebtns;

function addTask() {
  let work = input.value;
  let list = document.createElement("li");
  list.textContent = work;
  item.append(list);
  input.value = "";
  deletebtns = document.createElement("button");
  deletebtns.classList.add("remove-btn");
  deletebtns.innerText = "x";
  list.append(deletebtns);
}

btn.addEventListener("click", () => {
  addTask();
});

// work on progress
