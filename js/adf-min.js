$(document).ready(function(){$(".btn.btn-primary").click(function(){$(this).find("#classIcon").toggleClass("fa-plus fa-minus")});const t=function(){let t=$(window).width(),e=$(window).height();t<815||e<450?($("nav").addClass("smallScreen"),$("nav").css("display","none"),$("#menuIcon").removeClass("menuLight")):($("nav").removeClass("smallScreen"),$("nav").css("display","block"))};$(window).resize(function(){t()}),t(),$("#menuButton").click(function(){$("nav").toggle(),$("#menuIcon").toggleClass("menuLight")});const e=new Swiper(".swiper-container",{direction:"horizontal",loop:!0,pagination:".swiper-pagination",nextButton:".swiper-button-next",prevButton:".swiper-button-prev"});$(".scrollLink").click(function(t){t.preventDefault();const e=2,n=-24;return $(window).width()<=829?($("html, body").animate({scrollTop:$($(this).attr("href")).offset().top+2},600),$("#menuIcon").toggleClass("menuLight"),$("nav.smallScreen").css("display","none"),!1):($("html, body").animate({scrollTop:$($(this).attr("href")).offset().top+-24},300,"linear"),!1)}),$(window).scroll(function(){let t=$(window).scrollTop()+100,e=$(window).height(),n=$(document).height();for(let e=0;e<o.length;e++){const n=o[e];let i=$(n).offset().top,l=$(n).height();t>=i&&t<i+l?$("a[href='"+n+"']").addClass("active"):$("a[href='"+n+"']").removeClass("active")}if(e==n&&!$("a.scrollLink").hasClass("active")){var i=$(".active").attr("href");$("a[href='"+i+"']").removeClass("active"),$("a.scrollLink").addClass("active")}});const n=$(".scrollLink"),o=[];for(let t=0;t<n.length;t++){let e=n[t],i=$(e).attr("href");o.push(i)}let i=$(".scrollTrigger").toArray();$.each(i,function(t,e){$(this).attr("id","trigger-"+t)});let l=$(".sectionBody").toArray();$.each(l,function(t,e){$(this).attr("id","reveal-"+t)});var s=new ScrollMagic.Controller;const a=function(t,e){new ScrollMagic.Scene({triggerElement:t,triggerHook:.9,offset:50,reverse:!1}).setClassToggle(e,"visible").addTo(s)};$.each(i,function(t,e){let n="#"+$(this).attr("id"),o="#"+l[t].id;a(n,o)})});