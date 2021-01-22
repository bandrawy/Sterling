function myTest() {

  console.log("test");
  $('.protfolio-items').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
  });
  $('.protfolio-menu ul li').click(function () {
    $('.protfolio-menu ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.protfolio-items').isotope({
      filter: selector
    });
    return false;
  });
}
