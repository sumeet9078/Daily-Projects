

let search = document.querySelector(".search");
let close = document.querySelector(".close");
let searchWrapper = document.querySelector(".search-wrapper");

search.addEventListener("click", () => {
    searchWrapper.classList.add("active");
});

close.addEventListener("click", () => {
    searchWrapper.classList.remove("active");
});