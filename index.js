const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

listItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    hiddenAllContents();
    hiddenAllItems();
    item.classList.add("active");
    contents[index].classList.add("show");
  });
});

const hiddenAllContents = () => {
  contents.forEach((content) => content.classList.remove("show"));
};

const hiddenAllItems = () => {
  contents.forEach((content) => content.classList.remove("active"));
};
