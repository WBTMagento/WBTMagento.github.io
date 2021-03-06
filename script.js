$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 600);
});


function preloader() {
setTimeout(function(){
    document.getElementById("preloader").style.display = "none";
}, 500);
}

document.addEventListener(
    "scroll",
    function() {
      var scrollTop =
        document.documentElement["scrollTop"] || document.body["scrollTop"];
      var scrollBottom =
        (document.documentElement["scrollHeight"] ||
          document.body["scrollHeight"]) - document.documentElement.clientHeight;
      scrollPercent = scrollTop / scrollBottom * 100 + "%";
      document
        .getElementById("_progress")
        .style.setProperty("--scroll", scrollPercent);
    },
    { passive: true }
  );

  function hoverinm(){
      $("#p1").css("width","29.1%");
      $("#magprog").css("cursor","pointer");
      $("#pt").css("opacity","1");
      $("#pt").fadeIn(800);
      $("#pt").html("Magento:<br>29.1%");
      $("#p1").css("background-color","#ff6f00");
      $("#pt").css("color","orange");
      
  }
  function hoveroutm(){
    $("#p1").css("width","0%");
    $("#pt").css("opacity","0");
}

function hoverins(){
    $("#p1").css("width","10.9%");
    $("#sprog").css("cursor","pointer");
    $("#pt").css("opacity","1");
    $("#pt").fadeIn(800);
    $("#pt").html("Shopify:<br>10.9%");
    $("#p1").css("background-color","#7CFC00");
    $("#pt").css("color","#7CFC00")
}
function hoverouts(){
  $("#p1").css("width","0%");
  $("#pt").css("opacity","0");
}
function hoverinb(){
    $("#p1").css("width","9.4%");
    $("#bprog").css("cursor","pointer");
    $("#pt").css("opacity","1");
    $("#pt").fadeIn(800);
    $("#pt").html("BigCommerce:<br>9.4%");
    $("#p1").css("background-color","#1f2147");
    $("#pt").css("color","#1f2147")
}
function hoveroutb(){
  $("#p1").css("width","0%");
  $("#pt").css("opacity","0");
  
}

  $("#magprog").hover(hoverinm,hoveroutm);
  $("#sprog").hover(hoverins,hoverouts);
  $("#bprog").hover(hoverinb,hoveroutb);

  var txt;
  function bannerhoverin()
  {
    $("#bancontent2").fadeOut(500);
    txt = $("#bancontent2").html();
    setTimeout(function(){
      $("#bancontent2").html("Koristite Magento");
    },500);
    $("#bancontent2").fadeIn(500);

  }
  function bannerhoverout()
  {
    $("#bancontent2").fadeOut(500);
    setTimeout(function(){
      $("#bancontent2").html(txt);
    },500);

    $("#bancontent2").fadeIn(500);

  }
  $("#navpage2").hover(bannerhoverin, bannerhoverout);
