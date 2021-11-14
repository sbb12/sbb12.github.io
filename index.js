const portfolio_dir = "/assets/img/portfolio/";
let imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

const slideshow_img_el = document.getElementById("slideshow-img");
let slideshow_i = 0;

let slideshow_pause = false;

setInterval(function () {
  if (!slideshow_pause) {
    img_url = portfolio_dir + imgs[slideshow_i];
    slideshow_img_el.style.backgroundImage = "url(" + img_url + ")";
    slideshow_i += 1;

    if (slideshow_i >= imgs.length) {
      slideshow_i = 0;
    }
  }
}, 5000);

function slideshow_stop() {
  slideshow_pause = true;
}
function slideshow_start() {
  slideshow_pause = false;
}

function slideshow_next() {
  slideshow_i += 1;
  if (slideshow_i >= imgs.length) {
    slideshow_i = 0;
  }
  img_url = portfolio_dir + imgs[slideshow_i];
  slideshow_img_el.style.backgroundImage = "url(" + img_url + ")";
}
function slideshow_prev() {
  slideshow_i -= 1;
  if (slideshow_i < 0) {
    slideshow_i = imgs.length - 1;
  }
  img_url = portfolio_dir + imgs[slideshow_i];
  slideshow_img_el.style.backgroundImage = "url(" + img_url + ")";
}

function scroll_to(element_id) {
  console.log(element_id);
  element_id.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}
