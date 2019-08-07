$(document).ready( function() {
  /* Photoswipe */
  $(".Gallery li img").on("click", function(){
    console.log($(this));

    var pswpElem = $(".pswp")[0];

    var images = [];
    var idx = 0;

    $(".Gallery li img").each(function(){
      var img = $(this)[0];
      $(this).attr("data-idx", idx++);
      var imgObj = {
        src: img.src,
        w: img.naturalWidth,
        h: img.naturalHeight,
        title: img.getAttribute('alt')
      };
      images.push(imgObj);
    });


    var options = {
      index: $(this).attr("data-idx"),
      shareEl: false
    };

    var gallery = new PhotoSwipe( pswpElem, PhotoSwipeUI_Default, images, options);
    gallery.init();
  });
});
