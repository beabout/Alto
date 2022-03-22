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
    var heightElem = $("#"+elem).height();
    var offsetFromTop = document.getElementById(elem).offsetTop;
    heightPercentage = (heightElem * scale) / heightDoc;
    marginPercentage = (offsetFromTop * scale) / heightDoc;
    $("."+marker).css("height", heightPercentage + "%");
    $("."+marker).css("marginTop", marginPercentage + "%");
  });
}

drawScrollBarElem('outline', 'outline-scroll-marker');
drawScrollBarElem('header', 'header-scroll-marker');