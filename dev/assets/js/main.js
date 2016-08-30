/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
(function(){
	'use strict';

$( document ).ready(function() {

  $("#bk2210-mobile-nav .s-menu, #bk2210-site-nav li a").click(function(){
    $("#bk2210-site-nav").toggleClass("bk2210-active");
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
        $('#bk2210-site-header, #bk2210-mobile-nav').addClass("bk2210-sticky");
      }
      else{
        $('#bk2210-site-header, #bk2210-mobile-nav').removeClass("bk2210-sticky");
      }
    });

    // Cache selectors
    var topMenu = $("#bk2210-site-nav"),
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

    $(".bk2210-pop-up, .bk2210-pop-up-overlay").hide();

    $(".bk2210-view-more-source").click(function(){
        $(".bk2210-pop-up-source, .bk2210-pop-up-overlay").show();
    });

    $(".bk2210-view-more-audio").click(function(){
        $(".bk2210-pop-up-audio, .bk2210-pop-up-overlay").show();
    });

    $(".bk2210-view-more-illumination").click(function(){
        $(".bk2210-pop-up-illumination, .bk2210-pop-up-overlay").show();
    });

    $(".bk2210-pop-up-overlay, .bk2210-close").click(function(){
        $(".bk2210-pop-up-audio, .bk2210-pop-up-illumination, .bk2210-pop-up-source, .bk2210-pop-up-overlay").hide();
    });

});

})(); // END OF USE STRICT FUNCTION