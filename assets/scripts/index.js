$("#viewMyWork").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 2000);
});

$("#scrollTop").click(function() {
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 2000);
});

$(document).ready(function(){
    $(window).bind('scroll', function() {
    var navHeight = $( window ).height() - 70;
          if ($(window).scrollTop() > navHeight) {
              $('nav').addClass('fixed');
          }
          else {
              $('nav').removeClass('fixed');
          }
     });
 });

 $(".secondNav .nav-link").on("click", function(){
   $(".secondNav").find(".active").removeClass("active");
   $(this).addClass("active");
});

/* Filter */

$("#allFilter").on("click", function(){
    $(".projectsRow").find(".col-md-4").show();
 });
$("#bootstrapFilter").on("click", function(){
    $('.projectsRow .col-md-4').not('.bootstrap').hide();
    $('.projectsRow .bootstrap').show().removeAttr("data-aos");
 });
$("#cssFilter").on("click", function(){
    $('.projectsRow .col-md-4').not('.css').hide();
    $('.projectsRow .css').show().removeAttr("data-aos");
 });
$("#javaScriptFilter").on("click", function(){
    $('.projectsRow .col-md-4').not('.javaScript').hide();
    $('.projectsRow .javaScript').show().removeAttr("data-aos");
 });
$("#vueJSFilter").on("click", function(){
    $('.projectsRow .col-md-4').not('.vueJS').hide();
    $('.projectsRow .vueJS').show().removeAttr("data-aos");
 });

/* change nav active on scroll */

var addClassOnScroll = function () {
    var windowTop = $(window).scrollTop();
    $('section[id]').each(function (index, elem) {
        var offsetTop = $(elem).offset().top;
        var outerHeight = $(this).outerHeight(true);

        if( windowTop > (offsetTop - 50) && windowTop < ( offsetTop + outerHeight)) {
            var elemId = $(elem).attr('id');
            $("nav ul li a.active").removeClass('active');
            $("nav ul li a[href='#" + elemId + "']").addClass('active');
        }
    });
};

$(function () {
    $(window).on('scroll', function () {
        addClassOnScroll();
    });
});

/* animated charts */

setTimeout(function start (){
  
    $('.bar').each(function(i){  
      var $bar = $(this);
      $(this).append('<span class="count"></span>')
      setTimeout(function(){
        $bar.css('width', $bar.attr('data-percent'));      
      }, i*100);
    });
  
  $('.count').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).parent('.bar').attr('data-percent')
      }, {
          duration: 2000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now) +'%');
          }
      });
  });
  
  }, 500)

  // Lightbox init
$('#mdb-lightbox-ui').load('../mdb-addons/mdb-lightbox-ui.html');

function send() {
    var link = 'mailto:florin.necula95@yahoo.com?subject=Message from '
    +document.getElementById('mailFrom').value
    +'&body='+document.getElementById('myText').value;
    window.location.href = link;
}


// $(document).ready(function(){

//     $('#submit').click(function (){
//         var name = $('#mailFrom').val();
//         var email = $('#myText').val();

//         var varData = 'name' + name + '&email' + email;
//         console.log(varData);

//         $.ajax({
//             type: "POST",
//             url: 'php.php',
//             data: varData,
//             success: function() {
//                 alert('It was a succes');
//             }
//         });
//     });
// });


