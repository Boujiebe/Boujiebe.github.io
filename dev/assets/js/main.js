/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
(function(){
	'use strict';

$( document ).ready(function() {

  $("#mobile-nav .s-menu, #site-nav li a").click(function(){
    $("#site-nav").toggleClass("active");
  });


	// Smooth scrolling
	
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top  - 80
            }, 1000);
            return false;
          }
        }
      });
    });

    // Sticky header

    $(window).scroll(function() {
      if ($(this).scrollTop() > 1){  
        $('#site-header, #mobile-nav').addClass("sticky");
      }
      else{
        $('#site-header, #mobile-nav').removeClass("sticky");
      }
    });

    // Cache selectors
    var topMenu = $("#site-nav"),
        topMenuHeight = topMenu.outerHeight()+15,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function(){
          var item = $($(this).attr("href"));
          if (item.length) { return item; }
        });

    // Bind to scroll
    $(window).scroll(function(){
       // Get container scroll position
       var fromTop = $(this).scrollTop()+topMenuHeight;

       // Get id of current scroll item
       var cur = scrollItems.map(function(){
         if ($(this).offset().top < fromTop)
           return this;
       });
       // Get the id of the current element
       cur = cur[cur.length-1];
       var id = cur && cur.length ? cur[0].id : "";
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
    });​

    
    // headunit popup

    $(".pop-up, .pop-up-overlay").hide();

    $(".view-more-source").click(function(){
        $(".pop-up-source, .pop-up-overlay").show();
    });

    $(".view-more-audio").click(function(){
        $(".pop-up-audio, .pop-up-overlay").show();
    });

    $(".view-more-illumination").click(function(){
        $(".pop-up-illumination, .pop-up-overlay").show();
    });

    $(".pop-up-overlay, .close").click(function(){
        $(".pop-up-audio, .pop-up-illumination, .pop-up-source, .pop-up-overlay").hide();
    });

});

})(); // END OF USE STRICT FUNCTION