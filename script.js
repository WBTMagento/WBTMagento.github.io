$(window).scroll(function () {
  if ($(this).scrollTop() >= 50) {        // Ako je stranica skrolovana vise od 50 px
    $('#return-to-top').fadeIn(200);    // Pojavljuje se strelica za povratak na vrh
  } else {
    $('#return-to-top').fadeOut(200);   // U suprotnom strelice nema
  }
});
$('#return-to-top').click(function () {      // Kada se klikne na strelicu
  $('body,html').animate({
    scrollTop: 0                       // Vraca se na vrh stranice
  }, 600);
});

// kada se body ucita animacija za ucitavanje se sklanja uz kasnjenje od 300 milisekundi
function preloader() {
  setTimeout(function () {
    document.getElementById("preloader").style.display = "none";
  }, 300);
}

// document.addEventListener(//Detektovanje skrolovanja i prikaza progress bara u zavisnosti od toga kolliko je stranica skrolovana
//     "scroll",
//     function() {
//       var scrollTop =
//         document.documentElement["scrollTop"] || document.body["scrollTop"];
//       var scrollBottom =
//         (document.documentElement["scrollHeight"] ||
//           document.body["scrollHeight"]) - document.documentElement.clientHeight;
//       scrollPercent = scrollTop / scrollBottom * 100 + "%";
//       document
//         .getElementById("_progress")
//         .style.setProperty("--scroll", scrollPercent);
//     },
//     { passive: true }
//   );

function hoverinm() {//hover na magento ikonicu u sekciji konkurencija pokrece funkciju koja postavlja progress bar na 29.1% kao i odgovarajucu boju progress bara, isto za shopify i bigcommerce (funckije hoverins i hoverinb)

  $("#p1").css("width", "29.1%");
  $("#magprog").css("cursor", "pointer");
  $("#pt").css("opacity", "1");
  $("#pt").fadeIn(800);
  $("#pt").html("Magento:<br>29.1%");
  $("#p1").css("background-color", "#ff6f00");
  $("#pt").css("color", "orange");


}
function hoveroutm() {
  $("#p1").css("width", "0%");
  $("#pt").css("opacity", "0");
}

function hoverins() {
  $("#p1").css("width", "10.9%");
  $("#sprog").css("cursor", "pointer");
  $("#pt").css("opacity", "1");
  $("#pt").fadeIn(800);
  $("#pt").html("Shopify:<br>10.9%");
  $("#p1").css("background-color", "#7CFC00");
  $("#pt").css("color", "#7CFC00")
}
function hoverouts() {
  $("#p1").css("width", "0%");
  $("#pt").css("opacity", "0");
}
function hoverinb() {
  $("#p1").css("width", "9.4%");
  $("#bprog").css("cursor", "pointer");
  $("#pt").css("opacity", "1");
  $("#pt").fadeIn(800);
  $("#pt").html("BigCommerce:<br>9.4%");
  $("#p1").css("background-color", "#1f2147");
  $("#pt").css("color", "#1f2147")
}
function hoveroutb() {
  $("#p1").css("width", "0%");
  $("#pt").css("opacity", "0");

}

$("#magprog").hover(hoverinm, hoveroutm);
$("#sprog").hover(hoverins, hoverouts);
$("#bprog").hover(hoverinb, hoveroutb);

var txt;
function bannerhoverin() {
  $("#bancontent2").fadeOut(500);
  txt = $("#bancontent2").html();
  setTimeout(function () {
    $("#bancontent2").html("Koristite Magento");
  }, 500);
  $("#bancontent2").fadeIn(500);

}
function bannerhoverout() {
  $("#bancontent2").fadeOut(500);
  setTimeout(function () {
    $("#bancontent2").html(txt);
  }, 500);

  $("#bancontent2").fadeIn(500);

}
$("#navpage2").hover(bannerhoverin, bannerhoverout);


//Klikom na ikonicu u sekciji konkurencija otvara se odgovarajuci sajt, zbog bagova se koristi js umestko klasicnog href pristupa
$("#magprog").click(function () {
  window.open(
    'https://www.magento.com',
    '_blank'
  );
})

$("#sprog").click(function () {
  window.open(
    'https://www.shopify.com',
    '_blank'
  );
})

$("#bprog").click(function () {
  window.open(
    'https://www.bigcommerce.com',
    '_blank'
  );
})

$("#list1").click(function () {
  $("#list2").toggle();
  $("#list4").hide();
  $("#list6").hide();
  $("#list8").hide();
  $("#list10").hide();
  $("#list12").hide();
});
$("#list9").click(function () {
  $("#list2").hide();
  $("#list4").hide();
  $("#list6").hide();
  $("#list8").hide();
  $("#list10").toggle();
  $("#list12").hide();
});
$("#list11").click(function () {
  $("#list2").hide();
  $("#list4").hide();
  $("#list6").hide();
  $("#list8").hide();
  $("#list10").hide();
  $("#list12").toggle();
});
$("#list3").click(function () {
  $("#list4").toggle();
  $("#list2").hide();
  $("#list6").hide();
  $("#list8").hide();
  $("#list10").hide();
  $("#list12").hide();
});

$("#list5").click(function () {
  $("#list6").toggle();
  $("#list4").hide();
  $("#list2").hide();
  $("#list8").hide();
  $("#list10").hide();
  $("#list12").hide();
});

$("#list7").click(function () {
  $("#list8").toggle();
  $("#list4").hide();
  $("#list6").hide();
  $("#list2").hide();
  $("#list10").hide();
  $("#list12").hide();
});
$(document).ready(function () {
  $("#list2").hide();
  $("#list4").hide();
  $("#list6").hide();
  $("#list8").hide();
  $("#list10").hide();
  $("#list12").hide();
});


