// Scroll Top
let scrollUp = document.getElementById("scroll-top");
window.onscroll = function () {
  if (scrollY > 1000) {
    scrollUp.style.right = "20px";
  } else {
    scrollUp.style.right = "-70px";
  }
};
scrollUp.onclick = () => {
  window.scrollTo({
    top: 0,
  });
};
