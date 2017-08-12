
const content = $('.content-seg-top');
const contentBottom = $('.content-seg-bottom');

content.click(function() {
   if($(window).width()<700) {
     $(this).find("p").toggle( "slide", { direction: "up" }, 1000 );

     } else if ($(window).width()>700) {
       $(this).css('max-height', 'none');
       $(this).find('p').toggle('slide', {
         direction: "down"}, 1000);
       }
});

contentBottom.click(function() {
   if($(window).width()<700) {
     $(this).find("p").toggle( "slide", { direction: "up" }, 1000 );

     } else if ($(window).width()>700) {
       $(this).css('max-height', 'none');
       $(this).find('p').toggle('slide', {
         direction: "up"}, 1000);
       }
});
