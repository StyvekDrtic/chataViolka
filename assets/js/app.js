function dolni() {
  $(".bubliny").css("top", "calc(50% - 766px)");
}

function stredni() {
  $(".bubliny").css("top", "calc(50% - 465px)");
}

function horni() {
  $(".bubliny").css("top", "calc(50% - 145px)");
}

function cela() {
  setTimeout(function(){
    horni();
    setTimeout(function(){
      stredni();
      setTimeout(function(){
        dolni();
        setTimeout(function(){
          stredni();
        }, 5000);
      }, 5000);
    }, 5000);
  }, 5000);
}

setTimeout(cela, 0);
setInterval(cela, 21000);

// DALSI

var obrazky = [["JOJO tohle je popisek", "../img/obrazky/test.png"], ["dalsi", "../img/obrazky/test.png"]];
var cislo = 0;

$(".slider span:last-child").click(function(){
  $(".slider").css("display", "none");
});

$(".Gobrazek").click(function(){
  var element = $(this);
  cislo = parseInt(element.children().children().attr("alt"));

  $(".lista p").text(obrazky[cislo][0]);
  $(".slider").css("display", "block");
});

$(".lista a:first-child").click(function(){
  cislo--;

  if (cislo < 0) {
    cislo = 0;
  }

  $(".lista p").text(obrazky[cislo][0]);
});

$(".lista a:last-child").click(function(){
  cislo++;

  if (cislo >= obrazky.length) {
    cislo = obrazky.length - 1;
  }

  $(".lista p").text(obrazky[cislo][0]);


});
