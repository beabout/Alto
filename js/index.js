var scale = 97.5;
var heightDoc = $(document).height();

$(document).ready(function () {
  var heightWin = $(window).height();
  var heightElem = (heightWin * scale) / heightDoc;
  $('.scroll-bar').css("height", heightElem + "%");
  $(document).scroll(function () {
    var adjustedPixelsAbove = $(document).scrollTop() / heightDoc * heightWin;
    $('.scroll-bar').css("margin-top", adjustedPixelsAbove+"px");
  });
});

function drawScrollBarElem(elem, marker) {
  $(document).ready(function () {
    var heightWin = $(window).height();
    var heightElem = $("#"+elem).height();
    var offsetFromTop = document.getElementById(elem).offsetTop;
    var marginScaled = offsetFromTop / heightDoc * heightWin;
    var heightScaled = heightElem / heightDoc * heightWin;
    $("."+marker).css("height", heightScaled);
    $("."+marker).css("marginTop", marginScaled);
  });
}

drawScrollBarElem('outline', 'outline-scroll-marker');
drawScrollBarElem('header', 'header-scroll-marker');