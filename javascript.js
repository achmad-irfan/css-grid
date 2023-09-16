const toggle = document.getElementsByClassName("menu-toggle")[0],
  menu = document.querySelector("ul.menu-list");

toggle.addEventListener("click", function () {
  menu.classList.toggle("slide");
  console.log("sjsj");
});
