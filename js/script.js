$(document).ready(function(){
  $('.images').slick({
      dots: true,
  infinite: true,
  arrows:false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1325,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 935 ,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});
  $('.header-burger').click(function(event){
    $('.header-burger,.header-menu,.title-icon,.form-upper,.menu-text,.header-body').toggleClass('active');
    $('body').toggleClass('lock');
  });

});