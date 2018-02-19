$(document).ready(function() {

$(".main-nav").addClass("js").before('<div id="menu">&#9776;<span id="menuText">MENU</span></div>');
$("#menu").click(function(){
  $(".main-nav.js").toggle();
});
$(window).resize(function(){
  if(window.innerWidth > 768) {
    $(".main-nav").removeAttr("style");
  }
});

var mySwiper = new Swiper ('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  pagination: '.swiper-pagination',
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev'
});


$('a.navLink').click(function(evn){
  $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
  return false;

});

var navChildren = $(".navLink");
    var aArray = [];
    for (var i=0; i < navChildren.length; i++) {
        var aChild = navChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
}

$(window).scroll(function(){
  var windowPos = $(window).scrollTop() + (100);
  var windowHeight = $(window).height();
  var docHeight = $(document).height();

  for (var i=0; i < aArray.length; i++) {
      var theID = aArray[i];
      var divPos = $(theID).offset().top;
      var divHeight = $(theID).height();

      if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
          $("a[href='" + theID + "']").addClass("active");
      } else {
          $("a[href='" + theID + "']").removeClass("active");
      }
  }

  if(windowHeight == docHeight) {
      if (!$("a.navLink").hasClass("active")) {
          var navActiveCurrent = $(".active").attr("href");
          $("a[href='" + navActiveCurrent + "']").removeClass("active");
          $("a.navLink").addClass("active");
      }
  }
});

});
