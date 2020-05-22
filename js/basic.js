var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    showHeader();
  } else {
    hideHeader();
  }
  prevScrollpos = currentScrollPos;
}

function showHeader() {
	document.getElementById("site-header").classList.remove("slide-top");
    document.getElementById("site-header").classList.add("slide-bottom");
}

function hideHeader() {
	document.getElementById("site-header").classList.remove("slide-bottom");
    document.getElementById("site-header").classList.add("slide-top");
}