// index page shoe slider 
$('.sock-options p').click(function() {
  $(this).addClass('current').siblings().removeClass('current'); 
  var imageChoice = $(this).attr("id")
  switch(imageChoice) {
    case "athletic-socksample":
      $('#athletic').show().siblings().hide(); 
      break;
    case "casual-socksample":
      $('#casual').show().siblings().hide(); 
      break;
    case "dress-socksample":
      $('#dress').show().siblings().hide(); 
      break;
  }
})
$('#sock-preview-benefits .right-arrow').click(function() {
  var currentImage = $('#sock-preview-benefits .sock-images img:visible'); 
  if ($(currentImage).next().length > 0) {          
    $(currentImage).hide().next().show();
    $('.sock-options .current').removeClass('current').next().addClass('current')
  }
  else {
    $(currentImage).hide()
    $('#athletic').show();
    $('.sock-options p').siblings().removeClass('current').first().addClass('current')
  }
})
$('#sock-preview-benefits .left-arrow').click(function() {
  var currentImage = $('#sock-preview-benefits .sock-images img:visible'); 
  if ($(currentImage).prev().length > 0) {       
    $(currentImage).hide().prev().show();
    $('.sock-options .current').removeClass('current').prev().addClass('current')
  }
  else {
    $(currentImage).hide()
    $('#dress').show();
    $('.sock-options p').siblings().removeClass('current').last().addClass('current')
  }
})
// cruding with cookies 
function createCookie(name,value,days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}
function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}
function deleteCookie(name) {
  document.cookie = name +'=; Path=/; Expires=Tues, 14 July 1992 00:00:01 GMT;';
}

// redirect v no-redirect
$(document).ready(function(){
  var flowFinish = readCookie('flowFinish')
  var pacasVisit = readCookie('pacasVisit')
  if ((!flowFinish) && (!pacasVisit)){
    createCookie("pacasVisit", "remarketing", 7)
    createCookie("flowFinish", "learnMore", 14)
    if (!(window.location.href.indexOf("?sh=d") > -1) && ( typeof on_index != "undefined" )) {
      window.location.href="/pages/meet-paca"
    };
  }
}); 

$('#dnav a.mainlink p').hover(function() {
  $('#dnav a.mainlink p').removeClass('border-bottom-darkgray')
  $(this).addClass('border-bottom-darkgray')
}); 
$(window).scroll(function() {
  $('#dnav a p').removeClass('border-bottom-darkgray')
}); 
// desktop header collections 
$('#dnav a.mainlink p').hover(function() {
  $('#dnav a.mainlink p').removeClass('border-bottom-darkgray')

  $(this).addClass('border-bottom-darkgray')
  if ($(this).hasClass('mens')) {
    $('nav').addClass('fixed-nav-collections')
    $('.desktop-collections').hide();
    $('.mens').show();
  }
  else if ($(this).hasClass('womens')) {
    $('nav').addClass('fixed-nav-collections')
    $('.desktop-collections').hide();
    $('.womens').show();
  }
  else if ($(this).hasClass('kids')) {
    $('nav').addClass('fixed-nav-collections')
    $('.desktop-collections').hide();
    $('.kids').show();
  }
  else {
    $('.desktop-collections').hide();
    if (!$(window).scrollTop() > 0) {
      $('nav').removeClass('fixed-nav-collections')
    }
    // $('nav').removeClass('fixed-nav-collections')
    // $('.desktop-collections').hide();
  }
})
$(window).scroll(function() {
  $('nav').removeClass('fixed-nav-collections')
  $('.desktop-collections').hide(); 
  $('#dnav a p').removeClass('border-bottom-darkgray')
})

$('body').click(function (event) {
  if((!$(event.target).is('#dnav')) && (!$(event.target).is('#cta h4')) && (!$(event.target).is('.desktop-collections'))) {
    $('nav').removeClass('fixed-nav-collections')
    $('.desktop-collections').hide()
    $('#dnav a p').removeClass('border-bottom-darkgray')
  }
}); 

