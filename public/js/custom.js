$(() => {
  $(window).scroll(() => {
    if ($(this).scrollTop() > 50) {
      $('.main-header').addClass('main-header-changed');
    }
    if ($(this).scrollTop() < 50) {
      $('.main-header').removeClass('main-header-changed');
    }
  });
});
