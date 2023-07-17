const header = document.querySelector("#header");
const title = document.querySelector("#title");
const excerpt = document.querySelector("#excerpt");
const profile_img = document.querySelector("#profile_img");
const author = document.querySelector("#author");
const date = document.querySelector("#date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 3000);

function getData() {
  header.innerHTML = `<img src="./images/img.jpg" alt="programming code image" />`;
  title.innerHTML = `Content Placeholder`;
  excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit.`;
  profile_img.innerHTML = `<img src="./images/user.jpg" alt="user profile" />`;
  author.innerHTML = `Tom Ernsting`;
  date.innerHTML = `<time datetime="2020-01-01">January 1, 2020</time>`;

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
