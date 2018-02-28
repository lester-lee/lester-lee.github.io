$(document).ready(function() {
  $(".fonts-chooser").on("click", function() {
    $(".fonts-chooser").css("text-decoration", "none");
    $(this).css("text-decoration", "underline");
    var h, text;
    var num = parseInt($(this).attr("data-num"));
    switch (num) {
      case 2:
        h = "Rubik";
        text = "Open Sans";
        break;
      case 3:
        h = "Space Mono";
        text = "EB Garamond";
        break;
      case 4:
        h = "Oswald";
        text = "Ovo";
        break;
      case 5:
        h = "Ovo";
        text = "Crimson Text";
        break;
      case 6:
        h = "Crimson Text";
        text = "Roboto";
        break;
      default:
        h = "Cinzel";
        text = "Crimson Text";
        break;
    }
    $("body").css("font-family", text);
    $("h1, h2, h3, h4, h5, h6").css("font-family", h);
  });

  $(".color-chooser").on("click", function() {
    $(".color-chooser").css("text-decoration", "none");
    $(this).css("text-decoration", "underline");
    var bg, h, text;
    var num = parseInt($(this).attr("data-num"));
    switch (num) {
      case 2:
        bg = "#fff";
        h = "#d8703f";
        text = "#333";
        break;
      default:
        bg = "#fff";
        h = "#333";
        text = "#333";
        break;
    }
    // insert rules
    console.log(bg, h, text);
    $("body").css("background-color", bg);
    $("h1, h2, h3, h4, h5, h6").css("color", h);
    $("a").css("color", h);
    $("body").css("color", text);
  });

});
