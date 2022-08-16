

  function doalert_flickr(checkboxElem) {
    if (checkboxElem.checked) {
        
    } else {
        
       
(function() {
    var flickerURL = "http://api.flickr.com/services/feeds/photos_public.gne?tags=nature&format=json&jsoncallback=?";
    $.getJSON(flickerURL)
      .done(function(data) {
        var div = document.getElementById("body_");
        data.items.slice(0,3).map((item, index) => {
          var img = new Image();
          img.src = item.media.m;
          img.onload = () => div.appendChild(img);
        });
      });
  })();

    }
}