// hamburger nav
if ($(window).width() < 800) {
  $('#hamburger, #cta').click(function(){
    $('.mobile-nav1').show().removeClass('slide-out-left').addClass('slide-in-left');
    $('.index-sections, main, header, footer, #banner-cta, .modal, nav').addClass('darken')
    $('body').addClass('freeze-frame'); 
    //   trigger shop now atf cta to open mobile nav
    if ($(this).hasClass('cta-women')) {
      $('.collection-prod').siblings('.childlink').hide(); 
      $('.collection-prod:first').siblings('.childlink').show();
      $(".fr", ".collection-prod:first").addClass('rotate90')   
    }
    else if ($(this).hasClass('cta-men')){
      $('.collection-prod:first').siblings('.childlink').hide(); 
      $('.collection-prod.kids-collection-nav').siblings('.childlink').hide(); 
      $('.collection-prod.men-collection-nav').siblings('.childlink').show();
      $('.fr').removeClass('rotate90')
      $(".fr", ".men-collection-nav" ).addClass('rotate90') 
    }
    else if ($(this).hasClass('cta-kids')) {
      $('.collection-prod:first').siblings('.childlink').hide(); 
      $('.collection-prod.men-collection-nav').siblings('.childlink').hide(); 

      $('.collection-prod.kids-collection-nav').siblings('.childlink').show();
      $('.fr').removeClass('rotate90')
      $(".fr", ".kids-collection-nav" ).addClass('rotate90') 
    }
  }); 
}
if ($(window).width() >= 800) {
  $('.cta-bandaid').click(function() {
  $('#dnav a.mainlink p').removeClass('border-bottom-darkgray')
 $('nav').addClass('fixed-nav-collections')
     $('.desktop-collections').hide();
    if ($(this).hasClass('cta-women')) {
        $('.womens').show();
      $('.mainlink .womens ').addClass('border-bottom-darkgray'); 

    }
    else if ($(this).hasClass('cta-men')){
		$('.mens').show(); 
      $('.mainlink .mens').addClass('border-bottom-darkgray'); 

    }
    else if ($(this).hasClass('cta-kids')){
          $('.kids').show();
      $('.mainlink .kids').addClass('border-bottom-darkgray'); 

    }
}); 
}
$('#mobile-drawer-close').click(function() {
  $('.mobile-nav1').removeClass('slide-in-left').addClass('slide-out-left');
  $('body').removeClass('freeze-frame')

  $('.index-sections, main, header, footer, #banner-cta, .modal, nav').removeClass('darken')
})

$('.collection-prod').click(function() {
  event.preventDefault();
  $(this).siblings('.childlink').slideToggle();
  $(".fr", this).toggleClass('rotate90')
});
// donation. modal 
$('#donation-learn-more').click(function() {
  $('#donation-modal').fadeIn(); 
  $('.index-sections, main, header, footer, #banner-cta, nav').addClass('darken')
  $('body').addClass('freeze-frame')
});
// sizing chart
$('#size-chart').click( function() {
  $('#display-size').fadeIn();  
  $('.index-sections, main, header, footer, #banner-cta, nav').addClass('darken')
  $('body').addClass('freeze-frame')
});

