var profileImage = $(".main-block__icon-wrapper__profile-image img");

$(".background").scroll(function() {
  var screenMask = $(".screen-mask__image-wrapper--block");
  var status = $(".screen-mask-status");

    $('.main-block__intro span').each(function() {
        if ($(status).offset().top >= $(this).offset().top && $(status).offset().top < ($(this).offset().top + $(this).outerHeight(true))){
          $(screenMask).show();
          $("#movie-vue, #contact, #remote-dir, #fca, #marketing").hide();
          $(this).addClass('highlight-blue');
          $(status).removeClass('fca-dot');
          $(status).addClass('blue-dot');
        } else {
          $(this).removeClass('highlight-blue');
          $(status).removeClass('blue-dot');
        }
    });
    $('.main-block__fca span').each(function() {
        if ($(status).offset().top >= $(this).offset().top && $(status).offset().top < ($(this).offset().top + $(this).outerHeight(true))){
          $(screenMask).show();
          $("#simona-golebiewski").hide();
          $("#contact, #remote-dir, #movie-vue, #marketing").hide();
          $(this).addClass('highlight-fca');
          $(status).removeClass('remote-dot');
          $(status).addClass('fca-dot');
        } else {
          $(this).removeClass('highlight-fca');
        }
    });
    $('.main-block__remote-dir span').each(function() {
        if ($(status).offset().top >= $(this).offset().top && $(status).offset().top < ($(this).offset().top + $(this).outerHeight(true))){
          $(screenMask).show();
          $("#simona-golebiewski").hide();
          $("#contact, #movie-vue, #fca, #marketing").hide();
          $(this).addClass('highlight-remote');
          $(status).removeClass('movie-vue-dot fca-dot');
          $(status).addClass('remote-dot');
        } else {
          $(this).removeClass('highlight-remote');
        }
    });
    $('.main-block__movie-vue span').each(function() {
        if ($(status).offset().top >= $(this).offset().top && $(status).offset().top < ($(this).offset().top + $(this).outerHeight(true))){
          $(screenMask).show();
          $("#simona-golebiewski").hide();
          $("#contact, #remote-dir, #fca, #marketing").hide();
          $(this).addClass('highlight-movie-vue');
          $(status).removeClass('marketing-dot remote-dot');
          $(status).addClass('movie-vue-dot');
        } else {
          $(this).removeClass('highlight-movie-vue');
        }
    });
    // $('.main-block__fca span').each(function() {
    //     if ($(status).offset().top >= $(this).offset().top && $(status).offset().top < ($(this).offset().top + $(this).outerHeight(true))){
    //       $(screenMask).show();
    //       $("#simona-golebiewski").hide();
    //       $("#contact, #remote-dir, #movie-vue, #marketing").hide();
    //       $(this).addClass('highlight-fca');
    //       $(status).removeClass('marketing-dot');
    //       $(status).addClass('fca-dot');
    //     } else {
    //       $(this).removeClass('highlight-fca');
    //     }
    // });
    $('.main-block__marketing span').each(function() {
        if ($(status).offset().top >= $(this).offset().top && $(status).offset().top < ($(this).offset().top + $(this).outerHeight(true))){
          $(screenMask).show();
          $("#simona-golebiewski").hide();
          $("#contact, #remote-dir, #movie-vue, #fca").hide();
          $(this).addClass('highlight-marketing');
          $(status).removeClass('contact-dot movie-vue-dot');
          $(status).addClass('marketing-dot');
        } else {
          $(this).removeClass('highlight-marketing');
        }
    });
    $('.main-block__contact span').each(function() {
        if ($(status).offset().top >= $(this).offset().top && $(status).offset().top < ($(this).offset().top + $(this).outerHeight(true))){
          $(screenMask).show();
          $("#movie-vue, #simona-golebiewski, #remote-dir, #fca, #marketing").hide();
          $(this).addClass('highlight-contact');
          $(status).addClass('contact-dot');
          $(status).removeClass('marketing-dot');
        } else {
          $(this).removeClass('highlight-contact');
        }
    });
});

$(profileImage).mouseover(function() {
  $(".speech-bubble").show();
});
$(profileImage).mouseleave(function() {
  $(".speech-bubble").hide();
});

$(window).on("load, resize", function() {
  if ($(window).width() <= 900) {
    $(".title-text").css("display", "none");
    $(".title-link").css({"display": "inline-block", "margin-bottom": "0"});
    $(".contact-info-small-screen").css("display", "block");
    $(".contact-info-large-screen").css("display", "none");
  } else if ($(window).width() > 900){
    $(".title-text").css({"display": "inline-block", "margin-bottom": "0"});
    $(".title-link").css("display", "none");
    $(".contact-info-small-screen").css("display", "none");
    $(".contact-info-large-screen").css("display", "block");
  }
});
if ($(window).width() <= 900) {
  $(".title-text").css("display", "none");
  $(".title-link").css({"display": "inline-block", "margin-bottom": "0"});
  $(".contact-info-small-screen").css("display", "block");
  $(".contact-info-large-screen").css("display", "none");
} else if ($(window).width() > 900){
  $(".title-text").css({"display": "inline-block", "margin-bottom": "0"});
  $(".title-link").css("display", "none");
  $(".contact-info-small-screen").css("display", "none");
  $(".contact-info-large-screen").css("display", "block");
}

// if (navigator.userAgent.search("Safari") &gt; = 0) {
//
//     }
