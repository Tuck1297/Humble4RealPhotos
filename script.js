
const top_nav = document.querySelector('.top_nav');


window.onload = function() {
  removeHeaderAnimation();
  // event listener that adds timer to automatically rotate images
};

window.onscroll = function() {headerStickFunction()};

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


// still left to finish

// format of gallery of 6 images --- or more
// about me information -- add animation link to instagram here
// once all formatting is done then update the header links for where to scroll to
// figure out how to fix width scrolling problem --- and div spacing problem....

// need photo for about me page -- use one of facebook profile photos - maybe grand teton photo
// update video links to videos that I have uploaded to my youtube page
// finialize decision for color scheme