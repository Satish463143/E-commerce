// $.fn.jQuerySimpleCounter = function( options ) {
//     var settings = $.extend({
//         start:  0,
//         end:    100,
//         easing: 'swing',
//         duration: 400,
//         complete: ''
//     }, options );

//     var thisElement = $(this);

//     $({count: settings.start}).animate({count: settings.end}, {
//         duration: settings.duration,
//         easing: settings.easing,
//         step: function() {
//             var mathCount = Math.ceil(this.count);
//             thisElement.text(mathCount);
//         },
//         complete: settings.complete
//     });
// };


// $('#number1').jQuerySimpleCounter({end: 1042,duration: 6000});
// $('#number2').jQuerySimpleCounter({end: 10000,duration: 6000});
// $('#number3').jQuerySimpleCounter({end: 12,duration: 6000});
// $('#number4').jQuerySimpleCounter({end: 17,duration: 6500});

$(document).ready(function(){
    $(".logo").owlCarousel({
            items:9,
            loop:true,
            nav:true,
            navText:["<div class='right'><i class='fas fa-angle-double-right'></i></div>", "<div class='left'><i class='fas fa-angle-double-left'></i></div>"]
    });
});

$(window).scroll(function(){
    if($(this).scrollTop()> 150)
    {
       $(".top").show();
    }
    else
    {
        $(".top").hide(); 
    }
})


$(document).ready(function(){
    $(".related-pro").owlCarousel({
            items:5,
            nav:true,
            autoplay:true,
            autoplayTimeout:2000,
            navText:["<div class='right-2'><i class='fas fa-angle-right'></i></div>", "<div class='left-2'><i class='fas fa-angle-left'></i></div>"]
    });
});



