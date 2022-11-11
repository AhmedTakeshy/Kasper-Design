$(document).ready(function () {
  const btnToTop = $(".toTop");
  $(window).on("scroll", scrollToTop);
  $(btnToTop).on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });

  function scrollToTop() {
    if ($(window).scrollTop() > 100) {
      $(btnToTop).fadeIn();
    } else {
      $(btnToTop).fadeOut();
    }
  }
});
