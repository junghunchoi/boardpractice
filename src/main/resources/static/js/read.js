document.getElementById('button_download').addEventListener('click', function(e) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://10.10.0.157:1234/download', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.responseType = 'blob';

  xhr.onload = function() {
    if (xhr.status === 200) {
      var blob = xhr.response;
      var url = window.URL || window.webkitURL;
      var downloadUrl = url.createObjectURL(blob);
      var a = document.createElement('a');

      a.href = downloadUrl;
      a.download = 'files.zip';
      document.body.appendChild(a);
      a.click();

      // 필요에 따라 setTimeout을 사용하여 URL을 해제
      setTimeout(function() {
        URL.revokeObjectURL(downloadUrl);
      }, 100); // 100ms 후에 URL 해제

      a.remove();
    } else {
      console.error('Error fetching files:', xhr.statusText);
    }
  };

  xhr.onerror = function() {
    console.error('Network error');
  };

  var data = JSON.stringify({
    fileList: getCheckedFileList()
  });
  xhr.send(data);
});

function getCheckedFileList() {
  var checkboxes = document.querySelectorAll(".fileList input[type='checkbox']");
  var checked = [];
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checked.push(checkboxes[i].defaultValue);
    }
  }
  return checked;
}
