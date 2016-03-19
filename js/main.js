//wait for the DOM elements to load before executing
$(document).ready(function () {
    
    $('.hamburger').click(function(){ 
        $(this).next().slideToggle(); 
        
        });
    
    

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
        $("#albion, #epping, #hcross, #kealba, #lalor, #preston, #stAlbans, #sunWest").fadeOut();
    });
    
    //on click id albion
    $("#albionClick").click(function ($e) {
        //prevents default action of element - page scrolling back to top of page
        $e.preventDefault();
        //display / hide hidden id vicInfo with a fade toggle
        $("#albion").fadeToggle();
    });

    $("#eppingClick").click(function ($e) {
        $e.preventDefault();
        $("#epping").fadeToggle();
    });

    $("#hcrossClick").click(function ($e) {
        $e.preventDefault();
        $("#hcross").fadeToggle();
    });

    $("#kealbaClick").click(function ($e) {
        $e.preventDefault();
        $("#kealba").fadeToggle();
    });

    $("#lalorClick").click(function ($e) {
        $e.preventDefault();
        $("#lalor").fadeToggle();
    });

    $("#prestonClick").click(function ($e) {
        $e.preventDefault();
        $("#preston").fadeToggle();
    });

    $("#stAlbansClick").click(function ($e) {
        $e.preventDefault();
        $("#stAlbans").fadeToggle();
    });
    
    $("#sunWestClick").click(function ($e) {
        $e.preventDefault();
        $("#sunWest").fadeToggle();
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
        $("#rockdale, #liverpool, #casula").fadeOut();
    });
    
    //on click id rockdale
    $("#rockdaleClick").click(function ($e) {
        //prevents default action of element - page scrolling back to top of page
        $e.preventDefault();
        //display / hide hidden id vicInfo with a fade toggle
        $("#rockdale").fadeToggle();
    });

    $("#liverpoolClick").click(function ($e) {
        $e.preventDefault();
        $("#liverpool").fadeToggle();
    });

    $("#casulaClick").click(function ($e) {
        $e.preventDefault();
        $("#casula").fadeToggle();
    });
    
    
    // wait until the images are loaded  
$(window).load(function(){  
    //for each description div. 
    $("div.descriptionOrange, div.descriptionRed, div.descriptionBlue, div.descriptionGreen").each(function(){
        
        // set the opacity to 0  
        $(this).css("opacity", 0);  
        
        // set width same as the image  
        $(this).css("max-width, 100%", $(this).siblings("img").width()); 
        
        // get the parent (the wrapper) and set it's width same as the image width  
        $(this).parent().css("max-width, 100%", $(this).siblings("img").width());  
        
       // set height same as the image  
       $(this).css("max-height, 100%", $(this).siblings("img").height());
        
        // get the parent (the wrapper) and set it's height same as the image height  
       $(this).parent().css("max-height, 100%", $(this).siblings("img").height());  

        // set the display to block  
        $(this).css("display", "block");  
    });  
  
    $("div.wrapper").hover(function(){  
        //when mouse hover over the wrapper div  
        //get it's children elements with class description  
        //and show it using fadeTo  
        $(this).children(".descriptionOrange, .descriptionRed, .descriptionBlue, .descriptionGreen").stop().fadeTo(500, 0.7);  
    },function(){  
        //when mouse out of the wrapper div  
        //use fadeTo to hide the div  
        $(this).children(".descriptionOrange, .descriptionRed, .descriptionBlue, .descriptionGreen").stop().fadeTo(500, 0);  
    });  
    
}); 
});