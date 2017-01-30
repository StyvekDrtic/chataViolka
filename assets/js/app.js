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

var obrazky = [
              ["", "assets/img/obrazky/IMG_1.JPG"], ["", "assets/img/obrazky/IMG_2.JPG"], ["", "assets/img/obrazky/IMG_3.JPG"],
              ["", "assets/img/obrazky/IMG_4.JPG"], ["", "assets/img/obrazky/IMG_5.JPG"], ["", "assets/img/obrazky/IMG_6.JPG"],
              ["", "assets/img/obrazky/IMG_7.JPG"], ["", "assets/img/obrazky/IMG_8.JPG"], ["", "assets/img/obrazky/IMG_9.JPG"],

              ["", "assets/img/obrazky/IMG_4420.JPG"], ["", "assets/img/obrazky/IMG_4423.JPG"], ["", "assets/img/obrazky/IMG_4428.JPG"],
              ["", "assets/img/obrazky/IMG_4430.JPG"], ["", "assets/img/obrazky/IMG_4919.JPG"], ["", "assets/img/obrazky/IMG_4921.JPG"],
              ["", "assets/img/obrazky/IMG_4922.JPG"], ["", "assets/img/obrazky/IMG_4923.JPG"], ["", "assets/img/obrazky/IMG_4924.JPG"],
              ["", "assets/img/obrazky/IMG_4926.JPG"], ["", "assets/img/obrazky/IMG_5498.JPG"], ["", "assets/img/obrazky/IMG_5727.JPG"],
              ["", "assets/img/obrazky/IMG_5728.JPG"], ["", "assets/img/obrazky/IMG_5736.JPG"], ["", "assets/img/obrazky/IMG_5741.JPG"],
              ["", "assets/img/obrazky/IMG_5745.JPG"], ["", "assets/img/obrazky/IMG_5746.JPG"], ["", "assets/img/obrazky/IMG_5749.JPG"],
              ["", "assets/img/obrazky/IMG_5753.JPG"], ["", "assets/img/obrazky/IMG_5760.JPG"], ["", "assets/img/obrazky/IMG_5761.JPG"],
              ["", "assets/img/obrazky/IMG_5763.JPG"], ["", "assets/img/obrazky/IMG_5764.JPG"], ["", "assets/img/obrazky/IMG_5765.JPG"],
              ["", "assets/img/obrazky/IMG_5766.JPG"], ["", "assets/img/obrazky/IMG_5769.JPG"], ["", "assets/img/obrazky/IMG_5771.JPG"],
              ["", "assets/img/obrazky/IMG_5772.JPG"], ["", "assets/img/obrazky/IMG_5776.JPG"], ["", "assets/img/obrazky/IMG_5779.JPG"],
              ["", "assets/img/obrazky/IMG_5858.JPG"], ["", "assets/img/obrazky/IMG_5922.JPG"], ["", "assets/img/obrazky/IMG_5981.JPG"],
              ["", "assets/img/obrazky/IMG_5985.JPG"], ["", "assets/img/obrazky/IMG_5987.JPG"], ["", "assets/img/obrazky/IMG_5990.JPG"],
              ["", "assets/img/obrazky/IMG_6007.JPG"]];
var cislo = 0;

$(".slider span:last-child").click(function(){
  $(".slider").css("display", "none");
});

$(".Gobrazek").click(function(){
  var element = $(this);
  cislo = parseInt(element.children().children().attr("alt"));

  $(".lista p").text(obrazky[cislo][0]);
  $(".obraz").css("background", "url('"+obrazky[cislo][1]+"')");
  $(".slider").css("display", "block");
});

$(".lista a:first-child").click(function(){
  cislo--;

  if (cislo < 0) {
    cislo = 0;
  }

  $(".lista p").text(obrazky[cislo][0]);
  $(".obraz").css("background", "url('"+obrazky[cislo][1]+"')");

});

$(".lista a:last-child").click(function(){
  cislo++;

  if (cislo >= obrazky.length) {
    cislo = obrazky.length - 1;
  }

  $(".lista p").text(obrazky[cislo][0]);
  $(".obraz").css("background", "url('"+obrazky[cislo][1]+"')");

});
