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
         .parent().removeClass("bk2210-active")
         .end().filter("[href='#"+id+"']").parent().addClass("bk2210-active");
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

    // ilumination control

    $(".bk2210-connection img").after("<i class='s-logo'></i>");
    $(".bk2210-connection img").remove();

    $("#bk2210-illuminaion-control").append( "<div class='bull-top'><i class='bull-white'></i><i class='bull-red'></i><i class='bull-orange'></i><i class='bull-light-orange'></i><i class='bull-yellow'></i><i class='bull-light-green active-selection'></i><i class='bull-green'></i><i class='bull-turquoise'></i><i class='bull-light-blue'></i><i class='bull-blue'></i><i class='bull-purple'></i><i class='bull-pink'></i></div>" );
    $("#bk2210-illuminaion-control").append( "<div class='bull-bottom'><i class='bull-white'></i><i class='bull-red'></i><i class='bull-orange'></i><i class='bull-light-orange'></i><i class='bull-yellow'></i><i class='bull-light-green'></i><i class='bull-green'></i><i class='bull-turquoise'></i><i class='bull-light-blue'></i><i class='bull-blue'></i><i class='bull-purple'></i><i class='bull-pink'></i></div>" );
    

    $("i[class^='bull-']").click(function(){
        var colorClass = $(this).attr("class");
        $("#bk2210-custom-head-unit h2").attr("class", "").addClass("bk2210-title");
        $(".bk2210-connection").attr("class", "").addClass("bk2210-connection");
        $(".bk2210-circle-badge").attr("class", "").addClass("bk2210-circle-badge");

        $("#bk2210-custom-head-unit h2, .bk2210-connection, .bk2210-circle-badge").addClass("color"+colorClass);

        $(".bk2210-connection").next().attr("src", "dist/img/screens/pioneer-headunit-illumination-color"+colorClass+".png");

        // $(".bk2210-connection").next().fadeOut("fast", function() {
        //   $(this).attr("src", "dist/img/screens/pioneer-headunit-illumination-color"+colorClass+".png").fadeIn();
        // });

        $("i[class^='bull-']").removeClass("active-selection");
        $(this).toggleClass("active-selection");
    });

    var windowWidth = $(window).width();
    $("#bk2210-illuminaion-control #bk2210-ill-phone").attr("src", "dist/img/devices/arc-device-illumination-control-2.png");

    if (windowWidth >= 600) {
      $("#bk2210-illuminaion-control #bk2210-ill-phone").attr("src", "dist/img/devices/arc-device-illumination-control-2.png");
    } else if (windowWidth < 600) {
      $("#bk2210-illuminaion-control #bk2210-ill-phone").attr("src", "dist/img/devices/arc-device-illumination-control.png");
    }

    $( window ).resize(function() {
      var windowWidth = $(window).width();

      if (windowWidth >= 600) {
        $("#bk2210-illuminaion-control #bk2210-ill-phone").attr("src", "dist/img/devices/arc-device-illumination-control-2.png");
      } else if (windowWidth < 600) {
        $("#bk2210-illuminaion-control #bk2210-ill-phone").attr("src", "dist/img/devices/arc-device-illumination-control.png");
      }
    });


    $(".bk2210-bk2210-large-3").removeClass("bk2210-bk2210-large-3").addClass("bk2210-large-3");

    
});

})(); // END OF USE STRICT FUNCTION