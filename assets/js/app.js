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

var ubytovani = [["", "assets/img/ubytovani2/uby_1.JPG"],["", "assets/img/ubytovani2/uby_2.JPG"],
                ["", "assets/img/ubytovani2/uby_3.JPG"],["", "assets/img/ubytovani2/uby_4.JPG"],
                ["", "assets/img/ubytovani2/uby_5.JPG"],["", "assets/img/ubytovani2/uby_6.JPG"],
                ["", "assets/img/ubytovani2/uby_7.JPG"],["", "assets/img/ubytovani2/uby_8.JPG"],
                ["", "assets/img/ubytovani2/uby_9.JPG"],["", "assets/img/ubytovani2/uby_10.JPG"],
                ["", "assets/img/ubytovani2/uby_11.JPG"],["", "assets/img/ubytovani2/uby_12.JPG"],
                ["", "assets/img/ubytovani2/uby_13.JPG"],["", "assets/img/ubytovani2/uby_14.JPG"],
                ["", "assets/img/ubytovani2/uby_15.JPG"],["", "assets/img/ubytovani2/uby_16.JPG"],
                ["", "assets/img/ubytovani2/uby_17.JPG"],["", "assets/img/ubytovani2/uby_18.JPG"],
                ["", "assets/img/ubytovani2/uby_19.JPG"],["", "assets/img/ubytovani2/uby_20.JPG"],
                ["", "assets/img/ubytovani2/uby_21.JPG"],["", "assets/img/ubytovani2/uby_22.JPG"],
                ["", "assets/img/ubytovani2/uby_23.JPG"],["", "assets/img/ubytovani2/uby_24.JPG"],
                ["", "assets/img/ubytovani2/uby_25.JPG"],["", "assets/img/ubytovani2/uby_26.JPG"],
                ["", "assets/img/ubytovani2/uby_27.JPG"],["", "assets/img/ubytovani2/uby_28.JPG"],
                ["", "assets/img/ubytovani2/uby_29.JPG"],["", "assets/img/ubytovani2/uby_30.JPG"],
                ["", "assets/img/ubytovani2/uby_31.JPG"],["", "assets/img/ubytovani2/uby_32.JPG"]
                ];

var okoli = [["", "assets/img/okoli2/oko_1.JPG"],["", "assets/img/okoli2/oko_2.JPG"],
            ["", "assets/img/okoli2/oko_3.JPG"],["", "assets/img/okoli2/oko_4.JPG"],
            ["", "assets/img/okoli2/oko_5.JPG"],["", "assets/img/okoli2/oko_6.JPG"],
            ["", "assets/img/okoli2/oko_7.JPG"],["", "assets/img/okoli2/oko_8.JPG"],
            ["", "assets/img/okoli2/oko_9.JPG"],["", "assets/img/okoli2/oko_10.JPG"],
            ["", "assets/img/okoli2/oko_11.JPG"],["", "assets/img/okoli2/oko_12.JPG"],
            ["", "assets/img/okoli2/oko_13.JPG"]
            ];

var historie = [
              ["", "assets/img/historie/historie-05.jpg"], ["", "assets/img/obrazky/IMG_1.jpg"], ["", "assets/img/obrazky/IMG_2.jpg"],
              ["", "assets/img/historie/historie-04.jpg"],
              ["", "assets/img/historie/01.jpg"], ["", "assets/img/historie/04.jpg"], ["", "assets/img/historie/09.jpg"], ["", "assets/img/historie/10.jpg"]
            ];


var obrazky = [
              ["", "assets/img/obrazky/novy_1.JPG"], ["", "assets/img/obrazky/novy_2.JPG"], ["", "assets/img/obrazky/novy_3.JPG"],
              ["", "assets/img/obrazky/novy_4.JPG"], ["", "assets/img/obrazky/novy_5.JPG"], ["", "assets/img/obrazky/novy_6.JPG"],
              ["", "assets/img/obrazky/novy_7.JPG"], ["", "assets/img/obrazky/novy_8.JPG"], ["", "assets/img/obrazky/novy_9.JPG"],
              ["", "assets/img/obrazky/novy_10.JPG"], ["", "assets/img/obrazky/novy_11.JPG"], ["", "assets/img/obrazky/novy_12.JPG"],
              ["", "assets/img/obrazky/novy_13.JPG"], ["", "assets/img/obrazky/novy_14.JPG"], ["", "assets/img/obrazky/novy_15.JPG"],
              ["", "assets/img/obrazky/novy_16.JPG"], ["", "assets/img/obrazky/novy_17.JPG"], ["", "assets/img/obrazky/novy_18.JPG"],
              ["", "assets/img/obrazky/novy_19.JPG"], ["", "assets/img/obrazky/novy_20.JPG"], ["", "assets/img/obrazky/novy_21.JPG"],
              ["", "assets/img/obrazky/novy_22.JPG"], ["", "assets/img/obrazky/novy_23.JPG"], ["", "assets/img/obrazky/novy_24.JPG"],
              ["", "assets/img/obrazky/novy_25.JPG"], ["", "assets/img/obrazky/novy_26.JPG"], ["", "assets/img/obrazky/novy_27.JPG"],
              ["", "assets/img/obrazky/novy_28.JPG"], ["", "assets/img/obrazky/novy_29.JPG"], ["", "assets/img/obrazky/novy_30.JPG"],
              ["", "assets/img/obrazky/novy_31.JPG"], ["", "assets/img/obrazky/novy_32.JPG"], ["", "assets/img/obrazky/novy_33.JPG"],
              ["", "assets/img/obrazky/novy_34.JPG"], ["", "assets/img/obrazky/novy_35.JPG"], ["", "assets/img/obrazky/novy_36.JPG"],
              ["", "assets/img/obrazky/novy_37.JPG"], ["", "assets/img/obrazky/novy_38.JPG"], ["", "assets/img/obrazky/novy_39.JPG"],
              ["", "assets/img/obrazky/novy_40.JPG"], ["", "assets/img/obrazky/novy_41.JPG"], ["", "assets/img/obrazky/novy_42.JPG"],
              ["", "assets/img/obrazky/novy_43.JPG"], ["", "assets/img/obrazky/novy_44.JPG"], ["", "assets/img/obrazky/novy_45.JPG"],

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
