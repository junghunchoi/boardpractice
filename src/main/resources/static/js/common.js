// iframe에 부모페이지 url 전달
function sendUrlToIframe() {
  var $iframe_uploader = document.getElementById('uploader_iframe');
  var $iframe_editor = document.getElementById('editor_iframe');
  const message = {url: window.location.pathname};

  $iframe_editor.addEventListener('load', function () {
    $iframe_editor.contentWindow.postMessage(message, '*');
  });

  $iframe_uploader.addEventListener('load', function () {
    $iframe_uploader.contentWindow.postMessage(message, '*');
  });


}

sendUrlToIframe();

// iframe 높이 조절
function adjustIframeHeight(iframeId) {
  var iframe = document.getElementById(iframeId);
  var iframeBody = iframe.contentWindow.document.body;
  var height = calculateTotalHeight(iframeBody);
  iframe.style.height = height >= 580 ? height +'px' : '580px';
}

function calculateTotalHeight(element) {
  var totalHeight = 0;
  for (var child of element.childNodes) {
    if (child.offsetHeight) {
      totalHeight += child.offsetHeight;
    }
  }
  return Number(totalHeight) + 40;
}