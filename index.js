import { add } from "./add.rs";

const form = document.getElementById("form");
const a = document.getElementById("a");
const b = document.getElementById("b");
const output = document.getElementById("output");

form.addEventListener("submit", e => {
  e.preventDefault();

  output.value = add(a.value, b.value);
});
