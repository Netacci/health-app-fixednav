const topScroll = document.querySelector(".top-scroll");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    topScroll.classList.add("activescroll");
  } else {
    topScroll.classList.remove("activescroll");
  }
});

function activeLinkControl() {
  $(".navbar-nav .nav-item a").click(function () {
    $(".nav-item").removeClass("active");
    $(this).closest(".nav-item").addClass("active");
  });
}
activeLinkControl();
