!function(){"use strict";$(document).ready(function(){$("#bk2210-mobile-nav .s-menu, #bk2210-site-nav li a").click(function(){$("#bk2210-site-nav").toggleClass("bk2210-active")}),$(function(){$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var o=$(this.hash);if(o=o.length?o:$("[name="+this.hash.slice(1)+"]"),o.length)return $("html, body").animate({scrollTop:o.offset().top-80},1e3),!1}})}),$(window).scroll(function(){$(this).scrollTop()>1?$("#bk2210-site-header, #bk2210-mobile-nav").addClass("bk2210-sticky"):$("#bk2210-site-header, #bk2210-mobile-nav").removeClass("bk2210-sticky")});var o=$("#bk2210-site-nav"),e=o.outerHeight()+15,i=o.find("a"),t=i.map(function(){var o=$($(this).attr("href"));return o.length?o:void 0});$(window).scroll(function(){var o=$(this).scrollTop()+e,n=t.map(function(){return $(this).offset().top<o?this:void 0});n=n[n.length-1];var a=n&&n.length?n[0].id:"";i.parent().removeClass("bk2210-active").end().filter("[href='#"+a+"']").parent().addClass("bk2210-active")}),$(".bk2210-pop-up, .bk2210-pop-up-overlay").hide(),$(".bk2210-view-more-source").click(function(){$(".bk2210-pop-up-source, .bk2210-pop-up-overlay").show()}),$(".bk2210-view-more-audio").click(function(){$(".bk2210-pop-up-audio, .bk2210-pop-up-overlay").show()}),$(".bk2210-view-more-illumination").click(function(){$(".bk2210-pop-up-illumination, .bk2210-pop-up-overlay").show()}),$(".bk2210-pop-up-overlay, .bk2210-close").click(function(){$(".bk2210-pop-up-audio, .bk2210-pop-up-illumination, .bk2210-pop-up-source, .bk2210-pop-up-overlay").hide()})})}();
//# sourceMappingURL=maps/main.js.map
