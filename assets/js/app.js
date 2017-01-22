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
