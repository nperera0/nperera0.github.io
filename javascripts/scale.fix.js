var metas = document.getElementsByTagName('meta');
var i;

// Check for iPhone and modify viewport meta tag accordingly
if (navigator.userAgent.match(/iPhone/i)) {
  for (i = 0; i < metas.length; i++) {
    if (metas[i].name === "viewport") {
      metas[i].content = "width=device-width, initial-scale=1.0, user-scalable=no";
    }
  }

  // Add event listener for pinch-to-zoom gesture
  document.addEventListener("gesturestart", function() {
    for (i = 0; i < metas.length; i++) {
      if (metas[i].name === "viewport") {
        metas[i].content = "width=device-width, initial-scale=1.0, user-scalable=yes";
      }
    }
  }, false);
}