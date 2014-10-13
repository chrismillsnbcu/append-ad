// Tester
mps._ready(function() {
  var html = '';
  html += '<div class="left-ad" id="left-ad" style="background:url(http://io.mps.io/skins/creatives/rails-telemundo-army-150.jpg) top left no-repeat;width:150px;height:600px;position:absolute;left:-150px;top:0;"></div>';
  html += '<div class="right-ad" id="right-ad" style="background:url(http://io.mps.io/skins/creatives/rails-telemundo-army-150.jpg) top right no-repeat;width:150px; height:600px; position:absolute;left:970px; top:0;"></div>';
  mps._append(mps._select('#content'), html);
  document.getElementById('content').style.position = "relative";
  window.onscroll = function() {
    document.getElementById('left-ad').style.top = window.pageYOffset + 'px';
    document.getElementById('right-ad').style.top = window.pageYOffset + 'px';
  }
});
//