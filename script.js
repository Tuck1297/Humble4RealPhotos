
const top_nav = document.querySelector('.top_nav');


window.onload = function () {
  removeHeaderAnimation();
  // scroll(0);
  setTimeout(() => scroll(0), 1000);
  // event listener that adds timer to automatically rotate images
};

window.onscroll = function () { headerStickFunction(); };

var header = document.getElementById("top_nav");
var sticky = header.offsetTop;

function headerStickFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    top_nav.classList.remove('refresh');
  } else {
    header.classList.remove("sticky");
    top_nav.classList.add('refresh');
  }
}

function removeHeaderAnimation() {
  // remove the load css settings from top_nav after 1000 milliseconds
  setTimeout(() => top_nav.classList.remove('load'), 1000);
}

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex - 1].className += " active";
}

var scrolled_loaded = false;
var top_of_contactform = 0;
var top_of_aboutme = 0;
var top_of_timelapse = 0;
var top_of_worksgallery = 0;
// scroll(0);
function scroll(num) {
  if (scrolled_loaded != true) {
    top_of_contactform = document.getElementById('contact_form').getBoundingClientRect().top;
    top_of_aboutme = document.getElementById('about_me').getBoundingClientRect().top;
    top_of_timelapse = document.getElementById('timelapse').getBoundingClientRect().top;
    top_of_worksgallery = document.getElementById('works_gallery').getBoundingClientRect().top;
    // console.log(top_of_worksgallery, top_of_timelapse, top_of_aboutme, top_of_contactform);
    scrolled_loaded = true;
  }
  if (num == 1) {
    $('html, body').animate({ scrollTop: top_of_worksgallery }, 1000);
    // console.log(top_of_worksgallery, top_of_timelapse, top_of_aboutme, top_of_contactform);
  }
  else if (num == 2) {
    $('html, body').animate({ scrollTop: top_of_timelapse }, 1000);
    // console.log(top_of_worksgallery, top_of_timelapse, top_of_aboutme, top_of_contactform);

  }
  else if (num == 3) {
    $('html, body').animate({ scrollTop: top_of_aboutme }, 1000);
    // console.log(top_of_worksgallery, top_of_timelapse, top_of_aboutme, top_of_contactform);
  }
  else if (num == 4) {
    $('html, body').animate({ scrollTop: top_of_contactform }, 1000);
  }
}

// window.addEventListener("resize", () => {
  // $('html, body').animate({scrollTop: 0}, 1000);
  // scrolled_loaded = true; 
  // scroll(0);
// })

