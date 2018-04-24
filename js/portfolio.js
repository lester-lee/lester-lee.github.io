$(document).ready( function() {
  $("#gallery-container").masonry({
    itemSelector: 'li',
    columnWidth: 300
  });

  /* Photoswipe */
  $("#gallery-container li img").on("click", function(){
    console.log($(this));
    console.log(gallery);

    var pswpElem = $(".pswp")[0];

    var images = [];
    $("#gallery-container li img").each(function(){
      var img = $(this)[0];
      var imgObj = {
        src: img.src,
        w: img.naturalWidth,
        h: img.naturalHeight
      };
      images.push(imgObj);
    });


    var options = {
      index: $(this).attr("data-idx") - 1,
      shareEl: false
    };

    var gallery = new PhotoSwipe( pswpElem, PhotoSwipeUI_Default, images, options);
    gallery.init();
  });
});
