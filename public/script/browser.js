 /*------navbar----------*/
  
 $("[data-menu-underline-from-center] a").addClass("underline-from-center");


 /*-----------------navbarend-----------*/





/*-----------callout----------*/

 $(function(){
 $('[data-callout-hover-reveal]').hover(function(){
   $(this).find('.callout-footer').slideDown(250);
     },function(){
   $(this).find('.callout-footer').slideUp(250);
   });
 }) 
 




 /*----------------table----------------*/

   $('[data-open-details]').click(function (e) {
     e.preventDefault();
     $(this).next().toggleClass('is-active');
     $(this).toggleClass('is-active');
   });
 