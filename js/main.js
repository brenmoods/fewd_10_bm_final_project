//wait for the DOM elements to load before executing
$(document).ready(function () {

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

});