$(document).ready(function(){

    var slideIndex = 1;
    var ok = 0;
    showSlides(slideIndex);

    $(".prev").click(function(){
        plusSlides(-1);
    });
    $(".next").click(function(){
        plusSlides(1);
    });

    function plusSlides(n) {
        ok = 1;
        showSlides(slideIndex+=n);
    }


    function showSlides(n) {
        $(".pictures").css("display","none");
        if (n > $(".pictures").length) {slideIndex = 1;}
        if (n < 1) {slideIndex = $(".pictures").length;}

        $(".pictures").eq(slideIndex - 1).css("display","block");


        if(ok == 0){
            slideIndex++;
            if (slideIndex > $(".pictures").length) {
                slideIndex = 1;
            }

            setTimeout(showSlides,1990);
        }
        ok = 0;
    }


});