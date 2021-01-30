// fixed header code :start
$(window).scroll(function () {

  if ($(window).scrollTop() >= 1) {
      $('.header').addClass('fixedHeader');
  } else {
      $('.header').removeClass('fixedHeader');
  }
});
// fixed header code :end

jQuery("#carousel").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    dots:true,
    navText: ["<img src='imgs/left.svg'>","<img src='imgs/right.svg'>"],

    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 3
      },
  
      1260: {
        items: 3
      },
  
      1366: {
        items: 4
      }
    }
  });
  jQuery("#carousel2").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    dots:false,
    navText: ["<img src='imgs/longarrow.svg'>","<img src='imgs/longarrow2.svg'>"],

    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 3
      },
  
      1024: {
        items: 4
      },
  
      1366: {
        items: 4
      }
    }
  });

  $(document).on('click','.productDrop a' ,function(){
    $('.prdoctssow').slideDown();
  });
  document.addEventListener("mousedown", function (event) {
    if (event.target.closest(".prdoctssow"))
        return;
    $('.prdoctssow').slideUp();
});

$(document).on('click','.navbar-toggler',function(){
  $(this).addClass('active');
  $('.headerRig').animate({left: '0px'});
});
$(document).on('click','.navbar-toggler.active',function(){
  $(this).removeClass('active');
  $('.headerRig').animate({left: '-250px'});
});