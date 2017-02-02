(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-91209242-1', 'auto');
ga('send', 'pageview');









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

var ubytovani = [["", "assets/img/obrazky/IMG_5745.JPG"], ["", "assets/img/obrazky/IMG_5746.JPG"], ["", "assets/img/obrazky/IMG_5749.JPG"],
["", "assets/img/obrazky/IMG_5753.JPG"], ["", "assets/img/obrazky/IMG_5760.JPG"], ["", "assets/img/obrazky/IMG_5761.JPG"],
["", "assets/img/obrazky/IMG_5763.JPG"], ["", "assets/img/obrazky/IMG_5764.JPG"], ["", "assets/img/obrazky/IMG_5765.JPG"],
["", "assets/img/obrazky/IMG_5766.JPG"], ["", "assets/img/obrazky/IMG_5769.JPG"], ["", "assets/img/obrazky/IMG_5771.JPG"],
["", "assets/img/obrazky/IMG_5772.JPG"], ["", "assets/img/obrazky/IMG_5776.JPG"], ["", "assets/img/obrazky/IMG_5779.JPG"]];

var okoli = [["", "assets/img/okoli/sumava-01.jpg"], ["", "assets/img/okoli/sumava-03-filipova-hut.jpg"], ["", "assets/img/okoli/sumava-04-klostermannova-chata.jpg"], ["", "assets/img/okoli/sumava-05.jpg"]];

var historie = [
              ["", "assets/img/historie/historie-01.jpg"], ["", "assets/img/historie/historie-02.jpg"], ["", "assets/img/historie/historie-03.jpg"],
              ["", "assets/img/historie/historie-04.jpg"], ["", "assets/img/historie/historie-05.jpg"]
            ];


var obrazky = [
              ["", "assets/img/obrazky/IMG_1.jpg"], ["", "assets/img/obrazky/IMG_2.jpg"], ["", "assets/img/obrazky/IMG_3.jpg"],
              ["", "assets/img/obrazky/IMG_4.jpg"], ["", "assets/img/obrazky/IMG_5.jpg"], ["", "assets/img/obrazky/IMG_6.jpg"],
              ["", "assets/img/obrazky/IMG_7.jpg"], ["", "assets/img/obrazky/IMG_8.jpg"], ["", "assets/img/obrazky/IMG_9.jpg"],

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
  $(".sliderWrap").css("z-index", "-100");
});

// GALERIE

$(".galerie .Gobrazek").click(function(){
  $(".sliderWrap").css("z-index", "100");

  var element = $(this);
  cislo = parseInt(element.children().children().attr("alt"));

  $(".galerie .lista p").text(obrazky[cislo][0]);
  $(".galerie .obraz").css("background", "url('"+obrazky[cislo][1]+"')");
  $(".galerie .slider").css("display", "block");
});

$(".galerie .lista a:first-child").click(function(){
  cislo--;

  if (cislo < 0) {
    cislo = 0;
  }

  $(".galerie .lista p").text(obrazky[cislo][0]);
  $(".galerie .obraz").css("background", "url('"+obrazky[cislo][1]+"')");

});

$(".galerie .lista a:last-child").click(function(){
  cislo++;

  if (cislo >= obrazky.length) {
    cislo = obrazky.length - 1;
  }

  $(".galerie .lista p").text(obrazky[cislo][0]);
  $(".galerie .obraz").css("background", "url('"+obrazky[cislo][1]+"')");

});




// HISTORIE

$(".historiee .Gobrazek").click(function(){
  $(".sliderWrap").css("z-index", "100");

  var element = $(this);
  cislo = parseInt(element.children().children().attr("alt"));

  $(".historiee .lista p").text(historie[cislo][0]);
  $(".historiee .obraz").css("background", "url('"+historie[cislo][1]+"')");
  $(".historiee .slider").css("display", "block");
});

$(".historiee .lista a:first-child").click(function(){
  cislo--;

  if (cislo < 0) {
    cislo = 0;
  }

  $(".historiee .lista p").text(historie[cislo][0]);
  $(".historiee .obraz").css("background", "url('"+historie[cislo][1]+"')");

});

$(".historiee .lista a:last-child").click(function(){
  cislo++;

  if (cislo >= historie.length) {
    cislo = historie.length - 1;
  }

  $(".historiee .lista p").text(historie[cislo][0]);
  $(".historiee .obraz").css("background", "url('"+historie[cislo][1]+"')");

});




// OKOLI

$(".okolii .Gobrazek").click(function(){
  $(".sliderWrap").css("z-index", "100");

  var element = $(this);
  cislo = parseInt(element.children().children().attr("alt"));

  $(".okolii .lista p").text(okoli[cislo][0]);
  $(".okolii .obraz").css("background", "url('"+okoli[cislo][1]+"')");
  $(".okolii .slider").css("display", "block");
});

$(".okolii .lista a:first-child").click(function(){
  cislo--;

  if (cislo < 0) {
    cislo = 0;
  }

  $(".okolii .lista p").text(okoli[cislo][0]);
  $(".okolii .obraz").css("background", "url('"+okoli[cislo][1]+"')");

});

$(".okolii .lista a:last-child").click(function(){
  cislo++;

  if (cislo >= okoli.length) {
    cislo = okoli.length - 1;
  }

  $(".okolii .lista p").text(okoli[cislo][0]);
  $(".okolii .obraz").css("background", "url('"+okoli[cislo][1]+"')");

});


// UBYTOVANI

$(".ubytovanii .Gobrazek").click(function(){
  $(".sliderWrap").css("z-index", "100");

  var element = $(this);
  cislo = parseInt(element.children().children().attr("alt"));

  $(".ubytovanii .lista p").text(ubytovani[cislo][0]);
  $(".ubytovanii .obraz").css("background", "url('"+ubytovani[cislo][1]+"')");
  $(".ubytovanii .slider").css("display", "block");
});

$(".ubytovanii .lista a:first-child").click(function(){
  cislo--;

  if (cislo < 0) {
    cislo = 0;
  }

  $(".ubytovanii .lista p").text(ubytovani[cislo][0]);
  $(".ubytovanii .obraz").css("background", "url('"+ubytovani[cislo][1]+"')");

});

$(".ubytovanii .lista a:last-child").click(function(){
  cislo++;

  if (cislo >= ubytovani.length) {
    cislo = ubytovani.length - 1;
  }

  $(".ubytovanii .lista p").text(ubytovani[cislo][0]);
  $(".ubytovanii .obraz").css("background", "url('"+ubytovani[cislo][1]+"')");

});
