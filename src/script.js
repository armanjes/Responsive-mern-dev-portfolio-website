const showBtn = document.querySelector(".show");
const hideBtn = document.querySelector(".hide");
const menuList = document.querySelector("#header nav");

showBtn.addEventListener("click", function () {
  if (showBtn.getAttribute("icon") === "mdi:menu") {
    showBtn.setAttribute("icon", "mdi:close");
    menuList.classList.add("show-menu");
  } else {
    showBtn.setAttribute("icon", "mdi:menu");
    menuList.classList.remove("show-menu");
  }
});

// footer year
const date = new Date();
document.querySelector(".year").innerHTML = date.getFullYear();
