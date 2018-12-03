var dropDown = $('.dropdown-menu');
var item = $('.item');

item.mouseenter(function(){
  $(this).children('.dropdown-menu').show();
});

item.mouseleave(function(){
  $(this).children('.dropdown-menu').hide();
});

//slider

$('.container-slider .fas').click(function(){

  if ($(this).hasClass('fa-angle-right')) {

    vaiAvanti();

  } else {
    vaiIndietro();
  }

});


function vaiIndietro() {
  var immagineAttuale = $('.slider img.active');

  immagineAttuale.removeClass('active');

  if (immagineAttuale.prev('img').length == 1) {
    immagineAttuale.prev('img').addClass('active');
  } else {
    $('.slider img:last-child').addClass('active');
  }

}

function vaiAvanti() {

  var immagineAttuale = $('.slider img.active');

  immagineAttuale.removeClass('active');

  if (immagineAttuale.next('img').length == 1) {
    immagineAttuale.next('img').addClass('active');
  } else {
    $('.slider img:first-child').addClass('active');
  }

}
