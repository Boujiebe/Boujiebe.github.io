!function(){"use strict";$(document).ready(function(){$("#mobile-nav .s-menu, #site-nav li a").click(function(){$("#site-nav").toggleClass("active")}),$(function(){$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var o=$(this.hash);if(o=o.length?o:$("[name="+this.hash.slice(1)+"]"),o.length)return $("html, body").animate({scrollTop:o.offset().top-80},1e3),!1}})}),$(window).scroll(function(){$(this).scrollTop()>1?$("#site-header, #mobile-nav").addClass("sticky"):$("#site-header, #mobile-nav").removeClass("sticky")});var o=$("#site-nav"),e=o.outerHeight()+15,i=o.find("a"),t=i.map(function(){var o=$($(this).attr("href"));return o.length?o:void 0});$(window).scroll(function(){var o=$(this).scrollTop()+e,n=t.map(function(){return $(this).offset().top<o?this:void 0});n=n[n.length-1];var a=n&&n.length?n[0].id:"";i.parent().removeClass("active").end().filter("[href='#"+a+"']").parent().addClass("active")}),$(".pop-up, .pop-up-overlay").hide(),$(".view-more-source").click(function(){$(".pop-up-source, .pop-up-overlay").show()}),$(".view-more-audio").click(function(){$(".pop-up-audio, .pop-up-overlay").show()}),$(".view-more-illumination").click(function(){$(".pop-up-illumination, .pop-up-overlay").show()}),$(".pop-up-overlay, .close").click(function(){$(".pop-up-audio, .pop-up-illumination, .pop-up-source, .pop-up-overlay").hide()})})}();
//# sourceMappingURL=maps/main.js.map
