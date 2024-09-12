const showBtn = document.querySelector(".show");
const hideBtn = document.querySelector(".hide");

const menuList = document.querySelector("#header nav");
console.log(showBtn);

showBtn.addEventListener("click", function () {
  if (showBtn.getAttribute("icon") === "mdi:menu") {
    showBtn.setAttribute("icon", "mdi:close");
    menuList.classList.add("show-menu");
    menuList.classList.remove("hide-menu");
  } else {
    showBtn.setAttribute("icon", "mdi:menu");
    menuList.classList.add("hide-menu");
    menuList.classList.remove("show-menu");
  }
});
