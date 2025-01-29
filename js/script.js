$(document).ready(function(){
    $(".btnToTariffs[href*='#']").on("click", function(e){
        let anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
        console.log(1)
    });

    $('.pay-button').on("click", function(e){
        e.preventDefault();
        let tariff = $(this).attr('href');
        $(tariff).addClass('modalActive')
        console.log(2)
    });

    $('.modal-back').on("click", function(e){
        $('.modal-pay').removeClass('modalActive')
        console.log(3)
    });

    $('.modalClose').on("click", function(e){
        $('.modal-pay').removeClass('modalActive')
        console.log(4)
    });



});