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

        //display hidden id vicInfo with a fade toggle
        $("#vicArea").fadeToggle();
    });
});