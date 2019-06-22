$(document).ready(function() {
  $('.btn.btn-primary').click(function(){
    $(this).find('#classIcon').toggleClass('fa-plus fa-minus')
  });

  //mobile to desktop navigation switch function
  var menuSwitch = function() {
    var windowWidth = $(window).width();
    console.log(windowWidth);
    var windowHeight = $(window).height();
    //14px discrepancy, 829px - 14px = 815px (media query from CSS - 14px)
    if (windowWidth < 815 || windowHeight < 450) {
      $(".main-nav").addClass("smallScreen");
      $(".main-nav").css("display", "none");
      //resets light back to black on window resize
      $("#menuIcon").removeClass('menuLight');
      $(".scrollLink").click(function() {
        $(".smallScreen").hide();
      });
    } else {
      $(".main-nav").removeClass("smallScreen");
      //keeps scrollLinks from disappearing on window resize
      $(".main-nav").css("display", "block");
    };
  }
  //check window size and rerun function
  $(window).resize(function(){
    menuSwitch();
  });
  //fire when ready
  menuSwitch();
  //mobile menu activiation
  $("#menu").click(function(){
    $(".main-nav").toggle();
    $("#menuIcon").toggleClass('menuLight');
  });
  //swiper init
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
  });

  //animated scroll link

    $('.scrollLink').click(function(evn) {
      evn.preventDefault();
      const mobileOffset = 2;
      const largeOffset = -24;
      if ($(window).width() <= 829) {
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top + mobileOffset
          }, 600); // 2 = top border of section body
          $("#menuIcon").toggleClass('menuLight'); //turns mobile menu light off
        return false;
      } else {
          $('html, body').animate({
              scrollTop: $( $(this).attr('href') ).offset().top + largeOffset
            }, 300, 'linear'); // 24 = height of newsFlash
            return false;
          }
        });

  var navChildren = $(".scrollLink");
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
        //change active class for scrollLinks when scrolling thru sections
        if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
            $("a[href='" + theID + "']").addClass("active");
        } else {
            $("a[href='" + theID + "']").removeClass("active");
        }
    }
    if(windowHeight == docHeight) {
      if (!$("a.scrollLink").hasClass("active")) {
          var navActiveCurrent = $(".active").attr("href");
          $("a[href='" + navActiveCurrent + "']").removeClass("active");
          $("a.scrollLink").addClass("active");
      }
    }
  }); // end window scroll function

});