// popup close
$('.klaviyo_header_close').on('click', function() {
  $(this).closest('.modal').hide();
  $('header, main, nav,footer, #banner-cta,.banner, .index-sections, .mobile-nav1').removeClass('darken');
  $('body').removeClass('freeze-frame')

});
$('body').click(function (event) {
  if(!$(event.target).closest('.modal').length && !$(event.target).closest('.banner').length && !$(event.target).is('#review-snippet') && !$(event.target).is('.read-reviews') && !$(event.target).is('.review-stars')  && !$(event.target).is('#cta h4') && (!$(event.target).is('#cta')) && !$(event.target).is('#donation-learn-more') && !$(event.target).is('.modal') && !$(event.target).is('#referafriend h3') && !
     $(event.target).is('#size-chart')  && !$(event.target).closest('#CartContainer').length && !$(event.target).is('button') && !$(event.target).is('button span') && !$(event.target).is('#hamburger span') && !$(event.target).closest('.mobile-nav1').length && !$(event.target).closest('#size-chart').length ) {
    $(".modal").hide(); 
    if ($('#CartContainer').is(":visible ")) {
      cartClose();
    }
    if ($('.mobile-nav1').is(":visible")) {
      if ($('.mobile-nav1').hasClass('slide-in-left')) {
        $(".mobile-nav1").removeClass('slide-in-left').addClass('slide-out-left');
      }     
    }
    $('body').removeClass('freeze-frame')

    $('header, main, footer, nav, #banner-cta,.banner, .index-sections, .mobile-nav1').removeClass('darken');
  }    
});
// ajax cart close 
function cartClose() {
  if ($('#CartContainer').hasClass('slide-in')) {
    $("#CartContainer").removeClass('slide-in').addClass('slide-out');
  }
  $('header, main, footer, nav, #banner-cta, .index-sections, .mobile-nav1').removeClass('darken');
}
// desktop sub-nav
$('.sub-nav-header').on('click mouseover', function(event) {
  event.preventDefault();
  var subnav = $(this).next('.sub-nav')
  $('.sub-nav').not(subnav).hide(); 
  $(subnav).show(); 
  $('header').css("height", $('.desktop-sub-nav').height() + subnav.height() + 30 + "px")
});
$(window).scroll(function() {
  $('.sub-nav').hide(); 
  $('header').css("height", "")
})
$('.no-sub a').on('click mouseover', function() {
  $('.sub-nav').hide(); 
  $('header').css("height", "")
})
$('body').click(function (event) {
  if((!$(event.target).parent().parent().is('.desktop-sub-nav')) && (!$(event.target).parent().parent().is('.sub-nav'))) {
    $(".sub-nav").hide(); 
    $('header').css("height", "")
  }    
});
// thumbnail selection on product pages
$('#thumbnails ul li img').click(function() {
  var src = $(this).attr("src").replace("compact", "2000x2000"); 
  $(this).addClass('border-lightgray').parent().siblings().children().removeClass('border-lightgray'); 
  $('#featured-image').attr("src", src); 
}); 
var swipeLocation = 0 
var thumbs = $("#thumbnails ul li").children().toArray()

$('#featured-image').on("swipeleft", function(event) {
  var currentSrc = $(this).attr("src"); 
  $.each(thumbs, function(index, thumb) {
    if ($(thumb).attr("src").replace("compact", "2000x2000") == currentSrc) {
      swipeLocation = index 
    }
  }); 
  if ((thumbs.length - 1)> swipeLocation) {
    swipeLocation += 1 
  } 
  $("#featured-image").attr("src", $(thumbs[swipeLocation]).attr("src").replace("compact", "2000x2000"))
  $('#thumbnails ul li img').removeClass('border-lightgray')
  $(thumbs[swipeLocation]).addClass('border-lightgray')
}); 
$('#featured-image').on("åswiperight", function(event) {
  var currentSrc = $(this).attr("src"); 
  $.each(thumbs, function(index, thumb) {
    if ($(thumb).attr("src").replace("compact", "2000x2000") == currentSrc) {
      swipeLocation = index 
    }
  }); 
  if (swipeLocation > 0) { 
    swipeLocation -=1
  } 
  $("#featured-image").attr("src", $(thumbs[swipeLocation]).attr("src").replace("compact", "2000x2000"))
  $('#thumbnails ul li img').removeClass('border-lightgray')
  $(thumbs[swipeLocation]).addClass('border-lightgray')
}); 





