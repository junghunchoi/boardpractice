function filesDownload(){
  return fetch('http://10.10.0.157:1234/download', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fileList: getCheckedFileList(),
    }),
  })
  .then((response) => response.blob())
  .then((blob) => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'files.zip';
    document.body.appendChild(a);
    a.click();
    a.remove();
  })
  .catch((error) => console.error('Error fetching files:', error));
}

function getCheckedFileList() {
  var checkboxes = document.querySelectorAll(".uploader-main input[type='checkbox']");
  var checked = [];
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checked.push(checkboxes[i].defaultValue);
    }
  }
  return checked;
}

window.addEventListener('message', (event) => {
  console.log("getMessage",event.data);
  if (event.data === 'editorLoaded') {
    const $iframe_editor = document.querySelector('#editor_iframe');
    const editorHeight = $iframe_editor.contentWindow.document.getElementsByClassName('contentArea')[0].offsetHeight + 60;
    $iframe_editor.style.height = editorHeight >= 200 ? editorHeight + 'px' : '200px';
    $iframe_editor.contentWindow.document.getElementsByClassName('contentArea')[0].style.height = $iframe_editor.offsetHeight - 40 + 'px';
  } else if (event.data === 'uploaderLoaded') {
    const $iframe_uploader = document.querySelector('#uploader_iframe');
    const uploaderHeight = $iframe_uploader.contentWindow.document.getElementsByClassName('uploader-main')[0].offsetHeight + 10;
    $iframe_uploader.style.height = uploaderHeight + 'px';
  }
})