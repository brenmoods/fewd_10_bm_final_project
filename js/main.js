// wait for the DOM elements to load before executing
$(document).ready(function () {
    
// when hamburger characetr is clicked toggle menu    
//    $('.hamburger').click(function(){ 
//        $(this).next().slideToggle(); 
//});
    
// when the window is resized reset nav to visible if closed on resize
    $(window).resize(function(){
	if(window.innerWidth > 768) {
		$("nav").removeAttr("style");
	}
});
    
    // when the window is resized reset nav to visible if closed on resize
    $(window).resize(function(){
	if(window.innerWidth < 768) {
		$("nav").removeAttr("style");
	}
});
    
// hide header on scroll    
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $("header").outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
// make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
// if they scrolled down and are past the navbar, add class .navUp.
// this is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        
// scroll Down
        $("header").removeClass("navDown").addClass("navUp");
    } else {
        
// scroll Up
        if(st + $(window).height() < $(document).height()) {
            $("header").removeClass("navUp").addClass("navDown");
        }
    }
    lastScrollTop = st;
}
    
    //href is clicked
    $('a[href^="#"]').on('click', function (e) {

        //prevents default action of element
        e.preventDefault();

        //targets "#", if target = 
        var target = this.hash;
        var $target = $(target);

        //selects elements within html, body and animates scroll
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing');
    });

    //on click id victoria
    $("#victoria").click(function ($e) {
        //prevents default action of element - page scrolling back to top of page
        $e.preventDefault();
        //display / hide hidden id vicInfo with a fade toggle
        $("#vicArea").fadeToggle();
    });
    
     //reset Victoria menu locations on second click
     $("#victoria").click(function(){
        $(".albion, .epping, .hcross, .kealba, .lalor, .preston, .stAlbans, .sunWest").fadeOut();
    });
    
    //on click id albion
    $("#albionClick").click(function ($e) {
        //prevents default action of element - page scrolling back to top of page
        $e.preventDefault();
        //display / hide hidden id vicInfo with a fade toggle
        $(".albion").fadeToggle();
    });

    $("#eppingClick").click(function ($e) {
        $e.preventDefault();
        $(".epping").fadeToggle();
    });

    $("#hcrossClick").click(function ($e) {
        $e.preventDefault();
        $(".hcross").fadeToggle();
    });

    $("#kealbaClick").click(function ($e) {
        $e.preventDefault();
        $(".kealba").fadeToggle();
    });

    $("#lalorClick").click(function ($e) {
        $e.preventDefault();
        $(".lalor").fadeToggle();
    });

    $("#prestonClick").click(function ($e) {
        $e.preventDefault();
        $(".preston").fadeToggle();
    });

    $("#stAlbansClick").click(function ($e) {
        $e.preventDefault();
        $(".stAlbans").fadeToggle();
    });
    
    $("#sunWestClick").click(function ($e) {
        $e.preventDefault();
        $(".sunWest").fadeToggle();
    });
    
    
        //on click id nsw
    $("#nsw").click(function ($e) {
        //prevents default action of element - page scrolling back to top of page
        $e.preventDefault();
        //display / hide hidden id nswInfo with a fade toggle
        $("#nswArea").fadeToggle();
    });
    
     //reset nsw menu locations on second click
     $("#nsw").click(function(){
        $(".rockdale, .liverpool, .casula").fadeOut();
    });
    
    //on click id rockdale
    $("#rockdaleClick").click(function ($e) {
        //prevents default action of element - page scrolling back to top of page
        $e.preventDefault();
        //display / hide hidden id vicInfo with a fade toggle
        $(".rockdale").fadeToggle();
    });

    $("#liverpoolClick").click(function ($e) {
        $e.preventDefault();
        $(".liverpool").fadeToggle();
    });

    $("#casulaClick").click(function ($e) {
        $e.preventDefault();
        $(".casula").fadeToggle();
    });
    
    
    // wait until the images are loaded  
$(window).load(function(){  
    //for each description div. 
    $("div.descriptionOrange, div.descriptionRed, div.descriptionBlue, div.descriptionGreen").each(function(){
        
        // set the opacity to 0  
        $(this).css("opacity", 0);  
        
        // set width same as the image  
        $(this).css("width", $(this).siblings('img').width()); 
        
        // get the parent (the wrapper) and set it's width same as the image width  
        $(this).parent().css("width", $(this).siblings('img').width());   
        
        // set the display to block  
        $(this).css("display", "block");  
    });  
  
    $(".wrapper").hover(function(){  
        //when mouse hover over the wrapper div  
        //get it's children elements with class description  
        //and show it using fadeTo  
        $(this).children(".descriptionOrange, .descriptionRed, .descriptionBlue, .descriptionGreen").stop().fadeTo(500, 0.8);  
    },function(){  
        //when mouse out of the wrapper div  
        //use fadeTo to hide the div  
        $(this).children(".descriptionOrange, .descriptionRed, .descriptionBlue, .descriptionGreen").stop().fadeTo(500, 0);  
    
    });  
    
}); 
});