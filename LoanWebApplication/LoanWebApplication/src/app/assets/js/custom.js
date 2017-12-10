
$(document).ready(function () {
  $('.tab-pane.active .table-responsive').addClass('scroll-pane');
  $('.nav-tabs li a').on('click', function () {
    $('.table-responsive.scroll-pane').removeClass('scroll-pane');
    setTimeout(function () {
      var activeTab = $('.tab-pane.active .table-responsive');
      if (activeTab) {
        $('.table-responsive.scroll-pane').removeClass('scroll-pane');
        $('.tab-content').find('.tab-pane.active .table-responsive').addClass('scroll-pane').jScrollPane();
      }
    });
  });
});


$(".dropdown-menu li a").click(function () {

  $(".dropdown .btn:first-child").html($(this).text() + ' <span class="arrow"></span>');

});

/**scrollable nav-tabs */

var hidWidth;
var scrollBarWidths = 40;

var widthOfList = function () {
  var itemsWidth = 0;
  $('.list li').each(function () {
    var itemWidth = $(this).outerWidth();
    itemsWidth += itemWidth;
  });
  return itemsWidth;
};

var widthOfHidden = function () {
  return (($('.nav-wrapper').outerWidth()) - widthOfList() - getLeftPosi()) - scrollBarWidths;
};

var getLeftPosi = function () {
  return $('.list').position().left;
};

var reAdjust = function () {
  if (($('.nav-wrapper').outerWidth()) < widthOfList()) {
    $('.scroller-right').show();
  }


  if (getLeftPosi() < 0) {
    $('.scroller-left').show();
  }
  else {
    $('.item').animate({ left: "-=" + getLeftPosi() + "px" }, 'slow');

  }
}

reAdjust();

$(window).on('resize', function (e) {
  reAdjust();
});

$('.scroller-right').click(function () {



  $('.list').animate({ left: "+=" + widthOfHidden() + "px" }, 'slow', function () {

  });
});

$('.scroller-left').click(function () {


  $('.list').animate({ left: "-=" + getLeftPosi() + "px" }, 'slow', function () {

  });
});


(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

})(jQuery); // End of use strict


$('.btn-next').on('click', function (e) {
    
    if($('#fname').val() === ''){
        $('#errorMsgFname').removeClass('hide');
    }
    else{
        $('#errorMsgFname').addClass('hide');
    }
    
    if($('#lname').val() === ''){
        $('#errorMsgLname').removeClass('hide');
    }
    else{
        $('#errorMsgLname').addClass('hide');
    }
    if($('#datetimepicker').val() === ''){
        $('#errorMsgDate').removeClass('hide');
    }
    else{
        $('#errorMsgDate').addClass('hide');
    }
     if($('#apt').val() === ''){
        $('#errorMsgApt').removeClass('hide');
    }
    else{
        $('#errorMsgApt').addClass('hide');
    }
   if($('#str').val() === ''){
        $('#errorMsgStr').removeClass('hide');
    }
    else{
        $('#errorMsgStr').addClass('hide');
    }
    if($('#strname').val() === ''){
        $('#errorMsgStrname').removeClass('hide');
    }
    else{
        $('#errorMsgStrname').addClass('hide');
    }
     if($('#city').val() === ''){
        $('#errorMsgCity').removeClass('hide');
    }
    else{
        $('#errorMsgCity').addClass('hide');
    }
      if($('#post').val() === ''){
        $('#errorMsgPost').removeClass('hide');
    }
    else{
        $('#errorMsgPost').addClass('hide');
    }
    $('#page1 input').each(function(){
        if($(this).val() === ''){
            e.preventDefault();
            $(this).addClass('invaild');
            $('#generalError').addClass('alert-error').removeClass('hide');
        }   
        else{
            $(this).removeClass('invaild');
            
        }
    });
});
onkeypress();
function onkeypress() {
   
    $('#page1 input').on('blur', function(){
        if($(this).val() === ''){
            $(this).addClass('invaild');
        }
        else{
            $(this).removeClass('invaild');
        }
        
    });
}
//$('.page-next').on('click', function () {
//  $('#page2').removeClass('hide');
//  $('#page1').addClass('hide');
//  $('html, body').animate({
//    scrollTop: $('#page2').offset().top - 200
//          }, 2000);
//});
$('.page-prev').on('click', function () {
  $('#page1').removeClass('hide');
  $('#page2').addClass('hide');
  $('html, body').animate({
    scrollTop: $('#page1').offset().top
  }, 2000);
});
$('.page-prev2').on('click', function () {
  $('#page2').removeClass('hide');
  $('#page3').addClass('hide');
  $('html, body').animate({
    scrollTop: $('#page2').offset().top
  }, 2000);
});

$('.add-employment').on('click',function(){
    var newEmp = '<li><a href="#"><span class="glyphicon glyphicon-ok-circle hide"></span> Cannada Pension</a></li>'
    $(this).parent('li').before(newEmp);
});

