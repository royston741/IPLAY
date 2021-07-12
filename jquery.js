$('.log').addClass('suscribe');

$('.menu-bar').on('click',function(){
    $(".menu").slideToggle()
})

$(document).ready(function () {
    $('#autoWidth,#autoWidth2').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function () {
            $('#autoWidth,#autoWidth2').removeClass('cS-hidden');
        }
    });
});
