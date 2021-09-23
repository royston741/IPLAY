$(".log").addClass("suscribe");

$(".menu-bar").on("click", function () {
  $(".menu").slideToggle();
});

$(document).ready(function () {
  $("#autoWidth,#autoWidth2").lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $("#autoWidth,#autoWidth2").removeClass("cS-hidden");
    },
  });
});

$(".log-in").on("click", function () {
  let user_name = $(".user-name").val();
  let user_password = $(".password").val();
  if (user_name == "Shrutik" && user_password == "shrutik") {
    $(".log-in").css('display','none');
    $(".log-in").css("background-color", "green");
    $(".sign_up_container h5").css("display", "none");
    $(".sign_up_container input").css("display", "none");
    $(".wrong").css("display", "none");
    $(".roy").css("display", "block");
    $(".direct").css("display", "block");
    
  } else {
    $(".wrong").css("display", "block");
  }
});

$('.log').text('ROYSTON')
let change_num=0;

$('.add').on('click',function(){
  change_num=change_num+1;
  $('.watch-number').text(change_num);
})

